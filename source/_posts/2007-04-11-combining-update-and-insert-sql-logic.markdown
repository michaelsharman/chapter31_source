---
comments: true
date: 2007-04-11 06:40:48
layout: post
slug: combining-update-and-insert-sql-logic
title: Combining insert and update SQL logic
wordpress_id: 112
categories:
- ColdFusion
- Databases
---

***Note** that this example is using MSSQL with an Identity set to generate the primary key automatically.

An all too common process developers go through when building database driven web applications is creating logic to INSERT a record when one doesn't exist, and UPDATE a record when one does exist.

This often leads to conditional logic within your application (inside a Service layer perhaps) and then running one of 2 SQL statements depending on the existance of a primary key value which may be coming from a form or URL. 

You would more than likely have separate methods for INSERTING and UPDATING, but for the sake of simplicity these will be together:
``` javascript
<cfif len(form.myPrimaryKey)>

	<!--- there is a primary key meaning a record exists, UPDATE --->
	<cfquery name="qSetData" datasource="dsn">
		UPDATE	myTable
		SET		field1 = '#trim(form.field1)#'
				, field2 = '#trim(form.field1)#'
		WHERE	myPrimaryKey = #form.myPrimaryKey#
	</cfquery>

<cfelse>
	
<!--- there is no primary key meaning a record doesn't exists, INSERT a new row --->
	<cfquery name="qCreateData" datasource="dsn">
		INSERT INTO	myTable	(field1, field2)
		VALUES				('#trim(form.field1)#', '#trim(form.field1)#')
	</cfquery>

</cfif>
```

That's it, this approach is a nice way to start examining you DAO's.

Another way to achieve this is by using a stored procedure (there are many, many positive reasons for using a stored procedure. See [here](http://www.chapter31.com/2006/03/16/cfstoredproc-vs-cfquery/) and [here](http://www.chapter31.com/2007/02/04/cfqueryparam-and-conditional-handling-of-nulls/) for more information).

Using a stored procedure can be cleaner as you just need the one piece of code in your application leaving the rest of the logic to be handled in the database.

The following example is for scenarios where you **don't** pass a primary key value, the <cfprocparam> will pass null="true" to the stored procedure. This is how the SQL will know to run an INSERT statement.

``` javascript
<cfscript>
	//as there is no value here an INSERT statement will be run
	myPrimaryKey = "";
	firstName = "Michael";
	lastName = "Sharman";
	email = "michael@wherever.com";
	age = "31";
</cfscript>

<cfstoredproc datasource="dsn" procedure="setUser">
	<cfprocparam cfsqltype="CF_SQL_INTEGER" null="#NOT len(trim(myPrimaryKey))#" value="#myPrimaryKey#" />
	<cfprocparam cfsqltype="CF_SQL_VARCHAR" null="false" value="#firstName#" />
	<cfprocparam cfsqltype="CF_SQL_VARCHAR" null="false" value="#lastName#" />
	<cfprocparam cfsqltype="CF_SQL_VARCHAR" null="false" value="#email#" />		
	<cfprocparam cfsqltype="CF_SQL_INTEGER" null="#age#" value="#age#" />
</cfstoredproc>
```

On the other hand if I have a primary key value, the <cfprocparam> will pass the value (with null="false") and my stored procedure will run an UPDATE.

``` javascript
<cfscript>
	//as there is a value here an UPDATE statement will be run
	myPrimaryKey = "13";
	firstName = "Michael";
	lastName = "Sharman";
	email = "michael@wherever.com";
	age = "31";
</cfscript>

<cfstoredproc datasource="dsn" procedure="setUser">
	<cfprocparam cfsqltype="CF_SQL_INTEGER" null="#NOT len(trim(myPrimaryKey))#" value="#myPrimaryKey#" />
	<cfprocparam cfsqltype="CF_SQL_VARCHAR" null="false" value="#firstName#" />
	<cfprocparam cfsqltype="CF_SQL_VARCHAR" null="false" value="#lastName#" />
	<cfprocparam cfsqltype="CF_SQL_VARCHAR" null="false" value="#email#" />		
	<cfprocparam cfsqltype="CF_SQL_INTEGER" null="#age#" value="#age#" />
</cfstoredproc>
```

You can see that the only change was that in the second example _myPrimaryKey_ actually had a value.

And now for the simple stored procedure. Note I'm setting a default value of **null** for the @myPrimaryKey parameter, this is how the stored procedure can handle both scenarios. You can of course set default values for all of your parameters.

``` javascript
CREATE PROCEDURE setUser
(
@myPrimaryKey int = null
,@firstName varchar(50)
,@lastName varchar(50)
,@email varchar(50)
, @age int
)
AS

IF (@myPrimaryKey Is Null)
BEGIN
	--no record exists so run an INSERT statement
	INSERT INTO	myTable(FirstName, LastName, Email, Age)
	VALUES		(@firstName, @lastName, @email, @age)
END
ELSE
BEGIN
	--we have a record, run an UPDATE
	UPDATE	myTable
	SET		firstName = @firstName
			, lastName = @lastName
			, email = @email
			, age = @age
	WHERE	myPrimaryKey = @myPrimaryKey
END
GO
```

