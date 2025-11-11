---
Vitality: Alive
Race:
  - "[[5-Mechanics/CLI/5E/compendium/bestiary/dragon/young-brass-dragon-xmm.md|Young Brass Dragon]]"
defaultImage:
defaultRacePics:
  - 5-Mechanics/CLI/5E/compendium/bestiary/dragon/img/brass-dragon.webp
---

> [!infobox|clear clean wide1]+
> # `$=  dv.current().file.name`
>`VIEW[{memory^defaultImage}][text(renderMarkdown)]`
> ###### Character Data
>   |   |
> ---|---|
> Vitality | `INPUT[inlineSelect(option(Alive), option(Unknown), option(Deceased), option(Ill), option(Injured)):Vitality]`
> Race |  `VIEW[{memory^npcRacePicker}][text(renderMarkdown)]`  |
> World | `INPUT[inlineListSuggester(optionQuery(#Category/World AND !"zz-nexus/Templates")):World]`
> Location | `INPUT[inlineListSuggester(optionQuery(#Category/Location AND !"zz-nexus/Templates")):Location]`
> Factions | `INPUT[inlineListSuggester(optionQuery(#Category/Group AND !"zz-nexus/Templates")):Factions]`
> Languages | `INPUT[inlineListSuggester(option(Common), option(Common Sign Language), option(Draconic), option(Dwarvish), option(Elvish), option(Giant), option(Gnomish), option(Goblin), option(Halfling), option(Orc), option(Abyssal), option(Celestial), option(Deep Speech), option(Druidic), option(Infernal), option(Primordial - Auran), option(Primordial - Aqua), option(Primordial - Ignan), option(Primordial - Terran), option(Sylvan), option(Thieves Cant), option(Undercommon)):Languages]`
> ```js-engine
> const mb = engine.getPlugin('obsidian-meta-bind-plugin').api;
> 
> const tableOptions = {
> 	bindTarget: mb.createBindTarget('frontmatter', context.file.path, ['relationships']),
> 	tableHead: ['Relationship', 'Name'],
> 	columns: [
> 		'INPUT[relType][:scope^relType]',
> 		'INPUT[suggester(optionQuery(#Category/Person),allowOther):scope^relPerson]',
> 	],
> };
> 
> const mountable = mb.createTableMountable(context.file.path, tableOptions);
> 
> mb.wrapInMDRC(mountable, container, component);
> ```
> `BUTTON[new-npc]`|
> ---|


%% Get default pic from race%%
```meta-bind-js-view
{Race} as Race
save to {defaultRacePics}
hidden
---

const dv = engine.getPlugin('dataview').api  
const race = context.bound.Race
if(!race || race.length === 0){
	return;
}
const images = race.map(r => {
	const racepage = dv.page(dv.parse(r));
	if(!racepage || !racepage.file) {
		return
	}
	const img = racepage.file.outlinks?.find(ol => /\.(png|jpeg|jpg|webp)/.exec(ol.path))
	if(!img){
		return
	}
	return encodeURI(img.path);
}).filter(img => img)

return images

```

%% Get Race suggester for NPC%%
```meta-bind-js-view
{world} as world
save to {memory^npcRacePicker}
hidden
---
const dv = engine.getPlugin('dataview').api 

const test = dv.pages("(#Category/Race OR #Category/Monster) AND #System/5E")
.map(o => {
	const sourceTag = o.tags.find(t => t.contains("cli/compendium/src/5e/") || t.contains("Src/5e/"))
	const src = encodeURI(sourceTag?.replace(/cli\/compendium\/src\/5e\/|Src\/5e\//,'') || 'none')
 
	const alias = o.aliases[0].replaceAll('\(','- ').replaceAll(/['\),]/g,'')
	const path =  o.file.link.path 
	return `option([[${path}|${alias}]], ${alias} [${src}])`
}).array() 
 
const str = `\`INPUT[inlineListSuggester(${test}):Race]\``; 
return str
```

%% Grab default pic%%
```meta-bind-js-view
{defaultRacePics} as defaultRacePics
{pic} as pic
save to {memory^defaultImage}
hidden
---
const defaultRacePics = context.bound.defaultRacePics
const pic = context.bound.pic
if(!pic && defaultRacePics && defaultRacePics.length > 0) {
 
	return `![${context.file.name}|cover](${defaultRacePics[0]})\n\n\`INPUT[imageSuggester(optionQuery("zz-nexus/Attachments")):pic]\`` 
} else {
	return  `\`INPUT[imageSuggester(optionQuery("z_attachments"),class(cover)):pic]\``
} 
```

 