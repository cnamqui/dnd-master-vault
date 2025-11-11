// Central shared helpers promise (dc.require is async)
const shared = await dc.require('zz-nexus/Scripts/datacore/utils/shared.js')

const InputText = ({ fileName, fieldName, label, initialValue = '', placeholder = '', onSaved, className = '' }) => {
    const [value, setValue] = dc.useState(initialValue)
    const [saving, setSaving] = dc.useState(false)
    const topClass = (className ? className + ' ' : '') + 'dcc-input-text'
    const dcFile = dc.useFile(fileName)

    // Auto-load current frontmatter value on mount / when fileName/fieldName change
    dc.useEffect(() => {
        if (!fileName || !fieldName || !dcFile.$frontmatter[fieldName]?.value) {
            return
        } 
        let mounted = true 
        setValue(dcFile.value(fieldName))
        return () => { mounted = false }
    }, [dcFile, fileName, fieldName])

    const handleBlur = dc.useCallback(async () => {
        setSaving(true)
        try {
            await shared.saveToFrontmatter(fileName, fieldName, value)
            if (onSaved) onSaved(value)
        } finally {
            setSaving(false)
        }
    }, [fileName, fieldName, value])

    return (
        <label className={topClass}>
            {label}
            <input
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={e => setValue(e.target.value)}
                onBlur={handleBlur}
            />
            {saving && <span>saving…</span>}
        </label>
    )
}

return InputText
