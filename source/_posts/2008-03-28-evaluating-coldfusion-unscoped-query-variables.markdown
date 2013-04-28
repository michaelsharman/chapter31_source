---
comments: true
date: 2008-03-28 01:29:24
layout: post
slug: evaluating-coldfusion-unscoped-query-variables
title: Evaluating (ColdFusion) unscoped query variables
wordpress_id: 218
categories:
- ColdFusion
---

Most developers know that if you reference a variable without a scope prefix (such as variables, form, URL etc) ColdFusion will check _each_ of the available scopes until it finds a variable of the name you are looking for.

The [order in which ColdFusion checks](http://livedocs.adobe.com/coldfusion/8/htmldocs/help.html?content=Variables_32.html) is:
	
  1. Function local (UDFs and CFCs only)
  2. Thread local (inside threads only)
  3. Arguments
  4. Variables (local scope)
  5. Thread
  6. CGI
  7. Cffile
  8. URL
  9. Form
  10. Cookie
  11. Client

_*** Note:** Although the order above came from the Adobe docs I'm not sure about "cffile". It doesn't seem like a scope, more like a return variable much like cfquery. But see below for that_ :)

Of course this means if you are trying to output #myVar#, and that variable exists in the URL as well as the form scope then #URL.myVar# is what ColdFusion will evaluate. This might not be what you want however, leading to frustrating inconsistencies. 

Another downside of not scoping your variables is performance, why make ColdFusion look behind each door (scope) for a variable? Most times you will know exactly where the variable is, so you can improve things by clearly specifying which scope you are using.

But what about query variables either in <cfoutput query=""> or <cfloop query="">? 

"Query" isn't a scope as such but can still be effected by the order of evaluation if you have variable naming conflicts with columns from your query. 

How often do you prefix your recordset variables with the query name? I bet most developers out there don't prefix their query variables, instead take the easy way out with something like:

``` javascript
<cfloop query="myQuery">
	#firstName#
	#lastName#
	#email#
</cfloop>
```

Most of the time this will be fine, but what if this loop was in a function which also had an argument called "firstName"? Enter a naming conflict leading to dirty data.

I came across a similar situation today (because I didn't prefix my query variables!) and found that my query was only outputting the value of the argument (which had the same name as one of my query columns), not the actual query value.

Prefixing the variables with the query name of course will fix up any conflicting issues:

``` javascript
<cfloop query="myQuery">
	#myQuery.firstName#
	#myQuery.lastName#
	#myQuery.email#
</cfloop>
```

Although it can be convenient to take advantage of not scoping your variables, it's really a "best practice" to scope everything unless you have a reason not to. 

Don't forget the performance (and internal documenting for all developers) benefits which comes as well, although admittedly you would probably only notice any degradation at very high traffic levels. But that's what we should be aiming for right? :)
