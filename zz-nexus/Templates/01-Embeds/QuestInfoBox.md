> [!infobox| right]+
> # `=this.file.name`
> ## Quest Details
> Type |  Stat |
> ---|---|
> Number of Sessions (est) | `INPUT[number:numsess]` |
> Required Players | `VIEW[{memory^playerSelect}][text(renderMarkdown)]` |
> Key NPCs| `INPUT[inlineListSuggester(optionQuery(#Category/Person)):keyNPCs]` `BUTTON[new-npc]`
> Date Obtained | `INPUT[datePicker:questObtained]` |
> Status | `INPUT[inlineSelect(option(Not Started), option(In Progress), option(Complete)):questStatus]` |
> Quest Giver | `INPUT[suggester(optionQuery(#Category/Person OR #Category/Group)):questGiver]` `BUTTON[new-npc]` |
> Quest Locations | `INPUT[inlineListSuggester(optionQuery(#Category/Location)):questLocationObtained]` `BUTTON[new-location]`|
> Session Obtained | `INPUT[suggester(optionQuery(#journal)):questSessionObtained]` |
> Available Loot | `INPUT[inlineListSuggester(optionQuery(#Category/Item AND #System/5E)):questLootAvail]` |
> Acquired Loot | `INPUT[inlineListSuggester(optionQuery(#Category/Item AND #System/5E)):questLookEarned]` | 

```meta-bind-js-view
{campaignTag} as campaignTag
save to {memory^playerSelect}
hidden
---
const campaignTag = context.bound.campaignTag 
return `\`INPUT[inlineListSuggester(optionQuery(#Category/Player AND #${campaignTag})):requiredPlayers]\``
```
