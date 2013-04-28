---
comments: true
date: 2012-03-15 04:42:39
layout: post
slug: error-restoring-mysql-database-when-using-btree-on-indexes
title: Error restoring MySQL database when USING BTREE on indexes
wordpress_id: 1034
categories:
- Databases
---

Occasionally when I'm restoring a database that was backed up from a different server than the one I'm restoring on I get an error along the lines of:

``` javascript
>[Error] Script lines: 5-17 -------------------------
 You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8' at line 11

 Warnings: ---> 
   W (1): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8' at line 11
```

Hmm, the docs suggest that BTREE is a valid index type for both MyISAM and InnoDB. So why is it barfing?

Well it turns out dumping the database from a newer version of MySQL than what you are restoring onto can be bad. In my case running status at the mysql prompt told me that my source database was running on _5.5.9_ but the destination version was _5.0.51a_.

Basically the issue seems to be that MySQL 5.0.x has issues with USING BTREE. So...just remove that from your sql and you'll be good to go. Alternatively you can use the --compatible option when running your mysqldump on the _newer server version_, something like:

``` javascript
mysqldump --compatible=ansi -h127.0.0.1 -umyuser -p mydatabase | gzip > mydatabase.sql.gz
```

The value of "compatible" can be ansi, mysql323, mysql40, postgresql, oracle, mssql, db2, maxdb, no_key_options, no_table_options, or no_field_options.

Nice
