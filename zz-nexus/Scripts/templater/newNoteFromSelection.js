


module.exports = async function extractContents(tp, replacementString = "%%Contents%%") {

    const dv = app.plugins.plugins.dataview.api;
    const templateFiles = dv.pages('"zz-nexus/Templates/04-World Building Templates"')
    let selectedTemplate = (
        await tp.system.suggester((campaign) => {
            return campaign.file.name;
        }, templateFiles, false, "What template do you want to use?")
    )
    selectedTemplate = selectedTemplate || templateFiles[0];
    const templateContents = await dv.io.load(selectedTemplate.file.path);

    let cmEditorAct = app.workspace.activeLeaf.view.editor;
    let selectedText = cmEditorAct.getSelection();
    const title = await tp.system.prompt("Embed Link Header", selectedText);
    if (selectedText == '') {
        const curLine = cmEditorAct.getCursor().line;
        let lineContent = cmEditorAct.getLine(curLine);
        let lineLength = lineContent.length;
        cmEditorAct.setSelection({ line: curLine, ch: 0 }, { line: curLine, ch: lineLength });
        selectedText = cmEditorAct.getSelection();
    }
    
    if (selectedText) {
        await cmEditorAct.replaceSelection(
            `> [!readaloud]- [[${title}]]\n` +
            `> ![[${title}]]`
        );
    }



    await tp.file.rename(title || "Untitled");
    selectedText = '\n' + selectedText + '\n';

    const arrayEachLine = templateContents.split('\n');
    selectLine = arrayEachLine.find(line => line.includes(replacementString)) || null;
    let newContents;
    if (templateContents.contains(selectLine)) {
        newContents = templateContents.replace(selectLine, selectedText);
    } else {
        newContents = templateContents + '\n' + selectedText;
    }

    return newContents;
} 