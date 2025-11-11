
const dv = engine.getPlugin('dataview').api 
dv.pages('"5-Mechanics/CLI/DaggerHeart/adversaries"') 
	.forEach(async (p) => {
		const content = await dv.io.load(p.file.path); 
		const name = p.file.name; 
		const [,tier, type, horde_hp, ,description] = /Tier (\d) (\w+)( \(\d+\/\HP\))?\*\*\*(.|\n)\s*\*(.+)\*/.exec(content)
		const motives_and_tactics = /\*\*Motives & Tactics:\*\* (.+)/.exec(content)[1];
		const difficulty  = (/\*\*Difficulty:\*\* (\d+)/.exec(content) || [undefined,undefined])[1];
		const thresholds  = (/\*\*Thresholds:\*\* ([\d\w]+\/[\d\w]+)/.exec(content) || [undefined,undefined])[1];
		const hp  =  (/\*\*HP:\*\* (\d+)/.exec(content) || [undefined,undefined])[1];
		const stress  = (/\*\*Stress:\*\* (\d+)/.exec(content) || [undefined,undefined])[1];
		const minionStr  = (/Minion \((\d+)\) /.exec(content) || [undefined,undefined])[1];
		
		const [,atk, attack, range, damage] = /\*\*ATK:\*\* ([\+\-]*[\w]+) \| \*\*(.+)\*\* ([\w\s\-]+) \| (.+)\s*\n/.exec(content); 
		const experience = (/\*\*Experience:\*\* (.+)/.exec(content) || [undefined,undefined])[1];
		const traits = [...content.matchAll(/\*\*\*(.+):\*\*\* (.+)/g)].map((t) => {
			return { name: t[1], desc:t[2]}
		}) 
		const traitsJoin = traits.map(t => {
			return ` - "name": "${t.name}"
   "desc": "${t.desc}"`
		}).join('\n')
		const traitsYaml =`
"feats":
${traitsJoin}
		`;
		const experienceLn = experience ? `"experience": "${experience}"` : ''
		const minionStrLn = experience ? `"minion_str": "${minionStr}"` : ''
		const statblock = `
\`\`\`statblock
"system": "DH"
"layout": "Daggerheart Adversary"
"tier": ${tier}
"type": "${type}"
"name": "${name}"
${experienceLn}
${minionStrLn}
"horde_hp": "${horde_hp}"
"description": "${description}"
"motives_and_tactics": "${motives_and_tactics}"
"difficulty": ${difficulty}
"ac": ${difficulty}
"thresholds": "${thresholds}"
"hp": ${hp}
"stress": "${stress}"
"atk": "${atk}"
"attack": "${attack}"
"range": "${range}"
"damage": "${damage}"
${traitsYaml}
\`\`\`
^statblock
		`  
		const currentFile = app.vault.getAbstractFileByPath(p.file.path);
		app.vault.process(currentFile, (data) => {
			return `${data.replace(/```statblock(\n.*)+```\n\^statblock\n*/g, '').trimEnd()}
			${statblock}
			`.trimEnd();
		});
		await app.fileManager.processFrontMatter(currentFile, (fm) => {
			try {
				fm['horde_hp']= horde_hp;
				fm['statblock'] =  'inline';
				fm['statblock-link'] = "#^statblock";
				fm['tier'] = tier;
				fm['adversaryType']= type;
				fm['motivesTactics']= motives_and_tactics;
				fm['desc']= description;
				fm['difficulty']= difficulty;
				fm['thresholds']= thresholds;
				fm['hp']= hp;
				fm['stress']= stress;
				fm['atk']= atk;
				fm['experience '] = experience;
				fm['minionStr'] = minionStr;
				fm['tags'] = [
					`Adversary/tier${tier}`,
					`Category/Adversary/${type}`,
					'Src/DH/Core',
					'Src/DH/SRD',
					'System/DH',
				] 
			} catch(e){
				console.log('e')
			}
		}) 
	})
console.log('done')
alert('DONE')
setTimeout(10)