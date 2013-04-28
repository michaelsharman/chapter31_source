---
comments: true
date: 2008-11-03 06:34:48
layout: post
slug: caveat-using-datediff-to-compare-difference-in-days
title: Caveat using dateDiff() to compare difference in days
wordpress_id: 484
categories:
- ColdFusion
---

I had [some problems a little while ago](http://www.chapter31.com/2007/10/05/createodbcdate-returns-time-as-well/) using dateCompare() and the same thing bit me recently with dateDiff(). Well really I had a problem with createODBCDate(), but let me explain.

I wanted to compare the "day" value between 2 dates like;

``` javascript
<cfscript>
	date1 = now();
	date2 = myQuery.dateCreated;
	
	dateDifference = dateDiff("d", date1, date2);	
</cfscript>
```

The initial problem was that "myQuery.dateCreated" has a time value associated with it, as does the value of now(). This meant that where I should have had (or expected to have) a value of "1" if date2 was the next day, I wasn't because the times were being calculated and both dates where within a 24-hour range. Makes sense.

My first simple fix (which was [what I tried before](http://www.chapter31.com/2007/10/05/createodbcdate-returns-time-as-well/)) was to add a _createODBCDate()_ around my dates. 

This doesn't work though, indeed when you ouput the results of createODBCDate() it looks as though you have a date object with no time but you really DO have a time...you just can't see it :(

2 ways around this both involve stripping out the time part...using createDate() which is a bit unwieldy:

``` javascript
<cfscript>
	date1 = createDate(year(now()), month(now()), day(now()));
</cfscript>
```

Or using dateFormat():

``` javascript
<cfscript>
	date1 = dateFormat(now(), "yyyy/mmm/dd");
</cfscript>
```

So another note to self...whenever you want to do any sort of date comparisons watch out for the "time" values unless of course you want the times as part of your comparison!


