---
comments: true
date: 2007-12-08 05:26:11
layout: post
slug: search-and-replace-using-reg-exp
title: Search and replace using reg exp
wordpress_id: 175
categories:
- ColdFusion
---

The other day [Nathan Strutz](http://www.dopefly.com/) wrote a great [post](http://www.dopefly.com/techblog/entry.cfm?entry=222) on finding and replacing text in your IDE (in my case I'm using Aptana/cfeclipse) using regular expressions.

This is more a reminder to me so that I try to use it (with the idea that it'll become 2nd nature!), but I also had a play to see how I could use it in day to day coding. I'm sure others have more interesting uses, but here is where I can use it immediately:

**Setting variables (using cfml rather than cfscript)**

Often you have the need to set a large number of variables, I would actually use a <cfscript> block for this, but if I wanted to use <cfset> with the end result being something like:

``` javascript
<cfset count = 0 />
<cfset i = 1 />
<cfset j = 1 />
```

I'll need a reg exp, text to replace my matched content and initial code to search.

The reg exp
```
^(.+) (.+)$
```

Note that I'm using 2 'groups' separated by a space, this will be important when looking at the actual text to search on.

The 'replace' text to use

``` javascript
<cfset $1 = $2 />
```

The initial source code which I'll search on

``` javascript
count 0
i 1
j i
```

Note that as  have 2 'groups' separated by a space, the end result would be

``` javascript
<cfset count = 0 />
<cfset i = 1 />
<cfset j = 1 />
```

Nice :) You can use (I believe) as many 'groups' as you want, here is an example which uses 3 for &lt;cfparam&gt;

The reg exp
``` javascript
^(.+) (.+) (.+)$
```

The 'replace' text to use

``` javascript
<cfparam name="$1" default=$2 type="$3" />
```

The initial source code

``` javascript
form.firstName "" string
form.lastName "" string
form.email "" email
form.postalcode "90210" numeric
```

The end result

``` javascript
<cfparam name="form.firstName" default="" type="string" />
<cfparam name="form.lastName" default="" type="string" />
<cfparam name="form.email" default="" type="email" />
<cfparam name="form.postalcode" default="90210" type="numeric" />
```

As I said, I'm sure there are much better ways to achieve this as I suck at regular expressions. Anyone have any more uses?
