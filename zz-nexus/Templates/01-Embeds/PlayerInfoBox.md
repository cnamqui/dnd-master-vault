---
Class: []
customClassSpellList:
  - "[[5-Mechanics/CLI/5E/compendium/classes/warlock-xphb.md|Warlock]]"
level: 6
pic: zz-nexus/Attachments/Azgaar/AedrylMap2.png
---

> [!statblocks| right wikipedia]+
> # `$=  dv.current().file.name`
> `INPUT[imageSuggester(optionQuery("zz-nexus/Attachments"),class(cover)):pic]`
> ###### Player Data
>   |   |
> ---|---|
> Player |`$= dv.current().player`
> Class | `INPUT[inlineListSuggester(optionQuery('#Category/Class AND #System/5E')):Class]`|
> Subclass | `INPUT[inlineListSuggester(optionQuery('#Category/Subclass AND #System/5E')):Subclass]`|
> Level | `INPUT[text:level]` |
> Proficiency Bonus | `VIEW[1+round({level}/4)]`
> Race | `INPUT[inlineListSuggester(optionQuery('#Category/Race AND #System/5E')):Race]` |
> Hometown | `INPUT[inlineListSuggester(optionQuery(#Category/Location AND !"zz-nexus/Templates")):Hometown]` `BUTTON[new-location]`
> Factions | `INPUT[inlineListSuggester(optionQuery(#Category/Group AND !"zz-nexus/Templates")):Factions]` `BUTTON[new-faction]`
> Languages | `INPUT[inlineListSuggester(option(Common), option(Common Sign Language), option(Draconic), option(Dwarvish), option(Elvish), option(Giant), option(Gnomish), option(Goblin), option(Halfling), option(Orc), option(Abyssal), option(Celestial), option(Deep Speech), option(Druidic), option(Infernal), option(Primordial - Auran), option(Primordial - Aqua), option(Primordial - Ignan), option(Primordial - Terran), option(Sylvan), option(Thieves Cant), option(Undercommon)):Languages]`
> Custom Class Spell List | `INPUT[inlineListSuggester(optionQuery('(#Category/Class OR #Category/Subclass) AND #System/5E')):customClassSpellList]`|
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
 