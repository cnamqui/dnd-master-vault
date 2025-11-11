---
obsidianUIMode: preview
aliases:
  - someunique
  - Untitled 2
tags: 
name: someunique
tempItemStore: 
itemFilter: armor
itemRarityFilter: very-rare
raritySelect: any
reload: true
plannedItems:
  common:
    - item: "[[5-Mechanics/CLI/5E/compendium/items/apper-carrot-obojimatallgrass.md|apper-carrot-obojimatallgrass]]"
      obtained: false
    - item: "[[5-Mechanics/CLI/5E/compendium/items/animal-affinity-obojimatallgrass.md|animal-affinity-obojimatallgrass]]"
      obtained: true
      notes: ""
  legendary:
    - item: "[[5-Mechanics/CLI/5E/compendium/items/agony-tdcsr.md|agony-tdcsr]]"
      obtained: true
    - item: "[[5-Mechanics/CLI/5E/compendium/items/white-dragon-mask-rotos.md|white-dragon-mask-rotos]]"
      obtained: false
    - item: "[[5-Mechanics/CLI/5E/compendium/items/belt-of-storm-giant-strength.md|belt-of-storm-giant-strength]]"
      obtained: false
  uncommon:
    - item: "[[5-Mechanics/CLI/5E/compendium/items/1-arcane-grimoire-tce.md|1-arcane-grimoire-tce]]"
      obtained: false
    - item: "[[5-Mechanics/CLI/5E/compendium/items/1-moon-sickle-tce.md|1-moon-sickle-tce]]"
      obtained: false
    - item: "[[5-Mechanics/CLI/5E/compendium/items/1-rod-of-the-pact-keeper-xdmg.md|1-rod-of-the-pact-keeper-xdmg]]"
      obtained: false
    - item: "[[5-Mechanics/CLI/5E/compendium/items/wraiths-ring-griffonssaddlebag3.md|wraiths-ring-griffonssaddlebag3]]"
      obtained: false
    - item: "[[5-Mechanics/CLI/5E/compendium/items/1-rhythm-makers-drum-tce.md|1-rhythm-makers-drum-tce]]"
      obtained: false
    - item: "[[5-Mechanics/CLI/5E/compendium/items/1-rod-of-the-pact-keeper-xdmg.md|1-rod-of-the-pact-keeper-xdmg]]"
      obtained: false
  rare:
    - item: "[[5-Mechanics/CLI/5E/compendium/items/1-armor-xdmg.md|1-armor-xdmg]]"
      obtained: false
    - item: "[[5-Mechanics/CLI/5E/compendium/items/sword-of-wounding.md|sword-of-wounding]]"
      obtained: false
      tier: major
    - item: "[[5-Mechanics/CLI/5E/compendium/items/1-armor-xdmg.md|1-armor-xdmg]]"
      obtained: false
  very-rare:
    - item: "[[5-Mechanics/CLI/5E/compendium/items/3-dragonhide-belt-ftd.md|3-dragonhide-belt-ftd]]"
      obtained: false
plannedItemsNotes:
  1-arcane-grimoire-tce: test
  wraiths-ring-griffonssaddlebag3: as
---



| Level(Tier)    | Common                                                           | Uncommon                                                                 | Rare                                                     | Very Rare                                                   | Legendary                                                   | All                                                                                                                                                                                                                                                                 |
| -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1–4 (tier 1)   | `INPUT[number(class(tiny), placeholder(0)):common.t1]`/6         | `INPUT[number(class(tiny), placeholder(0)):uncommon.t1]`/4               | `INPUT[number(class(tiny), placeholder(0)):rare.t1]`/1   | 0                                                           | 0                                                           | `VIEW[{common.t1} + {uncommon.t1} + {rare.t1}]`/11                                                                                                                                                                                                                  |
| 5–10 (tier 2)  | `INPUT[number(class(tiny), placeholder(0)):common.t2]`/10        | `INPUT[number(class(tiny), placeholder(0)):uncommon.t2]`/17              | `INPUT[number(class(tiny), placeholder(0)):rare.t2]`/6   | `INPUT[number(class(tiny), placeholder(0)):veryrare.t2]`/1  | 0                                                           | `VIEW[{common.t2} + {uncommon.t2} + {rare.t2} + {veryrare.t2}]`/34                                                                                                                                                                                                  |
| 11–16 (tier 3) | `INPUT[number(class(tiny), placeholder(0)):common.t3]`/3         | `INPUT[number(class(tiny), placeholder(0)):uncommon.t3]`/7               | `INPUT[number(class(tiny), placeholder(0)):rare.t3]`/11  | `INPUT[number(class(tiny), placeholder(0)):veryrare.t3]`/7  | `INPUT[number(class(tiny), placeholder(0)):legendary.t3]`/2 | `VIEW[{common.t3} + {uncommon.t3} + {rare.t3} + {veryrare.t3} + {legendary.t3}]`/30                                                                                                                                                                                 |
| 17–20 (tier 4) | 0                                                                | 0                                                                        | `INPUT[number(class(tiny), placeholder(0)):rare.t4]`/5   | `INPUT[number(class(tiny), placeholder(0)):veryrare.t4]`/11 | `INPUT[number(class(tiny), placeholder(0)):legendary.t4]`/9 | `VIEW[{common.t4} + {uncommon.t4} + {rare.t4} + {veryrare.t4} + {legendary.t4}]`/25                                                                                                                                                                                 |
| Total          | `VIEW[{common.t1} + {common.t2} + {common.t3} + {common.t4}]`/19 | `VIEW[{uncommon.t1} + {uncommon.t2} + {uncommon.t3} + {uncommon.t4}]`/28 | `VIEW[{rare.t1} + {rare.t2} + {rare.t3} + {rare.t4}]`/23 | `VIEW[{veryrare.t2} + {veryrare.t3} + {veryrare.t4}]`/19    | `VIEW[{legendary.t3} + {legendary.t4}]`/11                  | `VIEW[{common.t1} + {common.t2} + {common.t3} + {common.t4} + {uncommon.t1} + {uncommon.t2} + {uncommon.t3} + {uncommon.t4} + {rare.t1} + {rare.t2} + {rare.t3} + {rare.t4} + {veryrare.t2} + {veryrare.t3} + {veryrare.t4} + {legendary.t3} + {legendary.t4}]`/100 |

 > [!tip ]-  Magic Item Notes 
> > [!cards| dvl no-strong  bg-blue]
> > ```dataviewjs 
> >  const plannedItemsNotes = dv.current().plannedItemsNotes
> >  let items =[]; 
> >  for(let key in plannedItemsNotes){ 
> >     const notes = plannedItemsNotes[key]
> >     items.push({
> >         itm: key,
> >         notes
> >     })
> >  }
> >  const notes = items.filter(itm => itm.notes).map(n =>  `${n.itm} <br/> _${n.notes}_` );  
> >  dv.list(notes) 
> >  ```
  



```meta-bind-js-view
{reload} as reload
--- 
 
const dv = engine.getPlugin('dataview').api; 
const _jseNamespace = window.jsEngineUtils.createNamespace(context.file.name,true)
function buildItmTable(plannedItems, rarity) {
	const mb = engine.getPlugin('obsidian-meta-bind-plugin')?.api;
	if(!plannedItems) {
		return "***Nothing yet***";
	}
	const jseNamespace = window.jsEngineUtils.createNamespace(context.file.name)
	const remove = (itm) => { 
		const bindTarget = mb.parseBindTarget(`plannedItems.${rarity}`, context.file.path);
		const bindTargetNotes = mb.parseBindTarget(`plannedItemsNotes["${itm}"]`, context.file.path);
		const pIs = mb.getMetadata(bindTarget);
		const pINotes = mb.getMetadata(bindTargetNotes);
		const toRemove = pIs.findIndex(i => i.item.contains(itm))
		if(toRemove!= undefined){
			pIs.splice(toRemove, 1) 
			mb.setMetadata(bindTarget, pIs)
			if(pINotes){
				mb.setMetadata(bindTargetNotes, null)
			}
		}
	}
	jseNamespace.register(`remove${rarity}`, remove, true)
	const builder = engine.markdown.createBuilder();   
	function createRemoveButton(lb, t, i, name) {
		const code = `window.jsEngineUtils.getNamespace("${context.file.name}")['remove${rarity}']('${name}')`
	    const buttonConfigDeclaration = {
	        label: lb,
	        icon: 'trash',   // Lucide.dev 'activity' icon's name [See: Ref. 3]
	        style: 'default',
	        class: 'itm-btn-remove',
	        tooltip: t,
	        id: i,
	        hidden: true,
	        actions: [ 
	            {
	                type: 'inlineJS',
	                code: code
	            } 
	        ]
	    }; 
	    const buttonOptions = {
	        declaration: buttonConfigDeclaration,
	        position: undefined,
	        isPreview: false
	    }; 
	    const button = mb.createButtonMountable(context.file.path, buttonOptions); 
	    return mb.wrapInMDRC(button, container, component)
	};
	let buttons = [];
	const pitms = plannedItems.map(pi => { 
		return 	dv.page(dv.parse(pi.item))
	})
	const pages = dv.array(pitms).where(p => {
		//return  p.tags.some(t => /\/rarity\/(rare|uncommon|common|legendary|very-rare)/.exec(t))
		const re = new RegExp(`\/rarity\/(${rarity})`);
		return  p.tags.some(t => re.exec(t))
	}).groupBy(p => {
		return p.tags.find(t=> t.contains('rarity'))
	})
	.map( (p, idx) => { 
		const rarity = /\/rarity\/(rare|uncommon|common|legendary|very-rare)/.exec(p.key)[1]
		const itms = p.rows.map((row,ridx) => {
			const displayname = row.aliases[0];
			const tier = plannedItems[ridx].tier || '-'
			const btnId = `${idx}-${ridx}-${row.file.name}`;
			buttons.push(createRemoveButton(" ",displayname, btnId, row.file.name,))
	 
			const itm =  `<td> [${displayname}](${encodeURI(row.file.path)}) </td>`
			const removeBtn = `<td><center>\`BUTTON[${btnId}]\`</center></td>`
			const itmtier = `<td><center>**${tier}**</center></td>`
			const obtainedToggle = `<td><center>\`INPUT[toggle:plannedItems.${rarity}[${ridx}].obtained]\`</center></td>` 
			const notes = `<td class='itm-note'><center>\`INPUT[text:plannedItemsNotes["${row.file.name}"]]\`</center></td>` 
			return `<tr>${itm}${itmtier}${obtainedToggle}${notes}${removeBtn}</tr>`
		})   
		 
		const rarityC = `<center>**${rarity.toUpperCase()}**</center>`;
		const ct = `<center>${p.rows.length}</center>`;
		const headers = ['Item','Tier', 'Obtained?','Notes',' '].map(h => `<th>${h}</th>`).join('')
		return [
			rarityC,
			ct,
			`<table>${headers}${itms.join('')}</table>`
		]
	}); 
	const headers = ["Rarity", "Count", "Items"]
	 
	builder.createTable(headers, pages ); 
	return builder
} 
_jseNamespace.register('buildItmTable',buildItmTable)
```
 
> [!statblock|   t-w   nlk  embed    t-w no-h  no-inline-title bg-gray c-gray]- Common (`VIEW[{plannedItems.common.length}]`/19)
>   ```meta-bind-js-view
>  {plannedItems.common} as commonItems
>  {reload} as reload
>  ---
>  const commonItems = context.bound.commonItems;
>  const jseNamespace = window.jsEngineUtils.createNamespace(context.file.name)
>  return jseNamespace["buildItmTable"](commonItems, `common`)
> 
>  ```

> [!statblock|   t-w   nlk  embed  no-h  no-inline-title bg-c-green]- Uncommon (`VIEW[{plannedItems.uncommon.length}]`/23)
>   ```meta-bind-js-view
>  {plannedItems.uncommon} as uncommonItems
>  {reload} as reload
>  ---
>  const uncommonItems = context.bound.uncommonItems;
>  const jseNamespace = window.jsEngineUtils.createNamespace(context.file.name)
>  return jseNamespace["buildItmTable"](uncommonItems, `uncommon`)
>  ```


> [!statblock|   t-w   nlk  embed  no-h  no-inline-title bg-c-blue]- Rare (`VIEW[{plannedItems.rare.length}]`/23)
>   ```meta-bind-js-view
>  {plannedItems.rare} as rareItems
>  {reload} as reload
>  ---
>  const rareItems = context.bound.rareItems;
>  const jseNamespace = window.jsEngineUtils.createNamespace(context.file.name)
>  return jseNamespace["buildItmTable"](rareItems, `rare`)
>  ```
 
> [!statblock|   t-w   nlk  embed  no-h  no-inline-title bg-c-purple]- Very Rare (`VIEW[{plannedItems["very-rare"].length}]`/19)
>   ```meta-bind-js-view
>  {plannedItems["very-rare"]} as veryRareItems
>  {reload} as reload
>  ---
>  const veryRareItems = context.bound.veryRareItems;
>  const jseNamespace = window.jsEngineUtils.createNamespace(context.file.name)
>  return jseNamespace["buildItmTable"](veryRareItems, `very-rare`)
>  ```

> [!statblock|   t-w   nlk  embed  no-h  no-inline-title bg-c-orange]- Legendary (`VIEW[{plannedItems.legendary.length}]`/11)
> ```meta-bind-js-view
> {plannedItems.legendary} as legendary
> {reload} as reload
> ---
> const legendary = context.bound.legendary;
> const jseNamespace = window.jsEngineUtils.createNamespace(context.file.name)
> return jseNamespace["buildItmTable"](legendary, `legendary`)
> ```
 
 
 

 |     |     |   |
 | ----- | --------------------------------------------- |---|
 `INPUT[inlineSelect( option(#cli/item/rarity/common, common), option(#cli/item/rarity/uncommon, uncommon),option(#cli/item/rarity/rare, rare), option(#cli/item/rarity/very-rare, very rare),option(#cli/item/rarity/legendary, legendary),option(any, any)):raritySelect]` |  `VIEW[{memory^raritySelectElm}][text(renderMarkdown)]` | `BUTTON[new-item]`|
 
 
```meta-bind-js-view
{raritySelect} as raritySelect
save to {memory^raritySelectElm}

hidden
---
const rs = context.bound.raritySelect
if(rs === 'any'){ 
	return `\`INPUT[suggester(optionQuery(#Category/Item)):tempItemStore]\``
}

return `\`INPUT[suggester(optionQuery(#Category/Item AND ${rs})):tempItemStore]\``
```
 
```meta-bind-js-view
{tempItemStore} as tempItemStore
---
const dv = engine.getPlugin('dataview').api; 
const mb = engine.getPlugin("obsidian-meta-bind-plugin")?.api;

const tempItemStoreBt = mb.parseBindTarget("tempItemStore", context.file.path);
const itemMd = mb.getMetadata(tempItemStoreBt);
if (itemMd) {  
	const itemLink = dv.parse(itemMd)
	const tagsBT = mb.parseBindTarget("tags", itemLink.path) 
	const itmtags = mb.getMetadata(tagsBT); 
	const rarity = /rarity\/(.*)/.exec(itmtags.find(i => i.contains('rarity')))[1]
	let tier;
	const tierTag =itmtags.find(i => i.contains('tier'))
	if(tierTag) {
		tier = /tier\/(.*)/.exec(tierTag)[1] 
	}
	const plannedItemBt = mb.parseBindTarget(`plannedItems.${rarity}`, context.file.path);
	const itemsMd = mb.getMetadata(plannedItemBt) 
	const newItems = [
		...(itemsMd||[]),
		{item:itemMd, obtained:false, tier}
	]
	mb.setMetadata(plannedItemBt, newItems)
	mb.setMetadata(tempItemStoreBt, null) 
} 
return;

```




