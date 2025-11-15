---
PromptInfo:
 promptId: GeneratePerson
 name:   Generate Person 
 description: Generate a fantasy NPC.

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

Prompt: use the following to generate a quote from this person or someone close to them. Feel free to edit it in a way that they would say using their own voice or someone close to them would say while describing the character or recollecting an event
{{selection}}
Place it in a quote callout like this:
> [!quote| author mark] Person McPersonshire
> 

## Profile
Prompt: Create a person in a fantasy setting. Generate at most 3 sentences about their background and motivations.

## Keywords
Prompt: Add 3 words that describe this person best

## Motivations
Prompt: add short motivations here that answers the question "what drives this character to action"
This character is motivated by:
- 
## Roleplay Notes
Prompt: Create a guide on how to roleplay as this character, include mannerisms in talking, gesturing, accents, tone of voice, poise, among other things in concise way. present this information in no more than 5 bullet points each containing short but precise directions directed at the reader as if they are going to portray this character. Be clear in the instructions, provide an action or trait to carry out or mimic. Use no more than one sentence per bullet point. Highlight keywords in bold using markdown format.

## Appearance
Prompt: Create a description of this character starting with any unique identifying traits as if seeing this person for the first time. Describe the viewer's senses and experience while in the presence of this character instead of describing the character directly.

Prompt: Finish this section by describing directly anything missed from the above description. Short and direct sentences only


Prompt: For any significant object, person, or location mentioned above, place them inside  a wikilink  `[[]]`

