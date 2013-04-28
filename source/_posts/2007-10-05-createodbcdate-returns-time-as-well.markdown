---
comments: true
date: 2007-10-05 05:30:28
layout: post
slug: createodbcdate-returns-time-as-well
title: createODBCDate() returns 'time' as well?
wordpress_id: 147
categories:
- ColdFusion
---

Recently I was just comparing 2 dates (one from a query and the other was now()) using the [createODBCDate()](http://livedocs.adobe.com/coldfusion/8/htmldocs/help.html?content=functions_c-d_19.html#1102341) and [dateCompare()](http://livedocs.adobe.com/coldfusion/8/htmldocs/help.html?content=functions_c-d_26.html) functions. 

I was using the createODBCDate() function because I only wanted the 'date' part of a date object, not the 'time'. More than likely I should have been using [dateFormat()](http://livedocs.adobe.com/coldfusion/8/htmldocs/help.html?content=functions-pt0_05.html#1098968), but that's another story :)

I had the following:

``` javascript
<cfif dateCompare(createODBCDate(q.DateTimeCreated), createODBCDate(now())) EQ 0>
```

The problem was I kept getting -1 returned, meaning that 'q.DateTimeCreated' was less than 'now()'. As 'q.DateTimeCreated' was technically created before 'now()' (same day but an earlier 'time') it **is** actually _less than_, but I only wanted to compare the date...not the time. When I dumped both date objects I got:

``` javascript
{d '2007-10-05'}
{d '2007-10-05'}
```

Looks the same to me...

I _think_ that those date objects actually have the 'time' in them as well, they're just not being displayed on cfdump or cfoutput. This seems strange especially considering there is a createODBCDateTime() function as well.

My fix was to do what I probably should have done in the first place; use dateFormat()

``` javascript
<cfif dateCompare(dateFormat(q.DateTimeCreated), dateFormat(now())) EQ 0>
```

That did the trick!

Now the only thing bothering me is whether the createODBCDate() function actually _does_ return the 'time' as well...or was something else the culprit?
