<% "---" %>
<%*
const {   
	worldTag,
	worldName,
	worldFolder
} = (await tp.user.worldConfig(tp, app))
-%>
<%* 
	const { campaignFolder, campaignName, campaignTag } = (await tp.user.campaignConfig(tp, app))
-%>
<% await tp.file.move(`/4-Compendium/NPCs/${worldName}/` + tp.file.title) %>
<%* 
const hasTitle = !tp.file.title.startsWith("NewNPC") && !tp.file.title.startsWith("Untitled");
let title;
if (!hasTitle) {
    title = await tp.system.prompt("Enter Character Name");
    await tp.file.rename(title);
} else {
    title = tp.file.title;
}
_%>
obsidianUIMode: preview
aliases:
 - <% title %>
tags:
  - npc
  - <% campaignTag %>
  - <% worldTag %>
  - Category/Person
  - InProgress
Campaign: 
 - <% campaignName %>
Factions: 
Gender: Female
Race: [[human]]
Age: 1 
Alignment: 
Character-Role: 
Location: 
NoteIcon: npc
Vitality: Deceased
pic: ImagePlaceholder.png
---
 
 

 `$= "# [[" + dv.current().file.name + "]]"`

  
```meta-bind-embed

![[NPCInfoBox]]

```

# `=this.file.name`
## Profile

**<Add description here, extend it with AI Text Generator using Ctrl J>**

##  Characteristics
##  Motivations

> [!tip]- Stats
> ```statblock
> extends: commoner
> size: Medium
> name: <% title %>
> columns: 2
> ```


> [!tip]- Encounter
> ```encounter-table
> name: Individual
> creatures:
>  - 1: <% title %>
> ```


