// ImagePicker: single-value file selector persisted to frontmatter
// Props:
// - fileName, fieldName
// - query: templater file query string (passed to file.find_files when available)
// - defaultComponent: component to render when nothing selected
// - renderer: component to render when something is selected; it will be called with { value }
// - buttonLabel: label for the pick button
// - className: optional extra class
const shared = await dc.require('zz-nexus/Scripts/datacore/utils/shared.js')
const { system } = await dc.require('zz-nexus/Scripts/datacore/utils/templaterapi.js')

const ImagePicker = ({ fileName,
    fieldName,
    query = '',
    defaultComponent: DefaultComp = null,
    renderer = ({value}) => dc.embed(value),
    buttonLabel = 'Pick',
    className = '' }) => {
    const dcFile = dc.useFile(fileName)
    const topClass = (className ? className + ' ' : '') + 'dcc-file-picker'
    const [loading, setLoading] = dc.useState(false)

    // read single value reactively from frontmatter
    const value = dcFile.value(fieldName)
    const pages = dc.useQuery(query)

    const persist = dc.useCallback(async (val) => {
        try {
            await shared.saveToFrontmatter(fileName, fieldName, val)
        } catch (e) { }
    }, [fileName, fieldName])

    const handlePick = dc.useCallback(async () => {
        setLoading(true)
        try {
            debugger
            const picked = await system.suggester((page) => page.$path, pages)
            if (!picked) return
            await persist(picked.$path)
        } catch (e) {
            console.log('ERR', e)
        } finally {
            setLoading(false)
        }
    }, [query, persist])

    const handleRemove = dc.useCallback(async () => {
        await persist(undefined)
    }, [persist])

    const RendererComp = renderer

    return (
        <div className={topClass} style={{ position: 'relative', display: 'inline-block' }}>
            {value ? (
                <div className={`dcc-file-picker-selected`}>
                    <div className={`dcc-file-picker-selected-content`}>
                        {renderer(value)}
                    </div>
                    <button className={`dcc-file-picker-remove`} onClick={handleRemove} aria-label="Remove selection">×</button>
                </div>
            ) : (
                <div className={`dcc-file-picker-empty`}>
                    {DefaultComp ? <DefaultComp /> : <span className="dcc-file-picker-placeholder">No file</span>}
                    <button className={`dcc-file-picker-button`} onClick={handlePick} disabled={loading}>{buttonLabel}{loading ? '…' : ''}</button>
                </div>
            )}
        </div>
    )
}

return ImagePicker
