---
aliases:
  - DH Complications
tags:
obsidianUIMode: preview
tier: "2"
linter-yaml-title-alias: DH Complications
adversaryType: ""
encounterDiff: -1
players: 5
adversaries:
  - "[[5-Mechanics/CLI/DaggerHeart/adversaries/Shark.md|Shark]]"
  - "[[5-Mechanics/CLI/DaggerHeart/adversaries/Shark.md|Shark]]"
  - "[[5-Mechanics/CLI/DaggerHeart/adversaries/Siren.md|Siren]]"
  - "[[5-Mechanics/CLI/DaggerHeart/adversaries/Siren.md|Siren]]"
  - "[[5-Mechanics/CLI/DaggerHeart/adversaries/Chaos Skull.md|Chaos Skull]]"
  - "[[5-Mechanics/CLI/DaggerHeart/adversaries/Electric Eels.md|Electric Eels]]"
  - "[[5-Mechanics/CLI/DaggerHeart/adversaries/Giant Recruit.md|Giant Recruit]]"
battlePoints: 16
battlePointsSpent: 17
---
## Adversaries 

> [!infobox| wd1]+
>  ![[Adversaries#BUILDING BALANCED ENCOUNTERS]] 

 filter | value    |
 ---|---|
Tier| `INPUT[text:tier]`|
Type| `INPUT[inlineSelect(option(''),option(Minion),option(Horde),option(Skulk),option(Solo),option(Leader),option(Social),option(Bruiser),option(Ranged)):adversaryType]`|


 Input | value    |
 ---|---|
Players| `INPUT[number:players]`|
Difficulty | `INPUT[inlineSelect(option( -1, '[-1] for an easier or shorter fight'),option( -2, '[-2] if you’re using 2 or more Solo adversaries'),option( -2, '[-2] if you add +1d4 (or a static +2) to all adversaries’ damage rolls'),option( 1, '[+1] if you choose an adversary from a lower tier'),option( 1, '[+1] if you don’t include any Bruisers, Hordes, Leaders, or Solos'),option( 2, '[+2] for a harder or longer fight')):encounterDiff]`|
 Points | `VIEW[{encounterDiff} +2 + 3* {players}][:battlePoints]`| 
 Points | `VIEW[{battlePointsSpent}]`| 

```meta-bind-js-view
{adversaries} as adversaries

---
const adversaries = context.bound.adversaries;
const dv = engine.getPlugin('dataview').api 
const advMap = {}
adversaries.forEach(a => { 
  const adv =  dv.page(dv.parse(a).path)
  if(!advMap[adv.file.name]){
	  advMap[adv.file.name] = 0;
  }
  advMap[adv.file.name] += (parseInt(adv.minionStr) || 1);
})
creaturesMap = Object.keys(advMap).map(name => {
	return ` - "${advMap[name]}": ${name}`
})

const encounter =`

\`\`\`encounter
name: Encounter
creatures:
${creaturesMap.join('\n')}
\`\`\`

`
const render = `
${encounter}
\`\`\`\`
${encounter}
\`\`\`\`
`

return engine.markdown.create(render);
```

 
 
```meta-bind-js-view
{adversaries} as adversaries
save to {battlePointsSpent}
hidden
---
let _battlePointsSpent = 0;
const encounter = [];
const dv = engine.getPlugin('dataview').api 
const adversaries = context.bound.adversaries;
adversaries.forEach(a => { 
  const adv =  dv.page(dv.parse(a).path)
  switch (adv.adversaryType){
    case 'Minion': 
      _battlePointsSpent +=1
      encounter.push([{name: adv.name, quantity: adv.minionStr}])
      break;
    case 'Social':
    case 'Support': 
      _battlePointsSpent +=1
      encounter.push([{name: adv.name, quantity: 1}])
		  break;
    case 'Leader': 
      _battlePointsSpent +=3
      encounter.push([{name: adv.name, quantity: 1}])
		  break;
    case 'Bruiser': 
      _battlePointsSpent +=4
      encounter.push([{name: adv.name, quantity: 1}])
		  break;
    case 'Solo': 
      _battlePointsSpent +=5
      encounter.push([{name: adv.name, quantity: 1}])
		  break;
    default:
      _battlePointsSpent +=2
      encounter.push([{name: adv.name, quantity: 1}])
		  break;
	}
})
return _battlePointsSpent
```



```meta-bind-js-view
{tier} as tier
{adversaryType} as adversaryType

---

const dv = engine.getPlugin('dataview').api 
const pages = dv.pages("#Category/Adversary")
	.where((page) => {
		const tier = !context.bound.tier || page.tier === context.bound.tier
		const adversaryType = !context.bound.adversaryType || page.adversaryType === context.bound.adversaryType
		return tier && adversaryType;
	})
const table = pages.map((page) =>{
		const special=[];
		if(page.horde_hp) {
			special.push(`Horde: ${page.horde_hp}`)
		}
		if(page.minionStr) {
			special.push(`Minion Strength: ${page.minionStr}`)
		}
	    return [
		    page.file.link,
		    page.tier,
		    page.adversaryType,
		    page.difficulty,
		    special.join(' | ')
		]
  }); 
const txt2 =`\`INPUT[inlineListSuggester(${pages.map(p => `option(${p.file.link}, ${p.file.name})`).join(',')}):adversaries]\``
const txt1 ="> [!info]- \n> "+  
dv.markdownTable(["Name", "Tier", "Type", "Diff","Special"],table)
return engine.markdown.create(txt2+"\n\n\n"+txt1)
```
 