---


obsidianUIMode: preview
questObtained: 
questStatus: Not Started
questGiver: 
questLocationObtained: 
questSessionObtained: 
questNotes: 
questLootAvail: []
questLookEarned: 
NoteIcon: quest
campaignTag: Campaign/CGRA
tags:
  - quest
  - Category/Quest
  - InProgress
---


`= "# "+ this.file.name`
```meta-bind-embed
![[QuestInfoBox]]
```
 
Describe the quest here. 

### Quest Objective

- List the objectives here.

### Quest Complications

### Rewards

```dataviewjs
const list = dv.current().questLootAvail
	.map(itm => { 
		const page = dv.page(itm)  
		return `[[${page.file.path}|${page.aliases[0]}]]`
	})
dv.list(list)
```
