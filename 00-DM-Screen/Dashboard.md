---
obsidianUIMode: preview
---


 

`BUTTON[new-location, new-faction, new-journal, new-npc, new-item, new-player, new-quest]`

### In Progress
> [!infobox]+ 
> #### Recently Updated
> ```dataview 
> TABLE dateformat(file.mtime, "dd.MM.yyyy - HH:mm") AS "Last modified" 
> FROM !"5-Mechanics" AND !"z-assets" SORT file.mtime DESC LIMIT 25 
> ```

> [!note|table t-w] Title
>```dataview 
> TABLE dateformat(file.mtime, "dd.MM.yyyy - HH:mm") AS "Last modified" 
> FROM #InProgress AND !"5-Mechanics" AND !"z-assets" 
> SORT file.mtime DESC LIMIT 15 
> ```

### Interesting Events
```dataviewjs 
const pages = dv.pages('!"5-Mechanics" and !"z-assets" and  #interesting')
	.sort(p => p.file.mtime,'desc')
	.limit(15)
	.map(p => [
		`![[${p.file.path}#^interesting]]`,
		`[[${p.file.path}|${dv.func.dateformat(p.file.mtime, "dd.MM.yyyy - HH:mm")}]]`,
		p.tags.find(t => t.startsWith("Campaign")).replace('Campaign/','') || "N/A"
	])
dv.paragraph(dv.markdownTable(['Event', 'Time','Campaign'], pages))
```


 ### Planned events 
 - [ ] [[Dina]] comes back (CGRA)
 - [ ] [[Kae'l Thalas|Kalarel the Vile]] makes another appearance (CGRA)
 - [ ] Give the party the land skiff (SoE)
 - [ ]  Dragon turtle islands! (SoE)
 - [ ] The summit (SoE)
 - [ ] [[The Crystalline Council]] (SoE)
 - [ ] 