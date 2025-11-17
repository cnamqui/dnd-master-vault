
// // Group fields by the folder where they were observed. Fields present in multiple
// // folders are placed in `sharedFields` per your request.
// const sharedFields = [
//     { fieldName: "aliases", isArray: true },
//     { fieldName: "NoteIcon", isArray: false },
//     { fieldName: "tags", isArray: true },
//     { fieldName: "name", isArray: false },
//     { fieldName: "world", isArray: false },
//     { fieldName: "Factions", isArray: true, query: '"/04-Codex/05-Factions" and #Category/Group' },
//     { fieldName: "Campaign", isArray: false },
//     { fieldName: "image", isArray: false },
//     { fieldName: "obsidianUIMode", isArray: false },
//     { fieldName: "aat-render-enabled", isArray: false },
//     { fieldName: "timelines", isArray: true },
//     { fieldName: "Status", isArray: true },
//     { fieldName: "pic", query: '"/03-Campaigns" and "/zz-Attachments"' }
// ];
 

// const charactersFields = [
//     { fieldName: "Player", isArray: false },
//     { fieldName: "Role", isArray: false },
//     { fieldName: "Class", isArray: true, query: '"/04-Compendium/CLI/5E/compendium/classes"' },
//     { fieldName: "Race", isArray: true },
//     { fieldName: "Gender", isArray: false },
//     { fieldName: "level", isArray: false },
//     { fieldName: "hp", isArray: false },
//     { fieldName: "ac", isArray: false },
//     { fieldName: "modifier", isArray: false },
//     { fieldName: "pasperc", isArray: false },
//     { fieldName: "Languages", isArray: true },
//     { fieldName: "Hometown", isArray: false },
//     { fieldName: "Subclass", isArray: true, query: '"/04-Compendium/CLI/5E/compendium/classes"' },
//     { fieldName: "pic", isArray: false },
//     { fieldName: "milestones", isArray: false },
//     { fieldName: "feats", isArray: false },
//     { fieldName: "timeline", isArray: false }
// ];

// const questsFields = [
//     { fieldName: "questObtained", isArray: false, },
//     { fieldName: "questStatus", isArray: false },
//     { fieldName: "questGiver", isArray: false, query: '"/4-Compendium/NPCs/The World of Aedryl"' },
//     {
//         fieldName: "questLocationObtained", isArray: true,
//         includeCampaignTag: true,
//         query: '"/03-Campaigns/04-Codex/02-World/Places"'
//     },
//     { fieldName: "questSessionObtained", isArray: false },
//     { fieldName: "questNotes", isArray: false },
//     { fieldName: "questLootAvail", isArray: true, query: '"/04-Compendium/CLI/5E/compendium/items"' },
//     { fieldName: "questLookEarned", isArray: true, query: '"/04-Compendium/CLI/5E/compendium/items"' },
//     { fieldName: "numsess", isArray: false },
//     { fieldName: "keyNPCs", isArray: true, query: '"/4-Compendium/NPCs/The World of Aedryl"' },
//     {
//         fieldName: "requiredPlayers", isArray: true, includeCampaignTag: true,
//         query: '"/03-Campaigns/Characters"'
//     },
//     { fieldName: "fc-date", isArray: false },
//     { fieldName: "fc-end", isArray: false },
//     { fieldName: "fc-category", isArray: false },
//     { fieldName: "fc-display-name", isArray: false }
// ];


// const sessionsFields = [
//     { fieldName: "obsidianEditingMode", isArray: false },
//     { fieldName: "sessionstatus", isArray: true },
//     { fieldName: "type", isArray: false },
//     { fieldName: "sessionDate", isArray: false },
//     { fieldName: "players", isArray: false },
//     { fieldName: "OneLiner", isArray: false },
//     { fieldName: "attendance", isArray: false },
//     { fieldName: "quest", isArray: true }
// ];

// const codex = {
//     worldFields: [
//         { fieldName: "worldTag", isArray: false },
//         { fieldName: "map_height_y", isArray: false },
//         { fieldName: "map_width_x", isArray: false },
//         { fieldName: "scale_pixels", isArray: false },
//         { fieldName: "scale_pixels_range", isArray: false },
//         { fieldName: "mapCalc1", isArray: false }
//     ],
//     placesFields: [
//         { fieldName: "parent", isArray: false },
//         { fieldName: "Community-Size", isArray: false },
//         { fieldName: "Alignment", isArray: false },
//         { fieldName: "Government", isArray: false },
//         { fieldName: "politics", isArray: false },
//         { fieldName: "leader", isArray: false },
//         { fieldName: "region", isArray: true },
//         { fieldName: "size", isArray: false },
//         { fieldName: "population", isArray: false },
//         { fieldName: "commonraces", isArray: true },
//         { fieldName: "religion", isArray: true },
//         { fieldName: "exports", isArray: true },
//         { fieldName: "imports", isArray: true },
//         { fieldName: "image", isArray: false }
//     ],
//     npcsFields: [
//         { fieldName: "Age", isArray: false },
//         { fieldName: "Vitality", isArray: false },
//         { fieldName: "Role", isArray: false },
//         { fieldName: "defaultRacePics", isArray: true }
//     ],
//     itemsFields: [
//         { fieldName: "cssclasses", isArray: true },
//         { fieldName: "SourceType", isArray: false },
//         { fieldName: "BookSource", isArray: false }
//     ],
//     loreFields: [
//         { fieldName: "Tags", isArray: true }
//     ],
//     factionsFields: [
//         { fieldName: "Organization style", isArray: false },
//         { fieldName: "Leader", isArray: false },
//         { fieldName: "PrimaryHome", isArray: true },
//         { fieldName: "type", isArray: false }
//     ],
//     raceFields: [
//         { fieldName: "cssclasses", isArray: true }
//     ],
//     bestiaryFields: [
//         { fieldName: "filter", isArray: false }
//     ]
// };

// const eventsFields = [
//     { fieldName: "NoteIcon", isArray: false },
//     { fieldName: "obsidianUIMode", isArray: false }
// ];

// // Export grouped lookups
// const GROUPED_LOOKUP = {
//     sharedFields,
//     campaignFields,
//     charactersFields,
//     questsFields,
//     sessionsFields,
//     codex,
//     eventsFields
// };


// module.exports = async (tp) => {
//     const dv = app.plugins.plugins.dataview.api;
//     const worldFiles = dv.pages("#Category/World").array();
//     console.log(worldFiles)

//     let selectedWorld = (
//         await tp.system.suggester((world) => {
//             return world.file.name;
//         }, worldFiles, false, "Which World is this set in?")
//     )
//     selectedWorld = selectedWorld || worldFiles[0];
//     return {
//         worldTag: selectedWorld.worldTag,
//         worldName: selectedWorld.file.name,
//         worldFolder: selectedWorld.file.folder,
//         world: selectedWorld.file.link,
//     }
// };

// module.exports.FIELD_LOOKUP = FIELD_LOOKUP;
