---
comments: true
date: 2006-10-22 01:13:47
layout: post
slug: cfeclipse-snippets
title: cfeclipse snippets
wordpress_id: 61
categories:
- ColdFusion
---

The eclipse/cfeclipse combinations makes for a pretty powerfull developing tool for ColdFusion programmers, even those who miss the good old days of using Homesite!

One of the cool things cfeclipse brought over from Homesite is [snippets](http://www.cfeclipse.org/go/documentation/user-docs/snippets), but cfeclipse has a few extra goodies to make them better than ever :)

Whereas in Homesite you would assign a keyboard shortcut directly to a snippet, cfeclipse has an invoke/trigger key combination which stays the same while allowing you to use ANY key(s) as the actual trigger text for the snippet.

For example I have a cfabort snippet with a trigger text of 'a'. Now in eclipse 3.2 the invoke/trigger combination is ctrl + j, so if I type the letter 'a', then press ctrl + j I get a lovely cfabort tag! Doing things this way allows me to have the same invoke key (ctrl + j) then simply remember my trigger text for each snippet. Nice :)

In common with Homesite is the idea of snippet variables, most handy if your snippet text requires or relies upon a user defined parameter value. An example here is cfinclude where you must specify the 'template' attribute.

To setup snippet variables you use the $${variable:default} format. My trigger text is 'i' for cfinclude, so when I invoke the snippet I get asked to enter a parameter value as follows:

![cfeclipse snippet variable](/images/uploads/2006/10/snippet.jpg)

My entire snippet looks like this: <cfinclude template="$${template:.cfm}" />>

There are a number of built in snippet variables:

$${DATE}
$${MONTH}
$${TIME}
$${DATETIME}
$${DAYOFWEEK}
$${CURRENTFILE} - Current file name (just the file)
$${CURRENTFOLDER} - Current folder (The path to the containing folder)
$${CURRENTPATH} - Current path (full file name)
$${CURRENTPRJPATH} - Just the folder
$${USERNAME} - Current user
$${MONTHNUMBER} - Month as a number
$${DAYOFMONTH} - Day of month as a number
$${DAYOFWEEKNUMBER} - Day of week (the week starts on Sunday)
$${DATETIME24} - DateTime24 - a 24 hour clock version of datetime.
$${YEAR} - Current year.
$${YEAR2DIGIT} - Current two digit year.

Other than those, you're free to name your variables as you wish.

Another SUPER cool feature is the ability to choose a default value from a range. So for my cflocation snippet I have:

    <cflocation url="$${url:.cfm}" addToken="$${addToken:false|true}" />

Note the use of the pipe (|). There is even more than this on the cfeclipse.org site so take a peek. Some of the snippets I use are:

cfabort
cfcomment
cfdump
cfinclude
cflocation
cfoutput
cfquery
cfscript
html comment (used with xml files)

I also use tonnes of snippets for HTML, (strong, em etc). Using snippets is easy to learn and saves you a LOT of time when you're used to invoking them with ease!

[Have a look here](http://www.chapter31.com/cfeclipse-snippets/) for a complete list of my snippets, you can also download them for easy use
