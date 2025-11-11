```js-engine
const mb = engine.getPlugin('obsidian-meta-bind-plugin').api;

const tableOptions = {
	bindTarget: mb.createBindTarget('frontmatter', context.file.path, ['relationships']),
	tableHead: ['Relationship', 'Name'],
 	columns: [
		'INPUT[relType][:scope^relType]',
		'INPUT[suggester(optionQuery(#Category/Person),allowOther):scope^relPerson]',
	],
};
const mountable = mb.createTableMountable(context.file.path, tableOptions);

mb.wrapInMDRC(mountable, container, component);
```
