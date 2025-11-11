---
campaignTag: Campaign/CGRA
obsidianUIMode: preview
---
> [!blank| no-t tbl-u-2] 
> ```meta-bind-js-view
> {campaignTag} as campaignTag
> {milestonesForTier} as milestonesForTier
> ---
> const dv = engine.getPlugin('dataview').api; 
> const mb = engine.getPlugin("obsidian-meta-bind-plugin")?.api;
> const ctag = context.bound.campaignTag
> const milestonesForTier = context.bound.milestonesForTier 
> const pages = dv.pages(`#Category/Player AND #${ctag} AND "1-Parties"`) 
> const data = pages
> .filter((p)=> {
> 	return p.status !== 'Retired'
> }).map((p) => {
> 	const chr = `${p.file.link}`;
> 	const cls = p.Class.map((c,idx) => {
> 		let sbcl = '';
> 		if(p.Subclass[idx]){
> 			sbcl = `${p.Subclass[idx]}`
> 		}
> 		return`${c}${sbcl? ' '+ sbcl: '' }`
> 	}).join('\n'); 
> 	const stat = `\`INPUT[playerStatus][:${p.file.path}#status]\``
> 	const ms = p.status.includes('Active') ? `\`INPUT[number(class(tiny)):${p.file.path}#milestones]\`/${milestonesForTier}`: 'N/A'
> 	const lvl = `\`INPUT[number(class(tiny)):${p.file.path}#level]\``
> 	const ac = `\`INPUT[number(class(tiny)):${p.file.path}#ac]\``
> 	const hp = `\`INPUT[number(class(tiny)):${p.file.path}#hp]\``
> 	const pasperc = `\`INPUT[number(class(tiny)):${p.file.path}#pasperc]\``
> 	return [
> 		chr,
> 		p.player,
> 		cls,
> 		lvl,
> 		stat,
> 		ms,
> 		ac,
> 		hp,
> 		pasperc		
> 	]
> }).sort(p => p[5]+ p[0]);
> const t = dv.markdownTable(
> 	["Character","Player","Class","Lvl","Status","MS","AC", "HP", "Pass Percept"],
> 	data
> )
> const md =  engine.markdown.create(t) 
> return md
> ```

