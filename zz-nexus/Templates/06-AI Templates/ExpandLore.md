---
PromptInfo:
 promptId: ExpandLore
 name: Expand Lore
 description: Expand Current Lore.

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

Prompt: use the following to generate a quote from a random scholar. Feel free to edit it in a way that they would say using the scholar's voice or someone close to them would say while recollecting what was said
{{selection}}
Place it in a quote callout like this:
> [!quote| author mark] Prompt: insert the name here
> Prompt: Insert the quote here

Prompt: Expand upon the given lore.  Add 2-5 sentences at the end to expand further. 

 

