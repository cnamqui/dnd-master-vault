// MultiFileTable
// Props:
// - files: array of file paths
// - fields: array of { label: string, fieldName: string, component: any, componentProps?: object }
// - fileLabel: header label for file column
const MultiFileTable = ({ files = [], fields = [], fileLabel = 'File', className = '' }) => {
  const topClass = (className ? className + ' ' : '') + 'multi-file-table'
  const slugify = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-')
  return (
    <div className={topClass}>
      <table>
        <thead>
          <tr>
            <th className={`dcc-field-file-table-header`}>{fileLabel}</th>
            {fields.map(f => <th key={f.fieldName} className={`dcc-field-${slugify(f.fieldName)}-table-header`}>{f.label ?? f.fieldName}</th>)}
          </tr>
        </thead>
        <tbody>
          {files.map((file, idx) => (
            <tr key={idx}>
              <td className={`dcc-dcc-field-file-table-cell`}>{file}</td>
              {fields.map(f => {
                const Comp = f.component
                const fieldClass = `dcc-field-${slugify(f.fieldName)}-table-cell`
                return (
                  <td key={f.fieldName} className={fieldClass}>
                    {Comp ? (
                      <Comp fileName={file} fieldName={f.fieldName} {...(f.componentProps || {})} />
                    ) : null}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

return MultiFileTable
