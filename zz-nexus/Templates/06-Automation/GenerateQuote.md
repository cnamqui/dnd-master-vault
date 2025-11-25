---
PromptInfo:
 promptId: GenerateQuote
 name:   Generate Quote 
 description: Generate a Quote

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

Prompt: use the above to generate a quote from a random person connected to this entity or someone who has heard a second hand tale about the entity. Feel free to edit it in a way that they would say using their own voice or someone close to them would say while describing the character or recollecting an event. Do not use a player character as a source of this quote 

Place it in a quote callout like this:
> [!quote| author mark] Person McPersonshire
> 
 