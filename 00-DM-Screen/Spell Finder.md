---
aliases:
  - Spell Finder
tags: 
obsidianUIMode: preview
level: 0
Class:
  - "[[5-Mechanics/CLI/5E/compendium/classes/cleric-xphb.md|Cleric]]"
Subclass: []
maxlevel: 2
minlevel: 1
searchText: ""
sourceTag: 
name: Spell Finder
S: false
V: false
M: false
R: false
Concentration: false
pages: 10
---
 Filters | Value |
  ------- | ----- |
   |       |
Search | `INPUT[text:searchText]`
 Class | ` $= require(app.vault.adapter.basePath + "\\zz-nexus/Scripts\\dataview\\utils.js").classPickerMulti(dv,app)` |
 Subclass |  `$= require(app.vault.adapter.basePath + "\\zz-nexus/Scripts\\dataview\\utils.js").subClassPickerMulti(dv,app)` |
 Min Level | `INPUT[number:minlevel]` |
 Max Level | `INPUT[number:maxlevel]` |
 Tags| Verbal `INPUT[toggle:V]`, Somatic, `INPUT[toggle:S]`, Material `INPUT[toggle:M]`, Ritual `INPUT[toggle:R]`, Concentration`INPUT[toggle:Concentration]`
 Pages |   `INPUT[number:pages]`


 
```meta-bind-js-view
{minlevel} as minlevel
{maxlevel} as maxlevel
{searchText} as searchText
{Class} as Class
{Subclass} as Subclass
{V} as V
{S} as S
{M} as M
{R} as R
{Concentration} as Concentration
{pages} as pages

---
const classTags = [];
const V = context.bound.V
const S = context.bound.S
const M = context.bound.M
const R = context.bound.R
const Concentration = context.bound.Concentration
const numpages = context.bound.pages

const dv = engine.getPlugin('dataview').api 
const maxlevel = parseInt(context.bound.maxlevel,10)
const minlevel = parseInt(context.bound.minlevel,10)
const searchText = context.bound.searchText
const srcs = ['xge', 'ftd', 'scc', 'egw', 'ai', 'ggr', 'tdcsr', 'xphb', 'tce']
const srcTagsFilter = srcs.map(src => `#cli/compendium/src/5e/${src}`).join(' OR ')
let levelTags = [];
const ordinalDict = {
	1: '1st',
	2: '2nd',
	3: '3rd'
}
if( maxlevel &&  minlevel) { 
	levelTags = Array.from({ length: maxlevel }, (_, index) => index + 1)
		.filter(l => l >=minlevel)
		.map(lvl => {
			const ord = ordinalDict[lvl] || `${lvl}th`
			return `cli/spell/level/${ord}-level`
		}) 
}
if(context.bound.Class) {
	context.bound.Class.forEach(c => { 
		classTags.push(...dv.page(dv.parse(c))
			.tags
			.filter(t=> t.contains('/class/'))
			.map(t => t.replace('class','spell/class'))
		)
	})
}
if(context.bound.customClassSpellList) {
	context.bound.customClassSpellList.forEach(c => {
		classTags.push(...dv.page(dv.parse(c))
			.tags
			.filter(t=> t.contains('/class/'))
			.map(t => t.replace('class','spell/class'))
		)
	})
}
if(context.bound.Subclass){
	context.bound.Subclass.forEach(c => {
		classTags.push(...dv.page(dv.parse(c))
			.tags
			.filter(t=> t.contains('/subclass/'))
			.map(t => t.replace('subclass','spell/subclass'))
		)
	})
}
const classTagsFilter = classTags.map(tag => `#${tag}`).join(' OR ')
const levelTagsFilter = levelTags.map(tag => `#${tag}`).join(' OR ')
const filters = [classTagsFilter||['#System/5E'], levelTagsFilter||['#System/5E'], srcTagsFilter]

const spellTagsFilter = `(${filters.join(') AND (')})`
const tb = dv.markdownTable([ "Name", "lvl", "tags"],dv.pages(spellTagsFilter)
	.where(p => {
		const title = !searchText  || p.file.name.contains(searchText)
		const components = p.file.lists.text.array().find(l => /Components:\*\* (V,*\s*)*(S,*\s*)*(M,*\s*)*(R,*\s*)*/.exec(l))
		const [,v,s,m,r2] = components ? /Components:\*\* (V,*\s*)*(S,*\s*)*(M,*\s*)*(R,*\s*)*/.exec(components) : []
		const r = p.file.lists.text.array().some(l => /Ritual/i.exec(l)) || r2
		const concentration = p.file.lists.text.array().some(l => /Concentration/i.exec(l)) 
		const tags = (v || !V) && (r || !R) && (s || !S) && (m || !M) && (concentration || !Concentration)
		return title  && tags
	})
	.limit(numpages)
	.map(p => {
		const lvl = /cli\/spell\/level\/(\d)/
			.exec(p.tags.find(t => t.contains('cli/spell/level/')))[1]
		
		const components = p.file.lists.text.array().find(l => /Components:\*\* (V,*\s*)*(S,*\s*)*(M,*\s*)*(R,*\s*)*/.exec(l))
		const [,v,s,m, r2] = components ? /Components:\*\* (V,*\s*)*(S,*\s*)*(M,*\s*)*(R,*\s*)*/.exec(components) : []
		const r = p.file.lists.text.array().some(l => /Ritual/i.exec(l)) || r2
		const c = p.file.lists.text.array().some(l => /Concentration/i.exec(l)) 
		const tags = `${v? 'V, ':''} ${s? 'S, ':''} ${m? 'M,':''} ${r? 'R,':''} ${c? 'C':''}`
		return [`[[${p.file.link.path}|${p.aliases[0]||p.file.name}]]`, lvl, tags ]
	}).sort(p => p[1])
)
return engine.markdown.create(tb);
```