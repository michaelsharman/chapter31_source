---
comments: true
date: 2011-08-17 00:38:33
layout: post
slug: farcry-plugin-webtop-tools
title: FarCry Plugin - Webtop Tools
wordpress_id: 992
categories:
- Farcry
---

We're starting to compile a list of internal tools used when developing a FarCry application. I thought it might be simpler to create a small FarCry plugin to keep them all in the same place, makes it easier to use across multiple projects.

[The plugin](https://github.com/michaelsharman/lcwebtoptools) currently contains 2 scripts:

* FarCry database diff (MySQL only at this stage)
* Content Object Meta

The database diff looks for case-sensitivity differences between your ColdFusion components and the actual MySQL table names (MySQL only). Historically we've had issues because we are on Linux, this tool has helped quickly iron out any differences in "case".

The Content Object Meta assists in finding information about content of any "type" in FarCry, based on the title, objectId or friendly URL. What does this mean? Well any "content object" you want information on can be found using this tool. Whether you have an objectId and you don't know if it belongs to dmNavigation, dmHTML, dmNews or a custom type. Or you might have part of a friendly URL or content label/title. This tool can help tell you what the content type is, whether it's approved, where it sits in the site tree (if relevant) etc.

For example; if I wanted to know everything in FarCry that had a label LIKE 'credential' (wildcards are automatically added to your search term) I might get results like the following:

![](http://www.chapter31.com/wp-content/uploads/2011/08/contenttitle.png)

From that initial resultset, if I clicked on an objectid for dmNavigation:

![](http://www.chapter31.com/wp-content/uploads/2011/08/objectid.png)

Or if I clicked on an objectid for dmHTML:

![](http://www.chapter31.com/wp-content/uploads/2011/08/objectid_dmhtml.png)

Note that there is a collapsed cfdump that you can expand for further info.

## Requirements

Railo 3.2+ or ColdFusion 7+  
FarCry 6+  
MySQL 5+  

## Installation

"Official" notes on installing FarCry plugins can be found here: [https://farcry.jira.com/wiki/pages/viewpage.action?pageId=12943398](https://farcry.jira.com/wiki/pages/viewpage.action?pageId=12943398)

It's pretty simple though:
	
* add the "lcwebtoptools" directory from git into /farcry/plugins/
* add "lcwebtoptools" to THIS.plugins in farcryConstructor.cfm (in your project webroot)

e.g. 
	<cfset THIS.plugins = "farcrycms,lcwebtoptools">

Restart your app, that's it. No coapi changes need to be made. To access the current tools, go to the "Admin" tab and choose "Webtop Tools" from the drop down.

The plugin is [hosted on github](https://github.com/michaelsharman/lcwebtoptools), for a direct download to the zip [click here](https://github.com/michaelsharman/lcwebtoptools/zipball/master).
