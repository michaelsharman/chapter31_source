---
comments: true
date: 2011-01-12 22:47:45
layout: post
slug: checking-for-correct-case-sensitive-tables-in-farcry
title: Checking for correct case-sensitive tables in FarCry
wordpress_id: 879
categories:
- ColdFusion
- Farcry
---

We run several FarCry projects at Learnosity and all of them run on Linux. We have occasionally come across issues where the FarCry codebase will refer to a MySQL table in the wrong "case".

E.g. referring to "dmhtml" where the actual table name is "dmHTML".

This is course fails in any case sensitive environment. Note that we also run our [Macs as case sensitive in development](http://www.chapter31.com/2010/10/04/case-sensitive-development-on-mac-os-x/) to help find these issues before deploying to a stage/production server.

Anyway, I wrote a small test script to introspect the FarCry codebase for types and rules etc to compare that with a local MySQL database to attempt to find (and fix) any case sensitive issues that might occur.

We already have a custom area under the "Admin" tab in the webtop, I added the file there.

![webtop](http://www.chapter31.com/wp-content/uploads/2011/01/webtop.png)

If you're interesting in having a look, [download diff.cfm](http://www.chapter31.com/wp-content/uploads/2011/01/diff.cfm) and put inside your projects "customAdmin" folder and link to it from customadmin.xml e.g.

``` javascript
	<section mergeType="merge" id="admin" sequence="4100" permission="MainNavAdminTab" label="Admin" icon="config" description="administration/utility tasks">
		<subsection id="learnosity" sequence="10000" label="Table Name Check" permission="AdminGeneralTab">
			<menu sequence="10" id="intranetmenu" label="Utility Tasks" labelType="value">
				<menuitem id="diff" sequence="1" label="FarCry/MySQL Diff" link="/admin/customadmin.cfm?module=diff.cfm" />				
			</menu>
		</subsection>
	</section>
```

Hope it helps!


