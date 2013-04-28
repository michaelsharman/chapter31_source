---
comments: true
date: 2007-09-27 01:08:55
layout: post
slug: creating-a-custom-farcry-login-page
title: Creating a custom FarCry login page
wordpress_id: 142
categories:
- ColdFusion
- Farcry
---

The FarCry security model is really very cool. You can of course setup users within the 'admin' area and assign those users to groups (and those groups can have different permissions), but you can also authenticate via Active Directory or LDAP etc.

One thing you can also do with ease is secure particular navigation 'nodes' of the website, thus quickly and easily creating password protected 'member' areas.

Whenever you secure a navigation branch the user is presented with the default FarCry login screen as seen below:




![FarCry login](/images/uploads/2007/09/farcrylogin.jpg)




Because this is a 'front end' page (seen by site visitors) you will often want to change the look and feel to mimick your client's design for branding purposes. As with a lot of things with FarCry this is a piece of cake!

All you need to do is add your own login screen in /yourproject/customadmin/login/login.cfm

It's probably best to copy the original login.cfm from /farcry/core/tags/navajo/login.cfm so all the FarCry 'logic' is retained, just make all the HTML/CSS changes you need.

Here is an example of just that, a custom 'front end' login screen:




![Custom login](/images/uploads/2007/09/customlogin.jpg)




The only thing with this is that when a client administrator needs to login to FarCry administration area (or 'Webtop') they will also see this 'custom' template.

If this meets client expectations then you have nothing to worry about, if however you want to have the default FarCry login screen visible when an administrator is logging in to the back-end (while retaining the custom login screen on the front-end) then you need to make this simple change at the top of your custom login.cfm:

/yourproject/customadmin/login/login.cfm

Note that this needs to be at the top of the page (above your custom login code).

``` javascript
<!---
	If a user is attempting to login to the FarCry webtop, load the default login screen.
	Otherwise load the custom 'members' login screen for password protected site areas.
 --->
<cfif structKeyExists(URL, "returnURL") AND URL.returnURL CONTAINS "farcry">
	<cfimport taglib="/farcry/core/tags/navajo" prefix="nj" />
	<nj:Login>
	<cfabort />
</cfif>
```

You can read a little more about [customising logins here](http://docs.farcrycms.org:8080/confluence/display/FCDEV40/Customise+Login).

This will work in FarCry versions 3 and 4.
