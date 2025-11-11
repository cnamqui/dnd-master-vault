// ListSuggesterAdd: wraps ListSuggesterBase and adds a "create from template" button
// Props:
// - fileName, fieldName, options, dropdownMap, addButtonLabel, className (passed to base)
// - templatePath: string path to a template used by templater's file.find_tfile
// - transform: (createdFile) => string  -- required, maps templater-created file to a string to store
// - openNew: boolean (default false) -- passed to file.create_new
const shared = await dc.require('zz-nexus/Scripts/datacore/utils/shared.js')
const { system } = await dc.require('zz-nexus/Scripts/datacore/utils/templaterapi.js')
const ListSuggesterBase = await dc.require('zz-nexus/Scripts/datacore/components/ListSuggesterBase.jsx')
const defaultDropdownMap = (o) => {
    return o.$name;
}
const defaultSaveMap = ((page) => {
    return page;
})
const defaultRenderItem = ((item) => {
    return (
        <dc.Link link={item}></dc.Link>
    )
})

const ListSuggesterAdd = ({ fileName,
    fieldName,
    options = [],
    dropdownMap = defaultDropdownMap,
    saveMap = defaultSaveMap,
    renderItem = defaultRenderItem,
    addButtonLabel = () => 'Select',
    createButtonLabel = () => 'New',
    className = '',
    templatePath = '',
    onCreate,
    openNew = true,
    showCreate = true,
    singleMode = false,
}) => {
    const [creating, setCreating] = dc.useState(false)
    const topClass = (className ? className + ' ' : '') + 'dcc-list-suggester-add'

    const handleCreate = dc.useCallback(async () => {
        setCreating(true)
        try {
            if (onCreate) {
                await onCreate()
            } else {
                const newOpt = await system.prompt('New Option')
                if (newOpt) {
                    const valueToAdd = saveMap(newOpt)
                    if (!valueToAdd) return
                    const current = await shared.loadField(fileName, fieldName) || []
                    const next = current.includes(valueToAdd) ? current : [...current, valueToAdd]
                    await shared.saveToFrontmatter(fileName, fieldName, next)
                }
            }
        } catch (e) {
            console.log('ERR', e)
        } finally {
            setCreating(false)
        }
    }, [templatePath, fileName, fieldName, openNew, saveMap, options])

    // Render: ListSuggesterBase on the left, and the create button to the right
    // Load Base component asynchronously 

    return (
        <div className={topClass}>
            {ListSuggesterBase ? <ListSuggesterBase
                fileName={fileName}
                fieldName={fieldName}
                options={options}
                dropdownMap={dropdownMap}
                saveMap={saveMap}
                renderItem={renderItem}
                singleMode={singleMode}
                addButtonLabel={addButtonLabel}
                className="dcc-list-suggester-base-inner"
            >
                {showCreate && (
                    <button type="button" className={`dcc-list-suggester-add-create`} onClick={handleCreate} disabled={creating}>
                        {createButtonLabel()}{creating ? '…' : ''}
                    </button>
                )}
            </ListSuggesterBase> : <div>Loading…</div>}

        </div>
    )
}

return ListSuggesterAdd
