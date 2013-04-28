---
comments: true
date: 2012-08-06 07:05:22
layout: post
slug: turning-off-sessions-for-non-https-traffic
title: Turning off sessions for non-https traffic
wordpress_id: 1149
categories:
- ColdFusion
---

Today I wanted to configure an application to only set _secure_ cookies. Those are cookies that are only sent back to the server if over a secure (https) connection.

The main reason for this is to prevent session hijacking, where a bad guy might sniff the cookie values which links a user to the session "state" on the server. If they managed to do that, (which they could if the session was started on an _http://_ connection, then if/when the user logged on and was transferred to _https://_) the bad guy would still have their cookie values and thus would be able to visit the website as the logged in user. No good. You can read more on [Jason Dean's great series on security](http://www.12robots.com/index.cfm/2009/1/5/mmmmMMmmmmmmm-Cookies--Security-Series-12)

Another thing to consider when it comes to securing your sessions/cookies is using _httpOnly_ cookies. These are ones that reside in the browser memory, so that when you close down your browser (not just a tab, the whole browser) the cookie expires. So if somebody comes along after you and opens up a browser…they won't access any previous logged in sessions you may have left open. Another cool thing about _httpOnly_ cookies is that they can't be read from JavaScript which helps to mitigate CSRF attacks :)

As ColdFusion sets a new session by default upon every first visit (if you have _sessionManagement_ turned on), you have a couple of options to mitigate session hijacking. One of these is _secure_ cookies, ColdFusion has a few options for this (as well as _httpOnly_). [12Robots has a great page](http://www.12robots.com/index.cfm/2009/5/6/Making-the-JSESSIONID-Session-Token-Cookie-SECURE-and-HTTPOnly-and-settings-its-PATH) with code sample on how to set these up, however I wanted to take things one step further and that was to simply turn off _sessionManagement_ if NOT over SSL. This also has the benefit of not allowing bots to clog up your server RAM with sessions that your site/application just doesn't need.

Here is the code I used to only have session management turned on over SSL and not for traffic over port 80. Also included is the code from 12Robots to set _secure_ and _httpOnly_ cookies.

``` javascript
component
{
	this.name = "myappname";
	this.applicationTimeout = createTimeSpan(0,2,0,0);

	//Get the page context to test HTTPS, if on http then DON'T set sessions/cookies (for bots and security), otherwise set sessions
	currRequest = getPageContext().getRequest();
	if (currRequest.isSecure())
	{
		this.sessionManagement = true;
		this.sessionTimeout = createTimeSpan(0,1,0,0);
	}
	else
	{
		this.sessionManagement = false;
	}

	this.setClientCookies = false;
	this.clientManagement = false;

	// This method only fires if this.sessionManagement = true
	public void function onSessionStart()
	{
		var response = getPageContext().getResponse();
		var path = "/";
		var domain = application.config.httpsURL;
		var secure = "Secure";
		var HTTPOnly = "HTTPOnly";
		var header = "jsessionid=#session.sessionid#;domain=#domain#;path=#path#;#secure#;#HTTPOnly#";
		response.addHeader("Set-Cookie", header);
	}

	// the rest of your Application.cfc
}
```
