---
PromptInfo:
 promptId: GenerateFaction
 name:   Generate Faction 
 description: Generate a fantasy Faction.

---

{{selection}}
Use this Information for flavoring the Prompt:
*Main Focus*
{{title}}  
{{content}}
 
{{selection}}
*Less important things, but maybe helpful in Context*: 
{{#each children}} 
* {{this.content}} 
{{/each}}
Use the above information for context. 

Prompt: use the following to generate a quote from a member of this faction or someone who have witnessed them operate. Feel free to edit it in a way that they would say using their own voice or someone close to them would say while describing the character or recollecting an event. Do not use a player character as a source of this quote
{{selection}}
Place it in a quote callout like this:
> [!quote| author mark] Person McPersonshire
> 

## Profile
Prompt: Create a faction in a fantasy setting. Generate at most 3 sentences about their background and motivations.

## Keywords
Prompt: Add 3 words that describe this faction best

## Motivations
Prompt: add short motivations here that answers the question "what drives this group to action" as well as things that might go against their policies
This group is motivated by:
-  insert something here
This group does not like or tolerate:
-  insert something here


## Hierarchy
Prompt: unless otherwise stated, generate a list of ranks in order that this faction might have. Place them in a bullet list. If the ranks are not linear, place lower ranks under ranks that directly command them in sub items

## Notes on creating a random member
> [!tip]+ DM's notes:
> if you need a random thug, goon,  member or otherwise such as when your party inevitably captures a rando, the archetypes below would be helpful

Prompt: Create a guide on how to create generic members of this  faction, include in the first tier an archetype one may be familiar with from pop culture or media. Under each archetype, include mannerisms in talking, gesturing, accents, tone of voice, poise, among other things in concise way. present this information in no more than 5 archetypes and no less than 2. Add sub bullet points to each containing short but precise directions directed at the reader as if they are going to portray these archetypes. Be clear in the instructions, provide an action or trait to carry out or mimic. Use no more than one sentence per bullet point. Highlight keywords in bold using markdown format. Include a disclaimer at the end that members of this faction are not limited to these people.
 
## Notes on creating a quest that involves this group
Prompt: Refer again to this group's motivations and versions. Add notes on what tactics they would use, scale of operations, things like duration, complexity, and manpower. Suggest social, political, environmental, and economic impacts among others, but leave specific details to be edited by me, the main author.

## Rumors & Legends
Prompt: Generate a rumors and or legends heard about his group.
Place it in a quote callout like this:
> [!quote| author mark] Person McPersonshire
> 