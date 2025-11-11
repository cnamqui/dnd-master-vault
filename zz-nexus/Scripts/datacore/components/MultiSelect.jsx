// Central shared helpers promise
const shared = await dc.require('zz-nexus/Scripts/datacore/utils/shared.js')

// options: array of strings or { value, label }
const MultiSelect = ({ fileName, fieldName, label, options = [], initialValue = [], onChange: onChangeProp, className = '' }) => {
    const [value, setValue] = dc.useState(Array.isArray(initialValue) ? initialValue : [])
    const [saving, setSaving] = dc.useState(false)
    const topClass = (className ? className + ' ' : '') + 'dcc-multi-select'
    const dcFile = dc.useFile(fileName)


    dc.useEffect(() => {
        if (!fileName || !fieldName || !dcFile.value(fieldName)) return
        let mounted = true
        dcFile.$frontmatter[fieldName]
        if (mounted && Array.isArray(dcFile.$frontmatter[fieldName])) {
            setValue(dcFile.$frontmatter[fieldName])

        }
        return () => { mounted = false }
    }, [dcFile, fileName, fieldName])

    const handleChange = dc.useCallback(async (e) => {
        const selected = Array.from(e.target.selectedOptions).map(o => o.value)
        setValue(selected)
        setSaving(true)
        try {

            await shared.saveToFrontmatter(fileName, fieldName, selected)
            if (onChangeProp) onChangeProp(selected)
        } finally {
            setSaving(false)
        }
    }, [fileName, fieldName, onChangeProp])

    return (
        <label className={topClass} style={{ display: 'block' }}>
            {label}
            <select multiple value={value} onChange={handleChange} style={{ minWidth: 200, minHeight: 80 }}>
                {options.map((opt, i) => {
                    if (typeof opt === 'string') return <option key={i} value={opt}>{opt}</option>
                    return <option key={i} value={opt.value}>{opt.label}</option>
                })}
            </select>
            {saving && <span style={{ marginLeft: 8 }}>saving…</span>}
        </label>
    )
}

return MultiSelect
