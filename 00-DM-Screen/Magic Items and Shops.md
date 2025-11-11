---
obsidianUIMode: preview
aliases:
  - Magic Items and Shops
tags: []
name: Magic Items and Shops
---
> [!important]- Magic Item Totals
>  ![[magic-items-awarded-by-level-xdmg]]

> [!tip]+ Costs
> >[!tip|left wm-sm]
> > ![[magic-item-crafting-time-and-cost-xdmg|Magic Item Crafting Time and Cost]]
>   
> >[!tip|right ws-med]+
> >![[magic-item-values-by-rarity-magic-item-rarities-and-values-xdmg]]
>  
>  >[!tip|left ws-med]+
>  > ![[hirelings-xphb]]
>  
>   > [!tip| right wm-sm]+
>   > ![[selling-a-magic-item-magic-item-offer-xge]] 
## Homebrew Rules for Crafting and Costs

Based on the above tables:
Item Costs:

| Rarity    | Major               | Minor              | Consumable         | Worker Days            | Required Worker  | DC  | Combined DCs |
| --------- | ------------------- | ------------------ | ------------------ | ---------------------- | ---------------- | --- | ------------ |
| Common    | `dice: 2d8 * 10`    | `dice: 2d8 * 7`    | `dice: 2d8 * 5`    | `dice: 2d4 - 1`        | Any              | 10  | 10/20        |
| Uncommon  | `dice: 1d6 * 100`   | `dice: 1d6 * 75`   | `dice: 1d6 * 50`   | `dice:2d6`             | Skilled          | 15  | 15/25        |
| Rare      | `dice: 8d8 * 100`   | `dice: 8d8 * 75`   | `dice: 8d8 * 50`   | `dice: 4d8 * 2 + 10`   | Very Skilled     | 18  | 18/33        |
| Very Rare | `dice: 8d8 * 1000`  | `dice: 8d8 * 750`  | `dice: 8d8 * 500`  | `dice: 2d12 * 10 + 55` | Very Skilled     | 24  | 24/42/60     |
| Legendary | `dice: 3d12 * 1000` | `dice: 3d12 * 750` | `dice: 3d12 * 500` | `dice: 4d10 * 5 + 130` | Master Craftsman | 27  | 27/51/75     |
| Artifact  |                     |                    |                    |                        |                  |     |              |

Cost of materials is half of the cost of the item.
untrained workers double the duration

| Service            | Cost          | Worker Day ratio |
| ------------------ | ------------- | ---------------- |
| Master Craftsman   | 20 PP per Day | 8                |
| Very Skilled       | 2 PP per Day  | 4                |
| Skilled hireling   | 2 GP per day  | 2                |
| Untrained hireling | 2 SP per day  | 1                |
| Messenger          | 2 CP per mile | 1                |
 
## Gold Rewards

![[random-individual-treasure-xdmg|Random Individual Treasure]]


![[treasure-hoards-random-treasure-hoard-xdmg]]

 ```dataviewjs
const pages = dv.pages("#cli/item/rarity/common").map(p =>  p.file.aliases[0] ) 
const nums = Array.from(Array(pages.length).keys()).map(n => {
	return [n+1, pages[n]]
});
const table = await app.plugins.plugins["obsidian-dice-roller"].api.getArrayRoller(pages,1)
 
dv.el('div', table)  
```
