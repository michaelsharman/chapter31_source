---
comments: true
date: 2006-07-26 05:32:10
layout: post
slug: truncating-mssql-transaction-log
title: Truncating MSSQL transaction log
wordpress_id: 32
categories:
- Databases
---

Every wanted to truncate the transaction log of a MS SQL database? We do that all the time when moving a database from one server to the other. Remember that the transaction log can take up a LOT of space in the backup file which you don't need when you are simply moving a database to a new server (and when you don't have the option to simply DTS).

Open up Query Analyser and run the following, substituting real database, file and log names.

I'm using these names in the example:  
Database name: [myDatabase]  
Data file: [myDatabase_Data]  
Log file: [myDatabase_Log]
    
``` sql
Use Master
go

Backup Log [myDatabase] with truncate_only
go

Use [myDatabase]
go

DBCC shrinkfile ([myDatabase_Log], 2)
go

-- data
Use Master
go

Backup Log [myDatabase] with truncate_only
go

Use [myDatabase]
go

DBCC shrinkfile ([myDatabase_Data], 1)
go

-- Get fileid
use [myDatabase]
go

select * from sysfiles
```
