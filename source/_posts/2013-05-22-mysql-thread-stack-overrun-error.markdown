---
layout: post
title: "MySQL thread_stack overrun error"
date: 2013-05-22 16:28
comments: true
categories:
- mysql
---
We added a trigger to MySQL (v5.5.28) recently that was a simple UPDATE on table column, when a target table was UPDATEd. It ran fine (as expected) on our development environment but not when we pushed the changes to staging.

The error being thrown by MySQL was:

```bash
Thread stack overrun:  8304 bytes used of a 131072 byte stack, and 128000 bytes needed.  Use 'mysqld --thread_stack=#' to specify a bigger stack.
```

Querying the database told me that the current _thread_stack_ setting is 128K:

```bash
mysql> show variables where `Variable_name` = 'thread_stack';
+---------------+--------+
| Variable_name | Value  |
+---------------+--------+
| thread_stack  | 131072 |
+---------------+--------+
1 row in set (0.00 sec)
```

This was confirmed by looking at the _thread_stack_ variable in /etc/mysql/my.cnf

```bash
thread_stack = 128K
```

The [docs for MySQL 5.5](http://dev.mysql.com/doc/refman/5.5/en/server-system-variables.html#sysvar_thread_stack) suggest that it should be 192K for 32-bit systems and 256K for 64-bit systems. We're running a 64-bit platform, you can tell by running:

```bash
[me@mydbserver ~]$ uname -m
x86_64
```

If the response is _i686_, you have a 32-bit version of Linux and if the response is _x86_64_ then you have a 64-bit version of Linux.

The fix is a simple case of increasing the value to 256K (if you're on 64-bit) or 192K if you're on 32-bit, as per the documentation. Don't forget that the thread_stack is an allocation of memory per connection, so don't set it too high or you might run into memory issues on your database server.

In case it wasn't clear, you can make this change in your _my.cnf_ file.
