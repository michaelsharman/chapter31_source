---
comments: true
date: 2006-03-15 23:51:57
layout: post
slug: cfstoredproc-in-mx7
title: new 'result' attribute in MX7 cfstoredproc
wordpress_id: 7
categories:
- ColdFusion
---

In CFMX7 Macromedia introduced a new (and optional) attribute to the cfstoredproc tag called "result" which specifies a name for the structure in which cfstoredproc returns the statusCode and ExecutionTime variables. If set, this value replaces cfstoredproc as the prefix to use when accessing those variables.

The result attribute provides a way for stored procedures that are called from multiple pages, possibly at the same time, to avoid overwriting the results of one call with another. If you set the result attribute to myResult, for example, you would access ExecutionTime as myResult.ExecutionTime. Otherwise, you would access it as cfstoredproc.ExecutionTime.

e.g. 

``` javascript
<cfstoredproc  
  procedure = "foo_proc"  
  dataSource = "myDSN"  
  returnCode = "myResultStats">  

    <cfprocresult name = "RS1" />  
</cfstoredproc>
```

instead of using #cfstoredproc.executionTime# you can use #myResultStats.executionTime#

[cfstoredproc Livedocs](http://livedocs.macromedia.com/coldfusion/7/htmldocs/wwhelp/wwhimpl/common/html/wwhelp.htm?context=ColdFusion_Documentation&file=00000338.htm)
