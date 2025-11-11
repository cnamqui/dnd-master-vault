---
image: zz-nexus/Attachments/Armoria/cragthorncrossroads_coa.png
---
> [!infobox]
> # `=this.file.name`
> `INPUT[imageSuggester(optionQuery("zz-nexus/Attachments")):image]`
> ###### Geography
> Type |  Stat |
> ---|---|
> Type | `=this.type` |
> Size | `=this.size` | 
> World| `INPUT[inlineListSuggester(optionQuery(#Category/World)):world]`
> Parent | `INPUT[inlineListSuggester(optionQuery(#Category/Location)):parent]` `BUTTON[new-location]` |
> Key Words | `INPUT[inlineList():keyWords]` |
> ###### Travel (`=[[Travel Calc]].HoursPerDay` hrs per day)
> ###### [[Travel Calc]]  / [[Exhaustion]]:  `=[[Travel Calculator]].ExhaustionLevel`
> Destination |  Travel Days  |
> ---|---|
> some place | 🕓: `VIEW[round((88* {Travel Calc#TravelCalc}) / 60 / {Travel Calc#HoursPerDay}, 1)]`      |
> Intra-City (Short) | 🕓: `VIEW[round(({city_end_to_end} * 0.5 * 0.62 * {The Adventurer's Guild#TravelCalc})  )]`  Minutes |
> Intra-City (Full)| 🕓: `VIEW[round(({city_end_to_end} * 0.62 * {The Adventurer's Guild#TravelCalc})  )]`  Minutes |
> Intra-City (Around)| 🕓: `VIEW[round(({city_end_to_end} * 3.14 * 0.62 * {The Adventurer's Guild#TravelCalc})  )]`  Minutes |
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
> Exports | `INPUT[inlineList():exports]` |
> Imports | `INPUT[inlineList():imports]` |
> ###### Organizations
> Type |  Stat |
> ---|---|


 
 