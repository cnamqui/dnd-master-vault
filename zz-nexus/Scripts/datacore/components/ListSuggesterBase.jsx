// ListSuggesterBase: inline list of selected strings backed by a frontmatter array
// Props:
// - fileName: path to file whose frontmatter array will be read/written
// - fieldName: frontmatter key that stores an array of strings
// - options: array of option objects passed to templater's suggester
// - dropdownMap: (option) => string used to present an option and to coerce suggester result
// - addButtonLabel: label for the add button
// - className: optional additional class
const shared = await dc.require('zz-nexus/Scripts/datacore/utils/shared.js')
const { system } = await dc.require('zz-nexus/Scripts/datacore/utils/templaterapi.js')
const defaultDropdownMap = (o) => {
    return String(o);
}
const defaultSaveMap = (o) => {
    return JSON.stringify(o)
}

const defaultRenderItem = (item) => {
    return (<span> {item} </span>)
}

const ListSuggesterBase = ({ fileName,
    fieldName,
    options = [],
    dropdownMap = defaultDropdownMap, //Suggester display
    saveMap = defaultSaveMap, // Frontmatter display 
    renderItem = defaultRenderItem, //List display
    addButtonLabel = () => 'Add',
    singleMode = false,
    className = '',
    actions = [],
    children,
}) => {
    const [items, setItems] = dc.useState([])
    const [loading, setLoading] = dc.useState(false)
    const topClass = (className ? className + ' ' : '') + 'dcc-list-suggester-base'
    const dcFile = dc.useFile(fileName)

    // Load saved strings from frontmatter using dc.useFile so the component
    // automatically refreshes when the file/frontmatter changes.
    dc.useEffect(() => {
        if (!fileName || !fieldName) {
            return;
        }
        const val = dcFile.field(fieldName)?.raw;
        if (!singleMode &&Array.isArray(val)) {  
            setItems(val)
        } else if(!singleMode){
            setItems([])
        }else {
            setItems(val)
        } 
    }, [dcFile, fileName, fieldName])

    let renderAddButtonLabel = addButtonLabel;
    if(typeof addButtonLabel === 'string'){
        renderAddButtonLabel = ()=> addButtonLabel
    }

    const persist = dc.useCallback(async (next) => {
        try { 
            await shared.saveToFrontmatter(fileName, fieldName, next)
        } catch (e) {
            console.log('ERR',e)
        }
    }, [fileName, fieldName])

    const handleAdd = dc.useCallback(async () => {
        if (!fileName || !fieldName) return
        setLoading(true)
        try {
            const res = await system.suggester(dropdownMap, options)
            if (typeof res === 'undefined' || res === null) {
                return;
            } 
            const candidate = saveMap(res) 
            if (!candidate) return  
            setItems((prev) => {
                let next;
                if (singleMode) {
                    next = candidate;
                } else {
                    next = prev.includes(candidate) ? prev : [...prev, candidate]
                } 
                (async () => { try { await persist(next) } catch (e) { } })()
                return next
            }) 
        } catch (e) {
            console.log('ERR',e)
        } finally {
            setLoading(false)
        }
    }, [fileName, fieldName, options, dropdownMap, persist])

    const handleRemove = dc.useCallback((index) => { 
        let next;
        if (!singleMode) {
            next = items.filter((_, i) => i !== index)  
        }
        setItems(next); 
        (async () => { try { await persist(next) } catch (e) { } })()
    }, [items, persist])

    return (
        <div className={topClass}>
            {singleMode ?
                (items && (<span key={1} className={`dcc-list-suggester-base-item`}>
                    {renderItem(items)}
                    <button type="button" className={`dcc-list-suggester-base-remove`} onClick={() => handleRemove()} aria-label={`Remove ${items}`}>×</button>
                </span>)) :
                (items.map((it, i) => {
                    return (
                        <span key={i} className={`dcc-list-suggester-base-item`}>
                            {renderItem(it)}
                            <button type="button" className={`dcc-list-suggester-base-remove`} onClick={() => handleRemove(i)} aria-label={`Remove ${it}`}>×</button>
                        </span>
                    )
                }))}
            <span>
            {!(singleMode && items) &&
                <button type="button" className={`dcc-list-suggester-base-add`} onClick={handleAdd} disabled={loading}>
                    {renderAddButtonLabel()}{loading ? '…' : ''}
                </button>
            }
            </span>
            <span>
                {children}
            </span>
        </div>
    )
}

return ListSuggesterBase
