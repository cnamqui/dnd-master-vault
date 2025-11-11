// Preload module promises at the top so dc.require calls are centralized.
const shared = await dc.require('zz-nexus/Scripts/datacore/utils/shared.js')

// columns: [{ key, label, type='text' }]
// initialRows: array of objects
const TableForm = ({ fileName, fieldName, columns = [], initialRows = [], onSaved, className = '' }) => {
  const [rows, setRows] = dc.useState(Array.isArray(initialRows) ? initialRows : [])
  const [saving, setSaving] = dc.useState(false)
  const topClass = (className ? className + ' ' : '') + 'dcc-table-form'

  // load existing rows from frontmatter
  dc.useEffect(() => {
    if (!fileName || !fieldName) return
    let mounted = true
    ;(async () => {
      try {
        
        const v = await shared.loadField(fileName, fieldName)
        if (mounted && Array.isArray(v)) setRows(v)
      } catch (e) {}
    })()
    return () => { mounted = false }
  }, [fileName, fieldName])

  const saveRows = dc.useCallback(async (nextRows) => {
    setSaving(true)
    try {
      
      await shared.saveToFrontmatter(fileName, fieldName, nextRows)
      if (onSaved) onSaved(nextRows)
    } finally {
      setSaving(false)
    }
  }, [fileName, fieldName, onSaved])

  const handleCellBlur = dc.useCallback((rIdx, key, value) => {
    const next = rows.map((r, i) => (i === rIdx ? { ...r, [key]: value } : r))
    setRows(next)
    saveRows(next)
  }, [rows, saveRows])

  const handleCellChange = dc.useCallback((rIdx, key, value) => {
    setRows(prev => prev.map((r, i) => (i === rIdx ? { ...r, [key]: value } : r)))
  }, [])

  const addRow = dc.useCallback(() => {
    const newRow = columns.reduce((acc, col) => ({ ...acc, [col.key]: '' }), {})
    const next = [...rows, newRow]
    setRows(next)
    saveRows(next)
  }, [rows, columns, saveRows])

  const deleteRow = dc.useCallback((index) => {
    const next = rows.filter((_, i) => i !== index)
    setRows(next)
    saveRows(next)
  }, [rows, saveRows])

  return (
    <div className={topClass}>
      <table>
        <thead>
          <tr>{columns.map(c => <th key={c.key} className={`dcc-field-${String(c.key).toLowerCase().replace(/[^a-z0-9]+/g,'-')}-table-header`}>{c.label}</th>)}<th>Actions</th></tr>
        </thead>
        <tbody>
          {rows.map((row, rIdx) => (
            <tr key={rIdx}>
              {columns.map(col => (
                <td key={col.key}>
                  <input
                    type={col.type || 'text'}
                    className={`field-${String(col.key).toLowerCase().replace(/[^a-z0-9]+/g,'-')}-table-cell`}
                    value={row[col.key] ?? ''}
                    onChange={e => handleCellChange(rIdx, col.key, e.target.value)}
                    onBlur={e => handleCellBlur(rIdx, col.key, e.target.value)}
                  />
                </td>
              ))}
              <td>
                <button type="button" onClick={() => deleteRow(rIdx)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{marginTop:8}}>
        <button type="button" onClick={addRow}>Add row</button>
        {saving && <span style={{marginLeft:8}}>saving…</span>}
      </div>
    </div>
  )
}

return TableForm
