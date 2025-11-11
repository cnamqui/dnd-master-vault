---
Level: 0
Class:
 - "[[wizard-xphb.md|Wizard]]"
level: 1
---


```dataviewjs
const classTags = [];
const level = parseInt(dv.current().level,10)
const srcs = ['xge', 'ftd', 'scc', 'egw', 'ai', 'ggr', 'tdcsr', 'xphb', 'tce']
const srcTagsFilter = srcs.map(src => `#cli/compendium/src/5e/${src}`).join(' OR ')
let levelTags = [];
const ordinalDict = {
	1: '1st',
	2: '2nd',
	3: '3rd'
}
if(/^-?\d+$/.test(level) ){
	levelTags = [`cli/spell/level/cantrip`, ...Array.from({ length: Math.round(level/2) }, (_, index) => index + 1)
		.map(lvl => {
			const ord = ordinalDict[lvl] || `${lvl}th`
			return `cli/spell/level/${ord}-level`
		})]
}
if(dv.current().Class) {
	dv.current().Class.forEach(c => {
		classTags.push(...dv.page(c)
			.tags
			.filter(t=> t.contains('/class/'))
			.map(t => t.replace('class','spell/class'))
		)
	})
}
if(dv.current().customClassSpellList) {
	dv.current().customClassSpellList.forEach(c => {
		classTags.push(...dv.page(c)
			.tags
			.filter(t=> t.contains('/class/'))
			.map(t => t.replace('class','spell/class'))
		)
	})
}
if(dv.current().Subclass){
	dv.current().Subclass.forEach(c => {
		classTags.push(...dv.page(c)
			.tags
			.filter(t=> t.contains('/subclass/'))
			.map(t => t.replace('subclass','spell/subclass'))
		)
	})
}
const classTagsFilter = classTags.map(tag => `#${tag}`).join(' OR ')
const levelTagsFilter = levelTags.map(tag => `#${tag}`).join(' OR ')
const filters = [classTagsFilter||['#nomatch'], levelTagsFilter||['#nomatch'], srcTagsFilter]

const spellTagsFilter = `(${filters.join(') AND (')})`
dv.list( dv.pages(spellTagsFilter)
	.map(p => {
		const lvl = /cli\/spell\/level\/(\d|cantrip)/
			.exec(p.tags.find(t => t.contains('cli/spell/level/')))[1]
		return  `[[${p.file.link.path}|${p.aliases[0]||p.file.name}]] ` 
	}) 
)
```