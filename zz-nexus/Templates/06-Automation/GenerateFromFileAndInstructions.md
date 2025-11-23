---
PromptInfo:
 promptId: GenerateFromFileAndInstructions
 name:   GenerateFromFileAndInstructions
 description: GenerateFromFileAndInstructions
---

{{selection}}
Use this Information for flavoring the Prompt:
*Main Focus*
{{title}}  
{{content}}

*Less important things, but maybe helpful in Context*: 
{{#each children}} 
* {{this.content}} 
{{/each}}
Use the above information for context. 

 Prompt:
{{selection}}