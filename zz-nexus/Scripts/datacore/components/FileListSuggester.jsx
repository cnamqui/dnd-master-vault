// FileListSuggester: wraps ListSuggesterBase and adds a "create from template" button
// Props:
// - fileName, fieldName, options, display, buttonLabel, className (passed to base)
// - templatePath: string path to a template used by templater's file.find_tfile
// - transform: (createdFile) => string  -- required, maps templater-created file to a string to store
// - openNew: boolean (default false) -- passed to file.create_new
const ListSuggesterAdd = await dc.require('zz-nexus/Scripts/datacore/components/ListSuggesterAdd.jsx')
const { system } = await dc.require('zz-nexus/Scripts/datacore/utils/templaterapi.js')

const defaultDropdownMap = ((page) => {
    return page.$name
})
const defaultSaveMap = ((page) => {
    return page.$path ? `[[${page.$path}|${page.$name}]]` : `[[${page.path}|${ page.aliases? page.aliases[0] : page.name}]]`
})
const defaultRenderItem = ((item) => {
    debugger;
    return <dc.Markdown content={item} />
})

const FileListSuggester = ({ fileName,
    fieldName,
    query,
    dropdownMap = defaultDropdownMap,
    saveMap = defaultSaveMap,
    renderItem = defaultRenderItem,
    addButtonLabel = () => 'Add from list',
    createButtonLabel = () => 'Create new option',
    className = '',
    templatePath = '',
    openNew = true,
    showCreate = true,
    singleMode = false
}) => {
    const handleCreate = dc.useCallback(async () => {
        if (!templatePath || !fileName) return
        try {
            const { system, file: tplFileApi } = templater    
            // find template
            const tpl = app.vault.getFileByPath(templatePath)
            if (!tpl) return
            // prompt for filename
            const newFilename = await system.prompt('New file name')
            if (!newFilename) return
            // create new file from template
            const created = await tplFileApi.create_new(tpl, newFilename, openNew)
            if (!created) return
            // transform to string to add to list
            const valueToAdd = saveMap(created)
            if (!valueToAdd) return
            // append to frontmatter array (use shared helper) 
            const current = await shared.loadField(fileName, fieldName) || []
            const next = current.includes(valueToAdd) ? current : [...current, valueToAdd]
            await shared.saveToFrontmatter(fileName, fieldName, next)
        } catch (e) {
            console.log('ERR',e)
        }
    }, [templatePath, fileName, fieldName, openNew, saveMap])
    const pages = dc.useQuery(query)
    return (
        <ListSuggesterAdd
            fileName={fileName}
            fieldName={fieldName}
            options={pages}
            dropdownMap={dropdownMap}
            saveMap={saveMap}
            renderItem={renderItem}
            onCreate={handleCreate}
            className="dcc-list-suggester-base-inner"
            openNew={openNew}
            templatePath={templatePath}
            showCreate={showCreate}
            singleMode={singleMode}
            addButtonLabel={addButtonLabel}
            createButtonLabel={createButtonLabel}
        />)
}

return FileListSuggester
