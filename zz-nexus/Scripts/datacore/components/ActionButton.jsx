// Central shared helpers promise
const shared = await dc.require('zz-nexus/Scripts/datacore/utils/shared.js')

const ActionButton = ({ fileName, fieldName, label = 'Save', value, valueGenerator, onSaved, className = '' }) => {
    const [saving, setSaving] = dc.useState(false)
    const topClass = (className ? className + ' ' : '') + 'dcc-action-button'

    // optional: load current value for display or valueGenerator context
    const [current, setCurrent] = dc.useState(false)
    const dcFile = dc.useFile(fileName)

    dc.useEffect(() => { 
        if (!fileName || !fieldName) return 
        let mounted = true 
        setCurrent(dcFile.value(fieldName))
        return () => { mounted = false }
    }, [fileName, fieldName, dcFile, current])

    const handleClick = dc.useCallback(async () => { 
        setSaving(true)
        try {  
            await shared.saveToFrontmatter(fileName, fieldName, !current)
            if (onSaved) onSaved()
        } finally {
            setSaving(false)
        }
    }, [fileName, fieldName, current,  dcFile])

    return (
        <button className={topClass} type="button" onClick={handleClick}>
            {label}{saving ? ' (saving...)' : ''}
        </button>
    )
}

return ActionButton
