---
PromptInfo:
 promptId: GenerateStore
 name:   Generate a Fantasy Store
 description: Generate a fantasy Store.

---

{{#if selection}}
Use this Information for flavoring the Prompt:
*Main Focus*
{{title}}  
 
{{selection}}
*Less important things, but maybe helpful in Context*: 
{{#each mentions.linked}} 
* {{this.results}} 
{{/each}}
Use the above information for context. 
  
## Store Name
Create a fantasy store that sells mundane items. Please describe the store, how it looks and smells. 
 

