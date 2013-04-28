---
comments: true
date: 2006-10-04 23:29:10
layout: post
slug: finding-cpu-andor-memory-leak-issues-with-coldfusion
title: High CPU and memory usage in ColdFusion
wordpress_id: 47
categories:
- ColdFusion
---

[Charlie Arehart](http://carehart.org/blog/client) had an extremely [interesting article today](http://carehart.org/blog/client/index.cfm/2006/10/4/bots_and_spiders_and_poor_CF_performance) on JRun performance issues, particularly relating to high CPU cycles and memory usage.

The perpetrators in this example were thought to be search engine spiders (or 'bots') and/or RSS feeds.

Now bots may visit your website many times throughout the course of a single day, this could be the same bot of different bots (for different search engines). Also you may be in a situation where you have many people syndicating content from your site in the form of a feed (RSS/Atom etc).

The problem starts to appear if you use session and/or client management (sessionmanagement="yes" or clientmanagement="yes") because these mechanisms don’t store cookies. So everytime one of these processes calls one of your pages a new session/client variable etc is created. Not so much of a problem, but what happens if you have increased traffic (more feeds, more bots) and suddenly you’re creating a LOT of unwanted variables in memory. Remember though that a new ‘session’ will be create on each page request!

But take that further, what happens if you have an onSessionStart() event which loads an object (or large amount of data) into memory? Or if you are doing database transactions? These are all needless in this example and taking up far too many resources.

So what do you do?

[Michael Dinowitz](http://www.blogoffusion.com/) has some good ideas which he [posted last year](http://www.blogoffusion.com/index.cfm/2005/11/28/pseudomemory-leak). To quote Michael:

1. Increase your ram. If you can do this, then ramp up your memory as high as you can. This is not a perfect solution but it saves throwing time at the problem and gives you a ‘buffer’ against problems of this sort.
2. Set a robots.txt with a Crawl-delay setting. Mine is set to 1 second but you can set yours to something higher
3. set a different cfapplication for the most common bots. I use a simple regular expression to find key words that only exist in bots:
``` ruby
<CFIF REFindNoCase('Slurp|Googlebot|BecomeBot|msnbot|Mediapartners-Google|ZyBorg|RufusBot|EMonitor', cgi.http_user_agent)>
<CFAPPLICATION name="FusionA" clientmanagement="no" sessionmanagement="no" setclientcookies="no" setdomaincookies="no" clientstorage="Cookie">
<CFELSE>
<CFAPPLICATION name="FusionA" clientmanagement="yes" sessionmanagement="no" setclientcookies="yes" setdomaincookies="no" clientstorage="Cookie">
</CFIF>
```

This will make sure that a client structure is NOT created for one of these bots.

4. Use the same regex to clean out the client structure after the bot finishes the page. Use structclear(client) to remove the data in the onRequestEnd.cfm, the onRequestEnd method of the application.cfc or in the template itself.
Bottom line is that while bots are great for indexing your content, they can cause havoc on your system when a lot of memory is assigned to what is essentially a ‘dead session’.

All in all a fantastic read and a reminder to developers that a web sites development isn’t finished once it goes live. Post launch performance tuning and monitoring are essential to running an efficient and fast performing site.

It does seem a little ironic that the tools meant to assist us (in search rankings and content syndication) are a possible cause of poor site performance to the point that users might leave!

Note that Charlies article was inspired by [Mark Kruger](http://www.coldfusionmuse.com/index.cfm/2005/11/28/session.bots) which I also suggest reading.