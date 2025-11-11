module.exports = async (tp, app) => {
    const dv = app.plugins.plugins.dataview.api;
    const worldFiles = dv.pages("#Category/World").array();

    let selectedWorld = (
        await tp.system.suggester((world) => {
            return world.file.name;
        }, worldFiles, false, "Which World is this set in?")
    )
    selectedWorld = selectedWorld || worldFiles[0];
    return {
        worldTag: selectedWorld.worldTag,
        worldName: selectedWorld.file.name,
        worldFolder: selectedWorld.file.folder,
        world: selectedWorld.file.link,
    }
};