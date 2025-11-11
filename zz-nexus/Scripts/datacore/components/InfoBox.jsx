// InfoBox: two-column table for a single file
// Props:
// - fileName: string
// - fields: array of { fieldNames: string, component: any, label: string|component }
const InfoBox = ({ fileName, fields = [], className = '' }) => {
  const topClass = (className ? className + ' ' : '') + 'dcc-info-box'
  const slugify = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-')
  return (
    <div className={topClass}>
      <table>
        <tbody>
          {fields.map((f, i) => {
            const LabelComp = f.label
            const ValueComp = f.component
            const nameKey = f.fieldName ?? f.fieldNames
            const base = `dcc-field-${slugify(nameKey)}`
            return (
              <tr key={i}>
                <td className={`${base}-row-label`} style={{verticalAlign:'top', paddingRight:12}}>
                  {typeof f.label === 'string' ? f.label : (LabelComp ? <LabelComp /> : nameKey)}
                </td>
                <td className={`${base}-row-value`}>
                  {ValueComp ? (
                    <ValueComp fileName={fileName} fieldName={nameKey} {...(f.componentProps || {})} />
                  ) : null}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

return InfoBox
