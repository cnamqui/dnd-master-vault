module.exports = async (tp, app) => {
    const dv = app.plugins.plugins.dataview.api;
    const templateFiles = dv.pages('"zz-nexus/Templates/04-World Building Templates"')
    let selectedCampaign = (
        await tp.system.suggester((campaign) => {
            return campaign.file.name;
        }, templateFiles, false, "What template do you want to use?")
    )
    selectedCampaign = selectedCampaign ||templateFiles[0];
    const test =  await dv.io.load(selectedCampaign.file.path); 
    return test;
};