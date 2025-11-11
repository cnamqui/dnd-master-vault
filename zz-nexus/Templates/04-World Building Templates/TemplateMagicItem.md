<% "---" %>
<%*
const {   
	worldTag,
	worldName,
	worldFolder
} = (await tp.user.worldConfig(tp, app))
-%>
<%* 
	const { campaignFolder, campaignName, campaignTag } = (await tp.user.campaignConfig(tp, app))
-%>
<% await tp.file.move(`/4-Compendium/Items/` + tp.file.title) %>
<%* 
const hasTitle = !tp.file.title.startsWith("NewMagicItem") && !tp.file.title.startsWith("Untitled");
let title;
if (!hasTitle) {
    title = await tp.system.prompt("Enter Item Name");
    await tp.file.rename(title);
} else {
    title = tp.file.title;
}
_%>
obsidianUIMode: preview
cssclasses:
  - json5e-item
tags:
  - item
  - Category/Item
  - cli/item/rarity/
  - InProgress
aliases: 
SourceType: Magic Item
NoteIcon: magicitem
BookSource: <% campaignTag %>

<% "---" %>
 

# Item Name
*Melee Weapon, uncommon (requires attunement by a druid or ranger)*  

- **Damage**: 1d4 S
- **Properties**: [Light](/2-Mechanics/CLI/rules/item-properties.md#Light), Requires Attunement
- **Cost**: ⏤
- **Weight**: 2.0 lbs.

Description

*Source: SourceName*