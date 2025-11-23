---
PromptInfo:
  promptId: GMDirection
  name: GM Direction
  description: Generate GM Direction
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

Prompt: You are a dungeon master for a game of D&D. Use the above information to generate a set of instructions on how to improvise the use of a resource, character, or mechanic. Keep examples light and open ended but direct and concise.
 Prompt: Place it inside the following callout
> [!tip]+ GM tip
> Text

 

