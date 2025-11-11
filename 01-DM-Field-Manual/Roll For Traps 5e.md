---
aliases:
  - Roll For Traps 5e
tags: []
name: Roll For Traps 5e
---
 `dice: [[Roll For Traps 5e^hazards]] `

## test
```dataviewjs
const pages = dv.pages("#cli/hazard").map(p => p.file.link)
const nums = Array.from(Array(pages.length).keys()).map(n => {
	return [n+1, pages[n]]
});
const t = dv.markdownTable([`\`dice: 1d${pages.length}\``, "Result"], nums)
dv.paragraph(t)
```
^hazards

> [!column| no-t]
> 
> > [!card| embed]- # A Dragon's Curse; Breaking a Hoard Curse
> > ![[a-dragons-curse-breaking-a-hoard-curse-ftd]]
> 
> > [!card| embed]- # A Dragon's Curse; Hoard Curse Effects
> > ![[a-dragons-curse-hoard-curse-effects-ftd]]
 