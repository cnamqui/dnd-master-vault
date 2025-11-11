<% "---" %>
<%*
	const { campaignFolder, campaignName, campaignTag } = (await tp.user.campaignConfig(tp, app))
-%>
<% await tp.file.move(campaignFolder + "/Quests/"  + tp.file.title) %>

<%*
const hasTitle = !tp.file.title.startsWith("NewQuest") && !tp.file.title.startsWith("Untitled");
let title;
if (!hasTitle) {
    title = await tp.system.prompt("Enter Quest Name");
    await tp.file.rename(title);
} else {
    title = tp.file.title;
}
_%>
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
campaignTag: <% campaignTag %>
tags:
  - quest
  - Category/Quest
  - InProgress
<% "---" %>


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
