---
pic: ImagePlaceholder.png
Class:
  - "[[5-Mechanics/CLI/DaggerHeart/classes/Sorcerer.md|Sorcerer]]"
  - "[[5-Mechanics/CLI/DaggerHeart/classes/Druid.md|Druid]]"
  - "[[5-Mechanics/CLI/DaggerHeart/classes/Ranger.md|Ranger]]"
level: 2
Community:
  - "[[5-Mechanics/CLI/DaggerHeart/communities/Wildborne.md|Wildborne]]"
proficiency: 2
SpellCastTrait: Agility
Subclass:
  - "[[5-Mechanics/CLI/DaggerHeart/subclasses/Beastbound.md|Beastbound]]"
---

> [!infobox| right ws-med static ]+
> # `$=  dv.current().file.name`
>`$= "![["+ dv.current().pic+"|cover relative]]"`
> ###### Player Data
> Attr |   Value|
> ---|---|
> Player |`$= dv.current().player`|
> Class | `INPUT[inlineListSuggester(optionQuery('#Category/Class AND #System/DH')):Class]`|
> Subclass |  `VIEW[{memory^subclassOpts}][text(renderMarkdown)]`|
> Spellcast Trait |  `VIEW[{SpellCastTrait}]`|
> Level | `INPUT[number:level]` |
> Proficiency Bonus | `VIEW[floor((1+{level})/3) + 1][:proficiency]`|
> Race | `INPUT[inlineListSuggester(optionQuery('#Category/Ancestries AND #System/DH')):Ancestry]` |
> Hometown | `INPUT[inlineListSuggester(optionQuery(#Category/Location AND !"zz-nexus/Templates")):Hometown]` `BUTTON[new-location]`|
> Community | `INPUT[inlineListSuggester(optionQuery(#Category/Communities AND !"zz-nexus/Templates")):Community]`  
> Factions | `INPUT[inlineListSuggester(optionQuery(#Category/Group AND !"zz-nexus/Templates")):Factions]` `BUTTON[new-faction]`|
> Languages | `INPUT[inlineListSuggester(option(Common), option(Common Sign Language), option(Draconic), option(Dwarvish), option(Elvish), option(Giant), option(Gnomish), option(Goblin), option(Halfling), option(Orc), option(Abyssal), option(Celestial), option(Deep Speech), option(Druidic), option(Infernal), option(Primordial - Auran), option(Primordial - Aqua), option(Primordial - Ignan), option(Primordial - Terran), option(Sylvan), option(Thieves Cant), option(Undercommon)):Languages]`
> Domain Cards|   `VIEW[{memory^domainCardOpts}][text(renderMarkdown)]`|
>  ###### Relationships
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

```meta-bind-js-view
{Class} as Class 
{Subclass} as Subclass 
save to {memory^subclassOpts}
hidden
---
const dv = engine.getPlugin('dataview').api; 
const mb = engine.getPlugin("obsidian-meta-bind-plugin")?.api;
if (!mb){ 
	return '...';
}
if (!context.bound.Class.length) {
	const bindTarget = mb.parseBindTarget("Subclass", context.file.path);
	mb.setMetadata(bindTarget, undefined); 
	return 'none';
}
const query = context.bound.Class.map(cl => { 
	const cllk = dv.parse(cl);
	return `#${cllk.display}/Subclass`
}).join(' OR ')
return  `\`INPUT[inlineListSuggester(optionQuery(${query})):Subclass]\`` 
```

```meta-bind-js-view
{Subclass} as Subclass
save to {SpellCastTrait}
hidden
---
const dv = engine.getPlugin('dataview').api; 
const mb = engine.getPlugin("obsidian-meta-bind-plugin")?.api;
if (!context.bound.Subclass?.length) {
	return 'none';
} 
const cl = context.bound.Subclass[0] 
const cllk = dv.parse(cl);
const bt = mb.parseBindTarget("spellcast_trait", cllk.path) 
const spellcast_trait = mb.getMetadata(bt); 
return spellcast_trait || 'none'
```

 
```meta-bind-js-view
{Class} as Class 
{Subclass} as Subclass 
{level} as level
save to {memory^domainCardOpts}
hidden
---
const dv = engine.getPlugin('dataview').api; 
const mb = engine.getPlugin("obsidian-meta-bind-plugin")?.api;
const level = context.bound.level;

if (!mb){ 
	return '...';
}
if (!context.bound.Class.length) {
	const bindTarget = mb.parseBindTarget("DomainCards", context.file.path);
	mb.setMetadata(bindTarget, undefined); 
	return 'none';
}
const query = context.bound.Class.map(cl => { 
	const cllk = dv.parse(cl);
	const bt = mb.parseBindTarget("domains", cllk.path) 
	const domains = mb.getMetadata(bt); 
	return `#Category/${domains[0]} OR #Category/${domains[1]}`
}).join(' OR ')

let levelQuery = ''
for(let i = 9;i > level; i--) {
	if (!levelQuery) { 
		levelQuery = `!#Domain/Level${i}`
	} else {
		levelQuery = `${levelQuery} AND !#Domain/Level${i}`
	}
}
  
return `\`INPUT[inlineListSuggester(optionQuery(#Category/Card AND #System/DH AND ${query} AND ${levelQuery})):DomainCards]\``
```
 