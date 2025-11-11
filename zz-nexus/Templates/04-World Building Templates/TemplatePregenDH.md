
<% "---" %>
obsidianUIMode: preview
<% await tp.file.move("4-Compendium/Pregen/"  + tp.file.title) %>

<%*
const hasTitle = !tp.file.title.startsWith("NewPregen") && !tp.file.title.startsWith("Untitled");
let title;
if (!hasTitle) {
    title = await tp.system.prompt("Enter Character Name");
    await tp.file.rename(title);
} else {
    title = tp.file.title;
}
_%> 

NoteIcon: player
aliases:
tags: 
  - Category/Person
  - Category/Pregen
  - InProgress
Campaign:  
World: 
Player:     
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

`$= "# [[" + dv.current().file.name + "]]"`
  
```meta-bind-embed

![[PlayerInfoBoxDH]]

```

##  Tracker

### Player Motivations 
#### Player Expectation


### Goals 

### Quirks

### Adventure Ideas

##  Backstory
 

 