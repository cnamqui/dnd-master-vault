
const classPickerMulti = (dv, app, bindTarget) => {
    // const mb = app.plugins.getPlugin('obsidian-meta-bind-plugin')?.api;
    let bt = bindTarget||'Class';
    const options = dv.pages("(#Category/Class AND #System/5E) AND !#cli/class/expert-sidekick AND !#cli/class/spellcaster-sidekick AND !#cli/class/warrior-sidekick")
        .where(o => {
            return !o.file.name.contains('sidekick')
        })
        .map(o => {
            const sourceTag = o.tags.find(t => t.contains("cli/compendium/src/5e/"))
            const src = sourceTag?.replace("cli/compendium/src/5e/",'') || 'none'
            return `option([[${o.file.link.path}|${o.aliases[0]}]],${o.aliases[0]} [${src}])`
        }).array().join(', ')
    
    const str = `\`INPUT[inlineListSuggester(${options}):${bt}]\``; 
    
    dv.paragraph(str)
}

const subClassPickerMulti = (dv, app, bindTarget) => {
    // const mb = app.plugins.getPlugin('obsidian-meta-bind-plugin')?.api;
    let bt = bindTarget||'Subclass';
    const options = dv.pages("#Category/Subclass OR #cli/subclass")
        .where(o => {
            return !o.file.name.contains('sidekick')
        })
        .map(o => {
            const sourceTag = o.tags.find(t => t.contains("cli/compendium/src/5e/"))
            const src = sourceTag?.replace("cli/compendium/src/5e/",'') || 'none'
            const alias = o.aliases[0].replaceAll('\(','- ').replaceAll('\)','')
            return `option([[${o.file.link.path}|${alias}]],${alias} [${src}])`
        }).array().join(', ')
    
    const str = `\`INPUT[inlineListSuggester(${options}):${bt}]\``; 
    
    dv.paragraph(str)
}

const racePickerSingle = (dv, app, bindTarget) => {
    const test = dv.pages("#Category/Race OR #cli/Race")
	.where(o => {
		return !o.file.name.contains('dmg')
	})
	.map(o => {
		const sourceTag = o.tags.find(t => t.contains("cli/compendium/src/5e/") || t.contains("Src/5e/"))
		const src = sourceTag?.replace(/cli\/compendium\/src\/5e\/|Src\/5e\//,'') || 'none'
		const alias = o.aliases[0].replaceAll('\(','- ').replaceAll('\)','')
		return `option([[${o.file.link.path}|${alias}]], ${alias} [${src}])`
	}).array().join(', ') 


    const str = `\`INPUT[suggester(${test}):Race]\``;
    dv.paragraph(str)
}

const racePickerMulti = (dv, app, bindTarget) => {
    const test = dv.pages("#Category/Race OR #cli/Race")
	.where(o => {
		return !o.file.name.contains('dmg')
	})
	.map(o => {
		const sourceTag = o.tags.find(t => t.contains("cli/compendium/src/5e/") || t.contains("Src/5e/"))
		const src = sourceTag?.replace(/cli\/compendium\/src\/5e\/|Src\/5e\//,'') || 'none'
		const alias = o.aliases[0].replaceAll('\(','- ').replaceAll('\)','')
		return `option([[${o.file.link.path}|${alias}]], ${alias} [${src}])`
	}).array().join(', ') 

    const str = `\`INPUT[inlineListSuggester(${test}):Race]\``;
    dv.paragraph(str)
}


const npcRacePickerMulti = (dv, app, bindTarget) => {
    const test = dv.pages("(#Category/Race OR #Category/Monster) AND #System/5E")
	.map(o => {
		const sourceTag = o.tags.find(t => t.contains("cli/compendium/src/5e/") || t.contains("Src/5e/"))
		const src = sourceTag?.replace(/cli\/compendium\/src\/5e\/|Src\/5e\//,'') || 'none'
		const alias = o.aliases? o.aliases[0].replaceAll('\(','- ').replaceAll('\)','') : o.file.name
		return `option([[${o.file.link.path}|${alias}]], ${alias} [${src}])`
	}).array().join(', ') 

    const str = `\`INPUT[inlineListSuggester(${test}):Ancestry]\``;
    dv.paragraph(str)
}


module.exports = {
    classPickerMulti,
    subClassPickerMulti,
    racePickerSingle,
    racePickerMulti,
    npcRacePickerMulti,
}

