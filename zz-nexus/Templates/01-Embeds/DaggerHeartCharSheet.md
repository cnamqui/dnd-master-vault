
> [!statblocks| t-w full nbrd]
| Agility  | Strength | Finesse| Instinct  | Presence   | Knowledge |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
|  `INPUT[toggle]`| `INPUT[toggle]`| `INPUT[toggle]`| `INPUT[toggle]`| `INPUT[toggle]`| `INPUT[toggle]`
| `INPUT[number(class(small)):Stats[0]]` | `INPUT[number(class(small)):Stats[1]]` | `INPUT[number(class(small)):Stats[2]]` | `INPUT[number(class(small)):Stats[3]]` | `INPUT[number(class(small)):Stats[4]]` | `INPUT[number(class(small)):Stats[5]]` |




```meta-bind-js-view
{Class} as Class
{Subclass} as Subclass
{DomainCards} as DomainCards
{Community} as Community
{Ancestry} as Ancestry
---

const dv = engine.getPlugin('dataview').api  
const classRows = context.bound.Class.map(_c => {
	const c = dv.parse(_c)
	return `> 
> > [!recite| ttl-c bg-c-green]- CLASS FEATURES
> > ![[${c.path}#CLASS FEATURES | no-h]]
> >
>
> > [!recite| ttl-c bg-c-green]- ${c.display}’s Hope Feature
> > ![[${c.path}#${c.display}’s Hope Feature | no-h ]]`
}) 

const subclassRows = context.bound.Subclass ? context.bound.Subclass.map(_c => {
	const c = dv.parse(_c)
	return `> 
> > [!recite|   ttl-c bg-c-brown]- FOUNDATION FEATURE
> > ![[${c.path}#FOUNDATION FEATURE | no-h]]
>`
}) : []
const domainCardRows = context.bound.DomainCards ? context.bound.DomainCards.map(_c => {
	const c = dv.parse(_c)
	return `> 
> > [!recite| ttl-c bg-c-orange]- **${c.display}**
> >![[${c.path}#^statblock| lk-clear collapse clean full no-title]]`
}).join('\n'): ''
const communityRows = context.bound.Community ? context.bound.Community.map(_c => {
	const c = dv.parse(_c)
	return `> 
> > [!recite|   ttl-c bg-c-red]- **Community: ${c.display}**
> >![[${c.path}# COMMUNITY FEATURE| no-h]]`
}).join('\n'): ''
const ancestryRows = context.bound.Ancestry ? context.bound.Ancestry.map(_c => {
	const c = dv.parse(_c)
	return `> 
> > [!recite|   ttl-c bg-c-yellow]- **Ancestry: ${c.display}**
> >![[${c.path}#ANCESTRY FEATURES| no-h ]]`
}).join('\n'): '' 


const header= `> [!column |flex 3 no-i] ## Features`
return engine.markdown.create(`${header}\n${classRows.join('\n')}\n${subclassRows.join('\n')}\n${domainCardRows}\n${communityRows}\n${ancestryRows}`)
 
 
```
 
 