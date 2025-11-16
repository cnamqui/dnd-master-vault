<% "---" %>
<%* 
	const { campaignFolder, campaignName, campaignTag,campaignAbbr } = (await tp.user.campaignConfig(tp, app))
-%>
<% await tp.file.move(`${campaignFolder}/05-Events/Event Log/` + tp.file.title) %>
<%*
    const dv = app.plugins.plugins.dataview.api; 
    const players = dv.pages('#Category/Player').array();
    const tls = players.map(p => p.timeline)
    const names = players.map(p => p.file.name) 
    const selectedPlayers = await tp.system.multi_suggester(  names, tls, false, "Which template do you want to use?") 
    const sdate = await tp.system.prompt("Start Date?", '04-2412-01-11');
	const edate = await tp.system.prompt("End Date?", '04-2412-02-11'); 
	const timelines = `${campaignAbbr.toLowerCase()}, ${selectedPlayers.join(', ')}`  
	const hasTitle = !tp.file.title.startsWith("NewEvent");  
	let title;  
	if (!hasTitle) {  
		title = await tp.system.prompt("Event Name");  
		await tp.file.rename(title);  
	} else {  
		title = tp.file.title;  
	}  
_%>

obsidianUIMode: preview
NoteIcon: Event
aliases:
 - <% title %>
tags:
  - npc
  - <% campaignTag %> 
  - Category/Event
  - InProgress
Campaign: 
 - <% campaignName %>
aat-render-enabled: true  
timelines: [ <%timelines %>]  
fc-date: <% sdate %>
fc-end: <% edate %>
fc-category: <% campaignName %>
fc-display-name: <% title %>
aat-event-picture: none
<% "---" %>


%%Contents%%