---
tags:
  - Campaign/SoE
attendance:
  Ashira: true
  Jezebel: true
  Orik: true
  Mr Wick: true
  Jackson Liefsson: false
class:
  - "[[5-Mechanics/CLI/5E/compendium/classes/wizard-xphb.md]]"
---


```meta-bind-js-view
{reload} as reload
--- 
 
const dv = engine.getPlugin('dataview').api; 
const thisPage = dv.page(context.file.path)
const ctag = thisPage.tags.find(t => t.startsWith("Campaign"));
const pages = dv.pages(`#player AND #${ctag}`)
const data = pages.map((p) => {
	const chr = `${p.file.link}`;
	const cls = p.Class.map((c,idx) => {
		let sbcl = '';
		if(p.Subclass[idx]){
			sbcl = `${p.Subclass[idx]}`
		}
		return`${c}${sbcl? ' '+ sbcl: '' }`
	}).join('\n'); 
	const attendance = `\`INPUT[toggle:attendance["${p.file.name}"]]\``
 	const lvl = `\`INPUT[number(class(tiny)):${p.file.path}#level]\``
 	const ac = `\`INPUT[number(class(tiny)):${p.file.path}#ac]\``
 	const hp = `\`INPUT[number(class(tiny)):${p.file.path}#hp]\``
 	const pasperc = `\`INPUT[number(class(tiny)):${p.file.path}#pasperc]\``
	return [
		attendance,
		chr, 
		cls,
		lvl, 
		ac,
		hp,
		pasperc
	]
}).sort(p => p[0]);
const p = dv.markdownTable(
	["Attendance","Character","Class","Lvl","AC", "HP", "Pass Percept"],
	data
)
return engine.markdown.create(p)
```

