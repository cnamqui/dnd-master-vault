<% "---" %>
<%* 
	const { campaignFolder, campaignName, campaignTag } = (await tp.user.campaignConfig(tp, app))
-%>
<% await tp.file.move(`/3-Session Journal/${campaignName}/` + tp.file.title) %>
<%* 
const hasTitle = !tp.file.title.startsWith("NewJournal") && !tp.file.title.startsWith("Untitled");
let title;
if (!hasTitle) {
    title = await tp.system.prompt("Enter Date (yyyy-mm-dd)", tp.date.now());
    await tp.file.rename(title);
} else {
    title = tp.file.title;
}
_%>
NoteIcon: journal
aat-render-enabled: true
fc-category:
  - Event Category 1
fc-display-name: 
sessionstatus:
  - Occured
type: Session Journal
sessionDate: <% tp.date.now() %>
players: 2
Status:
  - ⏳
OneLiner: 1 Line Summary
timelines:
  - journal
tags:
  - journal
  - <% campaignTag %>
  - InProgress

<% "---" %>
 
#  <% title %>
##  Roster 

%% Keep track of who turned up. %%
 # Roster 
```meta-bind-embed
![[Attendance]]
```
 

 
# Session Overview
## Summary
%% I like to keep a quick summary of sessions here. %%

This is what happened! 

## Scratch Pad