const filters = {
    DnDClass:
 '(#Category/Class OR #ttrg-cli/class) AND !#cli/class/expert-sidekick AND !#cli/class/spellcaster-sidekick AND !#cli/class/warrior-sidekick',
    DHClass: '#Category/Class AND #System/DH'
}

function picker(query, bindTarget, isMulti) {
    const bt = bindTarget || 'picker'
    const options = dv.pages(query)
        .map(o => { 
            const sourceTag = o.tags.find(t => /[s|S]rc\/([\w\d]+)/.exec(t))
            const src = sourceTag ? /[s|S]rc\/([\w\d]+)/.exec(sourceTag)[1] : 'none'
            return `option([[${o.file.link.path}|${o.aliases[0]}]],${o.aliases[0]} [${src}])`
        }).array().join(', ')
    const inputTag = isMulti ? 'inlineListSuggester' : 'suggester'
    const str = `\`INPUT[inlineListSuggester(${options}):${bt}]\``; 

    dv.paragraph(str)

}
return {
    classPicker5E: ()=>{
        return picker('#Category/Class AND #System/DH', 'Class', true)
    }

}