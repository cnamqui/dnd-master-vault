<% "---" %>
obsidianUIMode: preview
<%*
	const { campaignFolder, campaignName, campaignTag } = (await tp.user.campaignConfig(tp, app))
-%>
<%*
const {   
	worldTag,
	worldName,
	worldFolder,
	world
} = (await tp.user.worldConfig(tp, app))
-%>
<% await tp.file.move(campaignFolder + "/Characters/"  + tp.file.title) %>

<%*
const hasTitle = !tp.file.title.startsWith("NewPlayer") && !tp.file.title.startsWith("Untitled");
let title;
if (!hasTitle) {
    title = await tp.system.prompt("Enter Character Name");
    await tp.file.rename(title);
} else {
    title = tp.file.title;
}
_%>
<%*
	const player = await tp.system.prompt("Enter Player Name");
-%>

NoteIcon: player
aliases:
tags:
  - player
  - <% campaignTag %>
  - Category/Person
  - Category/Player
  - InProgress
Campaign: <% campaignName %>
World: <% world %>
Player: <% player %>   
Role: Player
Class: 
Race:   
Gender:
level:
hp: 
ac: 
modifier: 
pasperc:
Status:
  - Active
Factions:
  - Auran
  - Common
  - Druidic
  - Elvish
Hometown: 
Subclass:
pic: ImagePlaceholder.png
milestones: 5
siblings: 
parents: 
children: 
enemies: 
allies:
linter-yaml-title-alias:  
<% "---" %>

`= "# [["+ this.file.name + "]]"`
  
```meta-bind-embed

![[PlayerInfoBox]]

```

##  Tracker

### Player Motivations 
#### Player Expectation


### Goals 

### Quirks

### Adventure Ideas

##  Backstory
 

 
 ## Classes
```dataviewjs
dv.current().Class.forEach((c) => {
	const display = `
> [!summary]- Class (${c.display})
> ![[${c.path}#^class-progression]]
	`
	dv.paragraph(display)
})
```

 ## Subclasses
```dataviewjs
dv.current().Subclass.forEach((c) => {
	const display = `
> [!summary]- Subclass (${c.display})
> ![[${c.path}#^class-progression]]
	`
	dv.paragraph(display)
})
```
 