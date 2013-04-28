---
comments: true
date: 2011-03-03 23:22:53
layout: post
slug: mysql-alternative-to-mssqls-isnull
title: 'MySQL alternative to MSSQL''s isNull() '
wordpress_id: 892
categories:
- Databases
---

I was looking for a way to do isNull() in MySQL the other day, for those that don't know this means you can do something like:

``` javascript
SELECT isNull(mycolumn, 'blah') FROM myTable;
```

If the value in _mycolumn_ is NULL, then 'blah' is returned, this can of course be any string literal/numeric value you want. MySQL doesn't have isNull() but it does have [ifNull()](http://dev.mysql.com/doc/refman/5.0/en/control-flow-functions.html#function_ifnull) which is basically the same.

``` javascript
SELECT ifNull(mycolumn, 'blah') FROM myTable;
```
