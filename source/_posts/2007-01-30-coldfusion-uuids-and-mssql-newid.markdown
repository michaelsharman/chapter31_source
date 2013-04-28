---
comments: true
date: 2007-01-30 00:25:38
layout: post
slug: coldfusion-uuids-and-mssql-newid
title: ColdFusion UUID and MSSQL newID()
wordpress_id: 98
categories:
- ColdFusion
- Databases
---

A lot of web applications these days use a UUID as the primary key instead of the int/identity combination (speaking for MSSQL that is). 

Now there is a (valid) argument that UUID's aren't great for primary keys due to the fact that primary keys are clustered, meaning that integers would work much better if the table had a large amount of data. This may not effect you dramatically as you'd would most likely only see performance degradation once the database had a substantial amount of data.

Anyway, creating a UUID is often handled by the createUUID() function in ColdFusion which produces a 35 character string in the format of:

> xxxxxxxx-xxxx-xxxx-xxxxxxxxxxxxxxxx (8-4-4-16)

However you can also generate a unique id at the database level which is a slightly different format to ColdFusions UUID. The Microsoft/DCE standard uses the following:

> xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx (8-4-4-4-12)

Lots of developers prefer to let the database handle the creation of primary keys instead of the application (ColdFusion). Having the database create this can be done using the MSSQL _newID()_ built in function. Note that this will produce a 36 character string, 1 more than ColdFusions createUUID(). You have the option to use something like char(36) or varchar(36) as the column datatype, but you could also use the _uniqueidentifier_ datatype.

This can cause a few incompatibility problems if you are expecting the ColdFusion standard in your code. So to maintain consistency and possibly prevent database/code errors you can simply convert the database level _newID()_ to the ColdFusion UUID by removing the last (4th) hyphen in the SQL.

   
``` ruby
select left(newid(), 23) + right(newid(),12) as objectid
```

or in the middle of a query:
    
``` ruby
INSERT INTO myTable (ID, FirstName)
VALUES (left(newid(), 23) + right(newid(),12), "Michael")
```

In the situation where you might want to convert a ColdFusion created UUID to conform to the Microsoft standard, you can use the CreateGUID() function (by Nathan Dintenfass) from [cflib](http://cflib.org/) as follows:
    
``` ruby
function CreateGUID()
{
	return insert("-", CreateUUID(), 23);
}
```

UUID's for database keys can be very handy but just watch out how and where you are creating them and how they fit into your application. Remember that if you did an 

``` ruby
IsValid("uuid", myNewID)
```

where myNewID was created by newID() in the database...your test would fail!
