module.exports = async (tp, app) => {
    const dv = app.plugins.plugins.dataview.api;
    const campaignFiles = dv.pages("#Category/Campaign").array();

    let selectedCampaign = (
        await tp.system.suggester((campaign) => {
            return campaign.file.name;
        }, campaignFiles, false, "Which Adventure is this for?")
    )
    selectedCampaign = selectedCampaign ||campaignFiles[0];
    return {
        campaignTag: selectedCampaign.campaignTag,
        campaignAbbr: selectedCampaign.campaignAbbr,
        campaignName: selectedCampaign.file.name,
        campaignFolder: selectedCampaign.file.folder
    }
};