---
comments: true
date: 2011-02-08 06:47:18
layout: post
slug: sql-for-finding-duplicate-values
title: SQL for finding duplicate values
wordpress_id: 883
categories:
- Databases
---

Quick post to remind me how to check a table column for duplicate values next time I'm looking for it (when my memory fails!)

``` javascript
SELECT id, count(id) 
FROM mytable
GROUP BY id
HAVING count(id) > 1
```
