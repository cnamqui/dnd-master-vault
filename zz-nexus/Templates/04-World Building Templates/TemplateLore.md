<% "---" %>
<%*
const {   
	worldTag,
	worldName,
	worldFolder
} = (await tp.user.worldConfig(tp, app))
-%>
<% await tp.file.move(`${worldFolder}/Lore/` + tp.file.title) %>
 
<%*
const hasTitle = !tp.file.title.startsWith("NewLore");
let title;
if (!hasTitle) {
    title = await tp.system.prompt("What's this about");
    await tp.file.rename(title);
} else {
    title = tp.file.title;
}
_%>
aliases:
 - <% title %>
obsidianUIMode: preview
NoteIcon: lore
Tags: 
 - Category/Lore
 - <% worldTag %>
  - InProgress

<% "---" %>

# `=this.file.name`
> [!infobox]
> ## Mentioned in
>   
> ```dataview
> Table FROM [[]]
> ``` 