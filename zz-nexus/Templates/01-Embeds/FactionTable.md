---
Factions:
  - faction: "[[Oricoritos|Oricoritos]]"
---
```js-engine
const mb = engine.getPlugin('obsidian-meta-bind-plugin').api;

const tableOptions = {
	bindTarget: mb.createBindTarget('frontmatter', context.file.path, ['Factions']),
	tableHead: ['Faction', 'Type'],
 	columns: [
		'INPUT[suggester(optionQuery(#Category/Group AND !"zz-nexus/Templates")):scope^faction]',
		'VIEW[{scope^faction}]',
	],
};
const mountable = mb.createTableMountable(context.file.path, tableOptions);

mb.wrapInMDRC(mountable, container, component);
```

`$= F`

 `BUTTON[new-faction]`