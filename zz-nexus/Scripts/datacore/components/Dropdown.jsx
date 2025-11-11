// Central shared helpers promise
const shared = await dc.require('zz-nexus/Scripts/datacore/utils/shared.js')

// options: array of strings or { value, label }
const Dropdown = ({ fileName, fieldName, label, options = [], initialValue = '', onChange: onChangeProp, className = '' }) => {
  const [value, setValue] = dc.useState(initialValue)
  const [saving, setSaving] = dc.useState(false)
  const topClass = (className ? className + ' ' : '') + 'dcc-dropdown'
  const dcFile = dc.useFile(fileName) 

  // load existing
  dc.useEffect(() => {
    if (!fileName || !fieldName || !dcFile.value(fieldName)) return
    dcFile.$frontmatter[fieldName]
    setValue(dcFile.value(fieldName))
    return () => { mounted = false }
  }, [dcFile, fileName ,fieldName])

  const handleChange = dc.useCallback(async (e) => {
    const v = e.target.value
    setValue(v)
    setSaving(true)
    try { 
      await shared.saveToFrontmatter(fileName, fieldName, v)
      if (onChangeProp) onChangeProp(v)
    } finally {
      setSaving(false)
    }
  }, [fileName, fieldName, onChangeProp])

  return (
    <label className={topClass}>
      {label}
      <select value={value} onChange={handleChange}>
        <option value="">--</option>
        {options.map((opt, i) => {
          if (typeof opt === 'string') return <option key={opt} value={opt}>{opt}</option>
          return <option key={opt.value} value={opt.value}>{opt.label}</option>
        })}
      </select>
      {saving && <span>saving…</span>}
    </label>
  )
}

return Dropdown
