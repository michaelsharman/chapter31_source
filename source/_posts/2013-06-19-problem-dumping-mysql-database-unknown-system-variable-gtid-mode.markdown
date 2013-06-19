---
layout: post
title: "Problem dumping MySQL database - Unknown system variable 'GTID_MODE'"
date: 2013-06-19 12:01
comments: true
categories:
- mysql
---
I was trying to dump and restore a MySQL database today, but received the following error when I tried to dump:

```bash
mysqldump: Couldn't execute 'SELECT @@GTID_MODE': Unknown system variable 'GTID_MODE' (1193)
```

The MySQL version of the database I was trying to dump was 5.5.28 and the server I was trying to restore into was 5.6.10.

A quick google told me that the error was likely due to this mismatch in versions. From the [teamextension blog](http://blog.teamextension.com/mysqldump-couldnt-execute-select-gtid_mode-unknown-system-variable-gtid_mode-1193-1246):

    This error is in part due to the introduction of Global Transaction Identifiers (GTIDs) in MySQL 5.6.
    GTIDs make it simple to track and compare replication across a master-slave topology.

The solution is adding the following option to your dump statement:

```bash
--set-gtid-purged=OFF
```

In all, my statement was:

```bash
mysqldump -h[host] -u[user] --single-transaction --routines --triggers --set-gtid-purged=OFF --compatible=ansi [database] | mysql --h[host] -u[user]
```
