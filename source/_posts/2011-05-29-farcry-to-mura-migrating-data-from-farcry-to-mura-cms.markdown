---
comments: true
date: 2011-05-29 23:00
layout: post
slug: farcry-to-mura-migrating-data-from-farcry-to-mura-cms
title: "FarCry to Mura - migrating data from FarCry to Mura CMS"
wordpress_id: 922
categories:
- ColdFusion
- Farcry
- Mura
- Railo
---

For years [here at Learnosity](http://www.learnosity.com/) we've been using [FarCry](http://www.farcrycore.org/) for most of our CMS requirements (yes, I know that FarCry, or rather farcrycms, is a lot more than just a CMS).

For one reason or another we decided it was time to look at some of the other options for content management in the ColdFusion sphere, [Mura CMS](http://www.getmura.com/) was a likely candidate for evalutation.

We had a small-ish site that was already running in FarCry 6+ which we wanted to port to Mura so we could really get a feel for how things worked in Mura-land. If things go well we may decide to move more sites across, so I wanted a way to migrate existing content from a FarCry database to a Mura one. A quick search for something to do this came up blank so I spent half a day coming up with a little tool to do this. Here it is in case anyone else might find it useful.

You can [find the project on github](https://github.com/michaelsharman/farcrytomura) (https://github.com/michaelsharman/farcrytomura), below is the "help" page I added:

## Introduction

This script imports basic navigation and HTML data from an existing FarCry database into a Mura one.

## Requirements

This was built on

* Railo 3.2+
* ColdFusion 7+
* FarCry 6+
* Mura 5.4+
* MySQL 5+

Not sure about FarCry 5, you should be ok as I don't think the v6 schema changes will effect this script

To make things easier, session management must enabled

## Installation


Probably easiest to put this folder (farcrytomura) in the webroot of an existing project/vhost, then call it from http://www.yourproject.com/farcrytomura/

If you want, you can setup a project/vhost specifically for this, but it's not necessary.

This script has its own Application.cfc to avoid scope conflict

Caveat - the ColdFusion/Railo server (instance/context) that you run this from needs to have BOTH dsn's (the FarCry and Mura ones) in the cf admin

## FarCry content types

Currently we examine the FarCry navigation tree and bring across the entire structure underneath 'Root' (i.e. any nLevel 2+ nodes)

If people want it, we can extend the functionality to import from a specific node, e.g. from 'Home'.This would be handy	if your FarCry site has secondary/utility navigation etc that you want imported separately.

Although all navigation nodes will be created in Mura, the only actual content that is imported is dmHTML, we ignore:

* dmInclude
* dmLink
* Anything but the first content object under a navigation node
* dmNews, dmEvent or any other "dynamic" content type
* Custom tree content types

Basically we import all navigation nodes under the site tab, from "Root" down, including the HTML content.

## FarCry homepage content

Currently we ignore the farcry homepage content because we assume there is at least a "home" page in Mura. This is a TODO

## SES URLs

Mura ses url's are created on import based off the title of the page from FarCry. This should be the default behaviour as if you were created a page from within Mura admin.

Currently we're NOT importing the FarCry friendly URL into Mura.

## Rolling back

If you want to rollback the import, you'll need to:

    DELETE FROM tcontent WHERE siteID = '[yoursite]' AND lastUpdateBy = 'farcrytomura'

## TODOs

* Ability to select the page template from Mura
* When previewing the Mura navigation tree, indent properly
* Import the FarCry "home" page content
* Handle farcry secondary/utility nav's (anything else at the same level as "home")
* Fix sortorder on sub items, they work fine but not as neat as they could be


![](/images/uploads/2011/05/farcrytomura_setdns.png)
![](/images/uploads/2011/05/farcrytomura_setmurasiteid.png)
![](/images/uploads/2011/05/farcrytomura_checkfarcry.png)
![](/images/uploads/2011/05/farcrytomura_checkmura.png)
![](/images/uploads/2011/05/farcrytomura_domigration.png)
![](/images/uploads/2011/05/farcrytomura_help.png)
