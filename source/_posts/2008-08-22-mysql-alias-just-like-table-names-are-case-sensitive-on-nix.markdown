---
comments: true
date: 2008-08-22 03:00:47
layout: post
slug: mysql-alias-just-like-table-names-are-case-sensitive-on-nix
title: MySQL aliases (just like table names) are case sensitive on *nix
wordpress_id: 377
categories:
- Databases
---

As you might know when using MySQL on a case-sensitive OS (like Linux) you must reference your table names in a case sensitive manner. So if you have a table called _products_ the following sample query will NOT work:

``` javascript
SELECT	productId
FROM	Products
```

It won't work because MySQL stores the table information in directories on the file system, therefore these directories are case sensitive. So your query must be as follows (note the lower case _products_):

``` javascript
SELECT	productId
FROM	products
```

That's all good and well, but did you know that using table aliases are also case sensitive? I found this out the other day when debugging an issue with some existing code and confirmed on the MySQL site that "_By default, table aliases are case sensitive on Unix, but not so on Windows or Mac OSX_". 

So the following query will fail because the alias used in the WHERE clause is different from the one used in the FROM definition:

``` javascript
SELECT	productId
FROM	products AS p
WHERE	P.productId > 1000
```

> Although database and table names are not case sensitive on some platforms, you should not refer to a given database or table using different cases within the same statement. The following statement would not work because it refers to a table both as my_table and as MY_TABLE:
>
> mysql> SELECT * FROM my_table WHERE MY_TABLE.col=1;

If your interested you can read more on MySQL [identifier case sensitivity here](http://dev.mysql.com/doc/refman/5.0/en/identifier-case-sensitivity.html).
