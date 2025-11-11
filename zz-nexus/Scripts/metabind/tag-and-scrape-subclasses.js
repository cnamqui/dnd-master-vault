
const dv = engine.getPlugin('dataview').api
const classes = dv.pages("#Category/Class AND #System/DH").map(c => {
    const {
        name,
        subclasses,
        file,
    } = c; 
    return {
        name,
        subclasses,
        file,
    };
});
await Promise.all(dv.pages('"5-Mechanics/CLI/DaggerHeart/subclasses"')
    .forEach(async (p) => {
        const content = await dv.io.load(p.file.path);
        const name = p.file.name;
        const parentClass = classes.find(cl => { 
            return cl.subclasses.contains(name)
        }) 
            const [,spellcast_trait] = /## SPELLCAST TRAIT\n*(\w+)/.exec(content) || [,]
        	const currentFile = app.vault.getAbstractFileByPath(p.file.path);
            await app.fileManager.processFrontMatter(currentFile, (fm) => {
                try { 
                    fm['spellcast_trait'] = spellcast_trait 
                    fm['parent_class_link'] = parentClass.link
                    fm['parent_class'] = parentClass.name
                    fm['name'] = name
                    fm['tags'] = [
                        `Category/Subclass`,
                        `${parentClass.name}/Subclass/${name.replaceAll(' ','-' )}`, 
                        'Src/DH/Core',
                        'Src/DH/SRD',
                        'System/DH'
                    ]
                } catch (e) {
                    console.log(e)
                }
           })
        console.log(`done processing ${name}`)
    }));
console.log('done')
alert('done')