
const dv = engine.getPlugin('dataview').api 
dv.pages('"5-Mechanics/CLI/DaggerHeart/classes"')
    .forEach(async (p) => { 
        const content = await dv.io.load(p.file.path);
        const name = p.file.name;
        const [, domain1, domain2] = /\*\*\• DOMAINS:\*\*\s*\[(\w+)\]\(.+\)\s*&\s*\[(\w+)\]\(.+\)/.exec(content)
        const starting_evasion = /\*\*\• STARTING EVASION:\*\*\s*(\d+)/.exec(content)[1];
        const starting_hp = /\*\*\• STARTING HIT POINTS:\*\*\s*(\d+)/.exec(content)[1]; 
        const [,subclass1, subclass2] = /Choose either the \*\*\[(.+)\]\(.+\)\*\* or \*\*\[(.+)\]\(.+\)\*\* subclass/.exec(content)
        const [, class_item1, class_item2] = /\*\*\• CLASS ITEMS:\*\*\s*(.+) or (.+)/.exec(content)
		const currentFile = app.vault.getAbstractFileByPath(p.file.path);
        await app.fileManager.processFrontMatter(currentFile, (fm) => {
            try { 
                fm['domains'] = [domain1, domain2]
                fm['subclasses'] = [subclass1, subclass2]
                fm['class_items'] = [class_item1, class_item2]
                fm['starting_evasion'] = starting_evasion
                fm['starting_hp'] = starting_hp
                fm['name'] = name
                fm['tags'] = [
                    `Domain/${domain1}`,
                    `Domain/${domain2}`, 
                    `Category/Class`, 
                    'Src/DH/Core',
                    'Src/DH/SRD',
                    'System/DH'
                ]
            } catch (e) {
                console.log(e)
            }
       })
       console.log(`done processing ${name}`)
    });
console.log('done')
alert('done')