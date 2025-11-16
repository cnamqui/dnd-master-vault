---
PromptInfo:
 promptId: ExtractEventsFromSession
 name: Extract Events
 description: Extract Events from session notes .
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
## Events
Prompt: Extract all significant events from this file  and format each into  a template. Do not embellish change how any events are described.
Dates may be found in the event text. They look like 04-2412-02-11. There is an extra 2 digits at the start of the date which stands for a fantasy era. That is the start Date. if there are 2 dates, then the second is an endDate. extract these information in to the template
The template will look like this.
<%* 
 const title = 'Replace this with an appropriate title'
 const content =  'Replace this with the extracted event text'
 const startDate = 'Replace with start date or omit if none is found'
 const endDate = 'Replace with end date or omit if none is found'
 const options = {
   title,
   template : "zz-nexus/Templates/04-World Building Templates/TemplateEvent.md",
   content,
   frontmatter : {
	 'fc-date': startDate
	 'fc-end': endDate
   } 
 }

 await tp.user.newNoteFromParams(tp, options); 
%>
 
