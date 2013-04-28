---
comments: true
date: 2006-03-11 06:49:03
layout: post
slug: new-attribute-and-object-variable-in-for-cfmx7
title: New attribute and object variable in <cfquery> for CFMX7
wordpress_id: 3
categories:
- ColdFusion
---

Ever wanted to output the actual SQL from a dynamic query you are debugging? With CFMX 7 you can do it!

There is a new attribute in the tag called “result” which specifies a name for the structure in which cfquery returns the result variables.

Then you can reference #result_name.sql# to output the actual SQL statement to the page.

Syntax

``` javascript
<cfquery name = "query_name">
    dataSource = "ds_name"  
    dbtype = "query"  
    username = "username"  
    password = "password"  
    maxRows = "number"  
    blockFactor = "blocksize"  
    timeout = "seconds"  
    cachedAfter = "date"  
    cachedWithin = "timespan"  
    Either of the following:  
    debug = "yes" or "no"  
    or:  
    debugresult = "result_name">

</cfquery>
```

Variable name  Description  

* query_name.currentRow Current row of query that cfoutput is processing.
* query_name.columnList Comma-delimited list of the query columns.
* query_name.RecordCount Number of records (rows) returned from the query.
* result_name.sql The SQL statement that was executed.
* result_name.recordcount Number of records (rows) returned from the query.
* result_name.cached True if the query was cached; False otherwise.
* result_name.sqlparameters An ordered Array of cfqueryparam values.
* result_name.columnList Comma-delimited list of the query columns.
* result_name.ExecutionTime Cumulative time required to process the query.

There are more cool things you can do with this attribute including execution time and sqlparameters.

See the [Live docs](http://livedocs.macromedia.com/coldfusion/7/htmldocs/wwhelp/wwhimpl/common/html/wwhelp.htm?context=ColdFusion_Documentation&file=00000316.htm) for more info
