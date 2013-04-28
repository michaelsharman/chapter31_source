---
comments: true
date: 2009-06-09 01:59:01
layout: post
slug: setting-application-variables-in-farcry
title: Setting application variables in FarCry
wordpress_id: 639
categories:
- ColdFusion
- Farcry
---

I just thought I'd write up some quick thoughts on setting application scoped variables in FarCry as it occured to me that it could be a little confusing to non-FarCry developers.

It doesn't really matter which framework you use,  you can theoretically set you application variables _anywhere you want_, but ideally you want to follow some sort of methodology and consistency both with the rest of your development team and of course the [framework you happen to be using](http://www.farcrycms.org/).

[FarCry](http://www.farcrycms.org/) has (somewhat) recently added a "farcryConstructor.cfm" inside the project webroot (www). A quick peek inside suggests that this is where application vars are set, this is re-inforced by checking Application.cfc which has a bascially empty OnApplicationStart() in terms of setting project application vars.

Sample of farcryConstructor.cfm:
``` javascript
<cfset THIS.sessionmanagement = true  />
<cfset THIS.sessiontimeout = createTimeSpan(0,0,20,0) />
<cfset THIS.applicationtimeout = createTimeSpan(2,0,0,0) />
<cfset THIS.clientmanagement = false />
...
```

There is also the _/config_ directory which has been in existence for several versions and contains, you guessed it, "configuration" files. Namely:
	
  * _serverSpecificRequestScope.cfm
  * _serverSpecificVars.cfm
  * _serverSpecificVarsAfterInit.cfm

So where do you add your custom project application vars? The options we have so far are:
	
  * www/farcryConstuctor.cfm
  * www/Application.cfc
  * config/_serverSpecificxxx.cfm

Well _farcryConstructor.cfm_ could seem like an ideal place, after all it's the "constructor". But it is generated from the installation routine and as such ignores any custom variables which are set inside it. So steer clear of this one.

OnApplicationStart() would also be a logical place inside _Application.cfc_. After all that's probably where all your configuration happens in non-framework applications. This will indeed work as expected, but it's not really the ideal place for your project config information.

It's probably best to follow the "FarCry way" of doing things which is to utilise the files inside your _/config_ directory. This should be the first place anyone in your development team goes to look for any custom project properties or application scoped variables.

Let's look at the 3 /config files:

**_serverSpecificRequestScope.cfm**
_This file is run after /core/tags/farcry/_requestScope.cfm
It enables us to both override the default farcry request scope variables and also add our own_

**_serverSpecificVars.cfm**
_THIS WILL BE INCLUDED BEFORE THE FARCRY INIT IS RUN BUT ONLY ON APPLICATION INITIALISATION._

**_serverSpecificVarsAfterInit.cfm**
_THIS WILL BE INCLUDED AFTER THE FARCRY INIT HAS BEEN RUN BUT ONLY ON APPLICATION INITIALISATION._

I would therefore use __serverSpecificVars.cfm_ for all your application scoped variables as it is run once on application initialisation. If you need to make a change here you need to update the application. 

I'd use __serverSpecificRequestScope.cfm_ for all your request scoped variables. This template is basically like OnRequestStart() in _Application.cfc_, i.e. it is executed on each page request.

Hope that helps some people :)
