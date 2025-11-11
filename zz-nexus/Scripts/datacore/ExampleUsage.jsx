// Example usage for embedded dc runtime. Load components asynchronously via the index loader.
const compsModule = await dc.require('zz-nexus/Scripts/datacore/components/index.js')
const PlayerInfoBox = await dc.require('zz-nexus/Scripts/datacore/forms/PlayerInfoBox.jsx')
const shared = await dc.require('zz-nexus/Scripts/datacore/utils/shared.js')
const tfile = app.workspace.getActiveFile()

const ExampleUsage = () => {
    const fileName = tfile.path;
    const [comps, setComps] = dc.useState(null)
    const files = ['0-Scratch/Datacore2.md', '0-Scratch/Datacore3.md']

    dc.useEffect(() => {
        let mounted = true
            ; (async () => {
                try {
                    const loaded = await compsModule.load()
                    if (mounted) setComps(loaded)
                } catch (e) {
                    // ignore
                }
            })()
        return () => { mounted = false }
    }, [])

    if (!comps) return <div>Loading components…</div>

    const { InputText,
        NumberInput,
        Dropdown,
        MultiSelect,
        ActionButton,
        TableForm,
        MultiFileTable,
        InfoBox,
        ListSuggesterBase,
        ListSuggesterAdd,
        FileListSuggester,
        ImagePicker
    } = comps

    return (
        <div style={{ padding: 12 }}>
            <h3>Form components example</h3>

            <InputText fileName={fileName} fieldName={'titleField'} label={'Title'} initialValue={'A name'} />

            <NumberInput fileName={fileName} fieldName={'level'} label={'Level'} initialValue={1} />

            <Dropdown
                fileName={fileName}
                fieldName={'class'}
                label={'Class'}
                options={["Fighter", "Wizard", "Rogue"]}
                initialValue={''}
            />

            <MultiSelect
                fileName={fileName}
                fieldName={'tags'}
                label={'Tags'}
                options={["human", "npc", "ally"]}
                initialValue={[]}
            />

            <ActionButton
                fileName={fileName}
                fieldName={'favoriteField'}
                label={'Mark favorite'}
                valueGenerator={(cur) => !cur}
            />

            <TableForm
                fileName={fileName}
                fieldName={'inventory'}
                columns={[{ key: 'name', label: 'Name' }, { key: 'qty', label: 'Qty', type: 'number' }]}
                initialRows={[{ name: 'Rope', qty: 1 }]}
            />

            <h3 style={{ marginTop: 20 }}>Multi-file overview</h3>
            <MultiFileTable
                files={files}
                fileLabel={'Character File'}
                fields={[
                    { label: 'Name', fieldName: 'titleField', component: InputText },
                    { label: 'Level', fieldName: 'level', component: NumberInput, componentProps: { step: 1 } },
                    { label: 'Class', fieldName: 'class', component: Dropdown, componentProps: { options: ['Fighter', 'Wizard', 'Rogue'] } },
                ]}
            />

            <h3 style={{ marginTop: 20 }}>InfoBox for a single file</h3>
            <InfoBox
                fileName={fileName}
                fields={[
                    { fieldName: 'titlefield', label: 'Name', component: InputText },
                    { fieldName: 'level', label: 'Level', component: NumberInput },
                    { fieldName: 'class', label: 'Class', component: FileListSuggester, componentProps: { 
                        fileName:fileName,
                        fieldName:'class',
                        query:"@page and #Category/Class and path(\"5-Mechanics/CLI/5E/compendium/classes\")",
                        showCreate: false
                     } },
                ]}
            />

            <h3 style={{ marginTop: 20 }}>List suggester examples</h3>
            <div style={{ marginBottom: 12 }}>
                <div style={{ marginBottom: 8 }}>Basic suggester (uses options and display callback)</div>
                <ListSuggesterAdd
                    fileName={fileName}
                    fieldName={'tags'}
                    options={[{ id: 1, name: 'human' }, { id: 2, name: 'ally' }, { id: 3, name: 'npc' }]} 
 
                    dropdownMap={o => o.name}
                    renderItem={o=> 'Number '+ o}
                    addButtonLabel={'Add tag'}
                />
            </div>

            <div>
            
                <div style={{ marginBottom: 8 }}>Suggester with create-from-template</div>
                <FileListSuggester
                    fileName={fileName}
                    fieldName={'characters'}
                    query={"@page and #Category/NPC and path(\"4-Compendium\")"}
                    templatePath={'zz-nexus/Templates/04-World Building Templates/TemplateNPC.md'} 
                    openNew={true}
                />
                <ImagePicker
                    fileName={fileName}
                    fieldName={'picture'}
                    query={"path(\"zz-nexus/Attachments\")"}
                    buttonLabel={'Choose image'}
                    renderer={(props) =><dc.Markdown content={props.value}></dc.Markdown>}
                />

                <PlayerInfoBox fileName={fileName}/>
            </div>
        </div>
    )
}

return ExampleUsage
