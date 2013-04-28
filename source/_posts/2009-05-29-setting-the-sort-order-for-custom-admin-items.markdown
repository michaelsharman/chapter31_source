---
comments: true
date: 2009-05-29 00:56:46
layout: post
slug: setting-the-sort-order-for-custom-admin-items
title: Setting the sort order for custom admin items in FarCry
wordpress_id: 635
categories:
- ColdFusion
- Farcry
---

I've wanted to be able to control the sort order of _menu_ and _menuitems_ in the customadmin.xml (or equivalent) file for quite a while but hadn't found how to do it. Only today did I find the ability, I believe it's a [FarCry](http://farcrycms.org/) 5+ feature which was why I didn't see it before.

The answer is simple, just add a "sequence" attribute to your menu or menuitem tag:

``` javascript
<menu mergeType="merge" sequence="1" id="farcry_studentsonlineadminSubSection" label="Homepage Content" labelType="value">
	<menuitem id="boardlinks" sequence="1" label="Board Links" link="/admin/customadmin.cfm?module=customlists/boardlinks_data.cfm" />
	<menuitem id="boardlinks_sort" sequence="2" label="Board Links Sort Order" link="/admin/customadmin.cfm?module=customlists/boardlinks_sort.cfm" />
	<menuitem id="calendar" sequence="3" label="Calendar" link="/admin/customadmin.cfm?module=customlists/lu_calendar.cfm" />
	<menuitem id="faq" sequence="4" label="FAQ's" link="/admin/customadmin.cfm?module=customlists/lu_faq.cfm" />
</menu>
```

You can [read more](http://docs.farcrycms.org/display/FCDEV50/Inline+Webtop+Documentation) cool things you can do with your custom objectadmin on the [FarCry docs site](http://docs.farcrycms.org/).
