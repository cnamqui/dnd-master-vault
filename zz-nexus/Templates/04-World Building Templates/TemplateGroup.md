<% "---" %>
<%*
const {   
	worldTag,
	worldName,
	worldFolder
} = (await tp.user.worldConfig(tp, app))
-%>
<% await tp.file.move(`${worldFolder}/Factions/` + tp.file.title) %>

<%*  
const hasTitle = !tp.file.title.startsWith("NewGroup");  
let title;  
if (!hasTitle) {  
title = await tp.system.prompt("Group Name");  
await tp.file.rename(title);  
} else {  
title = tp.file.title;  
}  
_%>
obsidianUIMode: preview
tags:
  - Category/Group
  - <% worldTag %> 
  - InProgress
Alignment: Chaotic Evil
Organization style: Autocracy
Leader: 
PrimaryHome: 
NoteIcon: group
aat-render-enabled: false
timelines:
  - timelinename
fc-date: 1491-01-11
fc-end: 1491-01-12
fc-category:
  - Event Category 1
fc-display-name: EventName
---


> [!infobox]
> # `=this.file.name`
> ![[ImagePlaceholder.png]]
> ###### Key Members
> ```dataview
> table  Race,  Gender
> FROM  [[]]
> where contains(Factions.file.name,  this.file.name)
> ```


# `=this.file.name`
## Overview
...

## Etymology
...
## Activities
...

## Society
### Beliefs
...
### Culture
...

### Religion
...

## Possessions
...

## History
...

## Rumors & Legends
...


