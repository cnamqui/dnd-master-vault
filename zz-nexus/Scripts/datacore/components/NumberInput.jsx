// Central shared helpers promise
const shared = await dc.require('zz-nexus/Scripts/datacore/utils/shared.js')

const NumberInput = ({ fileName, fieldName, label, initialValue = '', placeholder = '', min, max, step = 1, onSaved, className = '' }) => {
  const [value, setValue] = dc.useState(initialValue)
  const [saving, setSaving] = dc.useState(false)
  const topClass = (className ? className + ' ' : '') + 'dcc-number-input'
  const dcFile = dc.useFile(fileName)

  // Auto-load existing value
  // Auto-load current frontmatter value on mount / when fileName/fieldName change
  dc.useEffect(() => {
    if (!fileName || !fieldName || !dcFile.value(fieldName)) return
    let mounted = true
    setValue(dcFile.value(fieldName))
    return () => { mounted = false }
  }, [dcFile, fileName ,fieldName])

  const handleBlur = dc.useCallback(async () => {
    const num = value === '' ? null : Number(value)
    setSaving(true)
    try {
      
      await shared.saveToFrontmatter(fileName, fieldName, num)
      if (onSaved) onSaved(num)
    } finally {
      setSaving(false)
    }
  }, [fileName, fieldName, value])

  return (
    <label className={topClass}>
      {label}
      <input
        type="number"
        value={value}
        placeholder={placeholder}
        min={min}
        max={max}
        step={step}
        onChange={e => setValue(e.target.value)}
        onBlur={handleBlur}
      />
      {saving && <span>saving…</span>}
    </label>
  )
}

return NumberInput
