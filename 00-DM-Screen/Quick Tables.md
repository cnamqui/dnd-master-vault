---
obsidianUIMode: preview
---


```datacorejsx
return function View(){
	const pages =  dc.useQuery("@page and  path(\"04-Compendium/CLI/5E/compendium/tables\") and  $name.contains(\"dragon\")")
	
	
	return <dc.List rows={pages} renderer={page => page.$link}/>
}
```


 