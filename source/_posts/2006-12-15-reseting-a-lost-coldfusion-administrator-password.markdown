---
comments: true
date: 2006-12-15 02:00:24
layout: post
slug: reseting-a-lost-coldfusion-administrator-password
title: Reseting a lost ColdFusion Administrator password
wordpress_id: 92
categories:
- ColdFusion
---

A colleague sent me a nice way to obtain access to ColdFusion Administrator (any instance) when you've lost your password. After a little googling I also came across another method, both assume that you have administrator access to the application server.

The following examples assume a ColdFusion installation in a multi-server environment, using the default (cfusion) instance.

1. Reseting the password:
	* Open the _password.properties_ file in C:\JRun4\servers\cfusion\cfusion-ear\cfusion-war\WEB-INF\cfusion\lib
	* Enter your new password for RDS ("rdspassword") and ColdFusion Administrator ("password")
	* Make sure "encrypted" is set to false
	* Restart your ColdFusion instance
2. Turning the password off (allowing full access with no authentication)
	* Open the _neo-security.xml_ file in C:\JRun4\servers\cfusion\cfusion-ear\cfusion-war\WEB-INF\cfusion\lib
	* Search for _&lt;var name='admin.security.enabled'&gt;&lt;boolean value='true'/&gt;&lt;/var&gt;_
	* Set _value='false'_ and restart your ColdFusion instance.

Note that with option 2 you are left totally unprotected, anyone who has access to that machine (and knows the administrator URL) will have access and control over your ColdFusion application server.

Therefore it would be best now that you have access, to set a new password immediately :)
