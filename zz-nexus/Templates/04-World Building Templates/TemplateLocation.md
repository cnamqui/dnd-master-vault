<% "---" %>
<%*
const {   
	worldTag,
	worldName,
	worldFolder
} = (await tp.user.worldConfig(tp, app))
-%>
<% await tp.file.move(`${worldFolder}/Places/` + tp.file.title) %>
 
<%*
const hasTitle = !tp.file.title.startsWith("NewLocation");
let title;
if (!hasTitle) {
    title = await tp.system.prompt("Location Name");
    await tp.file.rename(title);
} else {
    title = tp.file.title;
}
_%>
aliases:
 - <% title %>
obsidianUIMode: preview
NoteIcon: settlement
Tags: 
 - Category/Location
 - Location/State
 - Location/City
 - Location/Town
 - Location/Village
 - Location/Geographical
 - Location/Settlment
 - Location/Outpost
 - <% worldTag %>
  - InProgress
Community-Size: Outpost
Alignment: Chaotic Evil
Government: Autocracy
type: Settlement
politics: Lordship
leader: 
Factions:
 - Thieves Guild 1
 - Cult 1
 - Guiled 1
region: 
 - This area
 - Of this area
size: Small city
population: 0
commonraces:
 - Humans
 - Elves
 - Dwarves
religion:
 - Lathander
exports: 
 - Something
imports: 
 - Something Else

<% "---" %>


> [!infobox]
> # `=this.file.name`
> ![[MapPlaceholder.png|cover hsmall]]
> ###### Geography
> Type |  Stat |
> ---|---|
> Type | `=this.type` |
> Size | `=this.size` |
> Parent | `INPUT[inlineListSuggester(optionQuery(#Category/Location)):questLocationObtained]` `BUTTON[new-location]` |
> ###### Travel (`=[[Travel Calc]].HoursPerDay` hrs per day)
> ###### [[Travel Calc]]  / [[Exhaustion]]:  `=[[Travel Calculator]].ExhaustionLevel`
> Destination |  Travel Days  |
> ---|---|
> some place | 🕓: `VIEW[round((88* {Travel Calc#TravelCalc}) / 60 / {Travel Calc#HoursPerDay}, 1)]`      |
> ###### Politics
> Type |  Stat |
> ---|---|
> Govt Type | `=this.politics` |
> Ruler | `=this.leader` |
> Defense | `=this.defences` |
> ###### Society
> Type |  Stat |
> ---|---|
> Population | `=this.population` |
> Races | `=this.commonraces` |
> Temples | `=this.religion`  |
> ###### Commerce
> Type |  Stat |
> ---|---|
> Exports | `=this.exports` |
> Imports | `=this.imports` |
> ###### Organizations
> Type |  Stat |
> ---|---|
> 
> 
 

```dataview
 table WITHOUT ID link(file.name) AS "Group", 
 link(Leader) AS "Leader"  
 FROM "[[]]"
where contains( PrimaryHome, this.file.name)
``` 


# `=this.file.name`
## Themes
3 key words about this place

## Overview
Placeholder

### Placeholder Map
![[MapPlaceholder.png|Placeholder Map]]

### Placeholder Picture
![[ImagePlaceholder.png|Placeholder Picture]]

Placeholder

## Notable NPCs
Placeholder

## Profile
Placeholder

## Story
Placeholder

## Points of Interest
Placeholder

## Valuables
Placeholder

## Internal Relationships
Placeholder

## Outward Relationships
Placeholder

## Background
Placeholder

## Additional Details
Placeholder

