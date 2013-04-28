---
comments: true
date: 2007-10-18 01:31:16
layout: post
slug: styling-issues-when-generating-an-xls-from-html
title: Styling issues when generating an xls from HTML
wordpress_id: 152
categories:
- ColdFusion
---

A few notes to self on generating .xls files from HTML tables, particularly with CSS.

It appears that excel only has a particular 'range' of hex numbers you can use (at least for background colours). I was trying to use #eeeeee; for a while (which is obviously fine for HTML and for creating a PDF), but I couldn't use that as a value in excel as the colours just weren't displaying. Perhaps the colour was too close to white?

In any event, once I chose a darker colour (#bbbbbb) the background colour appeared fine!

Another issue was that HTML allows you to specifiy multiple CSS classes such as:

``` javascript
<table>
	<thead>
		<tr>
			<th class="sortOpt1 highlight">STUDIO</th>
```

This wasn't working for me, so for that <th> I added an inline style:

``` javascript
<table>
	<thead>
		<tr>
			<th class="sortOpt1" style="background-color:##bbbbbb;">STUDIO</th>
```

If anyone is interested in the code to actually launch the open/save dialogue window, here it is:

``` javascript
<cfheader name="Content-Disposition" value="attachment; filename=studioDailyReport_#dateFormat(now(), 'yyyymmdd')#.xls">
<cfcontent type="application/msexcel">
<!--- output HTML data here --->
```
