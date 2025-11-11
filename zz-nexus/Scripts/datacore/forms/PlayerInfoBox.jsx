const compsModule = await dc.require('zz-nexus/Scripts/datacore/components/index.js')
const {languages} = await dc.require('zz-nexus/Scripts/datacore/utils/shared.js')
 

const saveMap = ((page) => { 
    const display =  page.$path 
        ? (page.value("aliases") ? page.value("aliases")[0] : page.$name)
        : ( page.aliases? page.aliases[0] : page.name)
    return page.$path ? `[[${page.$path}|${display}]]` : `[[${page.path}|${ display}]]`
})
const dropdownMap = (page) => page.value("aliases") ? page.value("aliases")[0] : page.$name

const PlayerInfoBox = ({ fileName, className = '' }) => {
    const [comps, setComps] = dc.useState(null) 

    dc.useEffect(() => {
        let mounted = true
            ; (async () => {
                try {
                    const loaded = await compsModule.load()
                    if (mounted) setComps(loaded)
                } catch (e) {
                    console.log('ERR',e)
                }
            })()
        return () => { mounted = false }
    }, [])

    if (!comps) return <div>Loading components…</div>
    const dcFile = dc.useFile(fileName)

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

    console.log(fileName)
    console.log(Math.floor(0.9))
    return (
        <div className={className + 'dcc-player-info-box'}>
            <div> 
                <ImagePicker
                    fileName={fileName}
                    fieldName={'pic'}
                    query={"path(\"zz-nexus/Attachments\")"}
                    buttonLabel={'Choose image'}
                    renderer={(value) => {
                        return <dc.LinkEmbed link={value}></dc.LinkEmbed>
                    }}
                />
            </div>
            <div> 
                <InfoBox
                    fileName={fileName}
                    fields={[
                        { fieldName: 'level', label: 'Level', component: NumberInput },
                        {
                            fieldName: 'Class', label: 'Class', component: FileListSuggester, componentProps: {
                                fileName: fileName,
                                fieldName: 'Class',
                                query: "@page and #Category/Class and path(\"5-Mechanics/CLI/5E/compendium/classes\")",
                                showCreate: false, 
                            }
                        },
                        {
                            fieldName: 'Subclass', label: 'Subclass', component: FileListSuggester, componentProps: {
                                fileName: fileName,
                                fieldName: 'Subclass',
                                query: "@page and #Category/Subclass and path(\"5-Mechanics/CLI/5E/compendium/classes\")",
                                showCreate: false, 
                            }
                        },
                        {
                            fieldName: 'Race',
                            label:() => (<dc.Markdown content={"**Race**"}/>),
                            component: FileListSuggester,
                            componentProps: {
                                fileName: fileName,
                                fieldName: 'Race',
                                query: "@page and #Category/Race and (path(\"5-Mechanics/CLI/5E/compendium/races\") or path(\"4-Compendium\"))",
                                showCreate: false,
                                dropdownMap, 
                                saveMap,
                            }
                        },
                        {
                            fieldName: '',
                            label:() => (<dc.Markdown content={"**Proficiency Bonus**"}/>),
                            component: () => {
                                return 1 + Math.ceil(dcFile.value('level') / 4)
                            }
                        },
                        {
                            fieldName: 'Hometown',
                            label:() => (<dc.Markdown content={"**HomeTown**"}/>),
                            component: FileListSuggester,
                            componentProps:{
                                fileName: fileName,
                                fieldName: 'Hometown',
                                query: "@page and #Category/Location and (path(\"2-Worlds\"))",
                                showCreate: false,
                                addButtonLabel: () => "Choose one...",
                                dropdownMap, 
                                saveMap,
                                singleMode:true
                            }

                        },
                        {
                            fieldName: 'Languages',
                            label:() => (<dc.Markdown content={"**Languages**"}/>),
                            component: ListSuggesterAdd,
                            componentProps:{
                                fileName: fileName,
                                fieldName: 'Languages',
                                options: languages,
                                showCreate: true,
                                dropdownMap: (i) => i, 
                                saveMap: (i) => i, 
                            }

                        }
                    ]}
                />
            </div>

        </div>
    )
}

return PlayerInfoBox;