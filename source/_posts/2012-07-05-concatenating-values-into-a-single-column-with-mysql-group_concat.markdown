---
comments: true
date: 2012-07-05 21:15
layout: post
slug: concatenating-values-into-a-single-column-with-mysql-group_concat
title: "Concatenating values into a single column with MySQL group_concat"
wordpress_id: 1126
categories:
- Databases
---

How many times have you wanted to return a list of grouped values from a database, in a single column, per row of your recordset? Actually I've wanted to do that a few times! Most of the time I'll let the application layer handle that, but sometimes letting the database do the hard work fits the bill.

My not-so-theoretical example is _course subjects_ (think English, Maths etc) that have 1-_n_ "stages" (think categories) attached to them. If I want to return a recordset of all courses, with the attached stages, I might write a query like this:

``` sql
SELECT sy.title as course, st.stage
FROM syllabus sy INNER JOIN syllabus_stages sy_st
ON sy.id = sy_st.syllabus_id
INNER JOIN stages st
ON sy_st.stage_id = st.id
GROUP BY sy.title, stage
ORDER BY sy.title
```

Looks pretty standard, with something like that I'd get the following:

![](/images/uploads/2012/07/Screen-shot-2012-07-06-at-6.50.45-AM.png)

But now the application has to handle the grouping, not a huge problem by any means. Also don't get me wrong...this is where you normally would want to do this (sql is a data retrieval language and in most instances shouldn't be handling presentation aspects). However, if I just wanted to display a list of stages (categories), I can use [group_concat](http://dev.mysql.com/doc/refman/5.0/en/group-by-functions.html#function_group-concat) to make life a little easier.

``` sql
SELECT sy.title as course, group_concat(st.stage ORDER BY st.stage) as stage
FROM syllabus sy INNER JOIN syllabus_stages sy_st
ON sy.id = sy_st.syllabus_id
INNER JOIN stages st
ON sy_st.stage_id = st.id
GROUP BY sy.title
ORDER BY sy.title
```

This gives me:

![](/images/uploads/2012/07/Screen-shot-2012-07-06-at-6.53.14-AM.png)

Pretty cool eh?

The default list separator is a comma, but you can also specify your own.

``` sql
SELECT sy.title as course, group_concat(st.stage ORDER BY st.stage SEPARATOR ' | ') as stage
FROM syllabus sy INNER JOIN syllabus_stages sy_st
ON sy.id = sy_st.syllabus_id
INNER JOIN stages st
ON sy_st.stage_id = st.id
GROUP BY sy.title
ORDER BY sy.title
```

![](/images/uploads/2012/07/Screen-shot-2012-07-06-at-7.12.02-AM.png)

[See the group_concat page](http://dev.mysql.com/doc/refman/5.0/en/group-by-functions.html#function_group-concat) for more details.

## Update 10th August 2013
I just ran into a restriction with this, by default the results are truncated to the maximum length that is given by the ```group_concat_max_len``` system variable, which has a default value of 1024.

If you plan to concat a lot of data, I suggest using a different approach.
