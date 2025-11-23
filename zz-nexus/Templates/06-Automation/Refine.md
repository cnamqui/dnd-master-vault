---
PromptInfo:
  promptId: Cleanup
  name: Cleanup
  description: Cleanup
---
 
Use this Information for flavoring the Prompt:
*Main Focus*
{{title}}  
{{content}}

  
*Less important things, but maybe helpful in Context*: 
{{#each children}} 
* {{this.content}} 
{{/each}}

Prompt: Refine the following text. Fix the pacing, and make it easier to read. Make sure to keep the original content it was trying to convey
{{selection}}