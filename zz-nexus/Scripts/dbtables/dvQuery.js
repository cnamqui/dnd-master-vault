module.exports = (db,tag) => {
    return db.dataview.pages(tag)
        .map((page) => {
            const src = page.file.tags.find(t => t.contains("#cli/compendium/src/5e/"));
            const source = src ? src.replace("#cli/compendium/src/5e/",'') : '';
            const name = page.file.aliases?.length > 0 ? page.file.aliases[0] : page.file.name;
            const label = name + (source ? ` [${source}]` : '');
            const value = page.file.link.display ? page.file.link : `[[${page.file.link.path} | ${name}]]`;
            return {
                value,
                label,
                color: db.colors.randomColor()
            }
        });
    }