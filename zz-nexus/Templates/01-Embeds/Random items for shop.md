````

```dataviewjs
const items = dv.pages("#cli/item/rarity/uncommon")
    .sort(() => Math.random() - 0.5) .limit(10)
dv.markdownTable(["Item", "Tags"], items.map(item => {
	const value = `[[${item.file.link.path}|${item.aliases[0]}]]`
	return [value, item.tags.join(' ')]
}))
```
````

```dataviewjs
const items = dv.pages("#cli/item/rarity/uncommon")
    .sort(() => Math.random() - 0.5) .limit(10)
dv.markdownTable(["Item", "Tags"], items.map(item => {
	const value = `[[${item.file.link.path}|${item.aliases[0]}]]`
	return [value, item.tags.join(' ')]
}))
```

<%*
	const dv = this.app.plugins.plugins["dataview"].api;
	const items = dv.pages("#cli/item/rarity/uncommon")
	    .sort(() => Math.random() - 0.5) .limit(10)
	const md = dv.markdownTable(["Item", "Tags"], items.map(item => {
		const value = `[[${item.file.link.path}|${item.aliases[0]}]]`
		return [value, item.tags.join(' ')]
	}))
	tR += md
%>

```dataviewjs
const items = dv.pages("#cli/item")
const tags = []
items.forEach((item) => {
	item.file.tags.forEach((t) => {
		if(!tags.includes(t) && t.startsWith("#cli/item")) {
			tags.push(t)
		}
	})
} );
dv.list(tags.sort())

```

