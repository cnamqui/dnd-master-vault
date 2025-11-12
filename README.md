# Introduction
This is an obsidian vault for managing D&D campaigns based on  [obsidianttrpg](https://obsidianttrpgtutorials.com/Obsidian+TTRPG+Tutorials/Obsidian+TTRPG+Tutorials)
This was published for my friends and D&D co-DMs in order to collaborate on a west-marches campaign together. This does not include any content, but does include dashboards and scripts to make managing campaigns easier.

# Installation

 

## Fork  or download this repository. 
   ![[Pasted image 20251111222525.png]] 
   > [!Note ]
   >  This vault will still work if you just download the zip file and extract it to a folder, but if you want to get updates, you should fork the repository instead. Doing that will require a GitHub account

   - If you do decide to fork it, clone it to your PC. If you're new to Git and GitHub, I recommend installing [GitHub Desktop](https://desktop.github.com/download/) 
   
## Content
 You should now have a copy of the master vault! Time to get some content into it. You'll notice that your `04-Compendium`  folder is empty. If you're coming from our discord (private) server, ask for the links to that file in the chat. If you don't have access to the discord, there's a [tutorial](https://obsidianttrpgtutorials.com/Obsidian+TTRPG+Tutorials/Plugin+Tutorials/TTRPG-Convert-CLI/TTRPG-Convert-CLI+5e) in obsidianttrpg about how to get the data. 
   > [!Note ]
   > I am aware that there are some templates that don't work without the contents of the `04-Compendium` folder. I should have a fix for that soon
## Loading the vault
### Open the vault for the first time. 
 If you are new to obsidian, you need to open the folder you cloned the repository into as a vault.
   ![[Pasted image 20251111224334.png]]
 ### Enabling Plugins 
   Choose "Trust author and enable plugins". (I mean that's kinda why you downloaded this. If you're not sure then please take the time to browse through the vault first before enabling the plugins)
   If you choose no, you can always enable it later by disabling Restricted Mode in **Settings > Community plugins** and then click "Trust author and enable plugins"
   
> [!Note ]
>  Obsidian will now try to index your new vault. If you added some files to `04-Compendium` this will take some time. Go grab some coffee.


## Adding your campaign
If you are also coming from our discord (private), you can grab our campaign files from a separate repository and place them in `03-Campaigns`. 

If you are using this vault for your own campaign, there are a couple of ways to add your campaign.
#### Option# 1: 
head over to the [[Dashboard]] and click `New Campaign` 

#### Option# 2:
Hit `Ctrl+N` (`Cmd+N` on mac) to create a new note and select `TemplateCampaign`. This should create a template campaign file. 
- This vault should have my key bindings so just hit  `CTRL+Shift+R` to replace the template
- If you're on Mac, just hit `Cmd+P` to bring up the command menu, and search for  `Templater: Replace templates in active file`
		  
 ![[Pasted image 20251111225716.png]]

## All Set!
You're ready to go! For a quick overview, check out [[Dashboard]] to see quick create buttons for quests,  players, characters, items, npcs, factions, etc

### Folder Structure

You should have the following folder structure  as detailed below.
```
.
├── 00-DM-Screen
├── 01-DM-Field-Manual
│   └── LazyGM Resource
│       ├── Lazy GM Monster Builder
│       └── Lazy GM Resource
├── 02-Workshop
├── 03-Campaigns
│   ├── Campaign 1
│   │   ├── 01-Characters
│   │   ├── 02-Quests
│   │   ├── 03-Session Journal
│   │   ├── 04-Codex
│   │   └── zz-Attachments
│   └── Campaign 2
│       ├── 01-Characters
│       ├── 02-Quests
│       ├── 03-Session Journal
│       ├── 04-Codex
│       └── zz-Attachments
├── 04-Compendium
│   ├── CLI
│   │   ├── 5E
│   │   └── DaggerHeart
│   └── Decks
└── zz-nexus 
    ├── Scripts 
    ├── Templates
    │   ├── 00-Metadata Snippets
    │   ├── 01-Embeds
    │   ├── 02-Inserts
    │   ├── 03-Help Notes
    │   ├── 04-World Building Templates
    │   └── 05-Mechanics
    ├── zz-Attachments
    └── zz_temp
```

# Attribution
This work includes material taken from the [Lazy GM's Resource Document](https://slyflourish.com/lazy_gm_resource_document.html) by Michael E. Shea of [SlyFlourish.com](https://slyflourish.com/), available under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).

This work includes material taken from the [Lazy GM's 5e Monster Builder Resource Document](https://slyflourish.com/lazy_5e_monster_building_resource_document.html) written by Teos Abadía of [Alphastream.org](https://alphastream.org/), Scott Fitzgerald Gray of [Insaneangel.com](https://insaneangel.com/), and Michael E. Shea of [SlyFlourish.com](https://slyflourish.com/), available under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).

 This work includes material taken from the [ObsidianTTRPG](https://obsidianttrpgtutorials.com/)