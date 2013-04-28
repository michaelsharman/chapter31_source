---
comments: true
date: 2007-10-08 05:06:12
layout: post
slug: cant-set-a-scheduled-task-end-date
title: 'Can''t set a scheduled task ''End Date'' '
wordpress_id: 148
categories:
- ColdFusion
---

I've just created some functionality which will be executed by a ColdFusion (8 standard on Win 2003) scheduled task daily, but only for 1 month.

When I add my new task in ColdFusion administrator I can set the 'Start Date' ok, but not the 'End Date'. The reason? Well I'm not sure, but it looks like a conflict in US/European date formats (I'm located in Australia and the server region settings are English/Australia).

Why oh why oh why oh why are there different date formats like mm/dd/yyyy and dd/mm/yyyy? Does this not annoy the HELL out of all developers out there who don't reside in the US?

I want my task to begin on the 10th of October and end on the 7th of November. But try as I might I cannot enter the 7th of November as an end date in ColdFusion administrator, I keep getting either an invalid 'End Date' format or that the end date is earlier than my start date.

Note that when you hover over the Start/End Date form fields the tooltip tells you the format should be entered as 'mm/dd/yyyy'.

I've tried the following formats:

``` javascript
Start Date		End Date
10/10/2007		11/07/2007
10/10/2007		07/11/2007
10/10/2007		11/07/2007
10/10/2007		{ts '2007-07-11 00:00:00'}
10/10/2007		{ts '2007-11-07 00:00:00'}
10/10/2007		'07/November/2007'
```

I can of course stop the code actually executing by checking the date etc then aborting, and then remove the task in ColdFusion administrator by hand. But, what am I doing wrong here? Has anyone else experienced this?

Thoughts?

