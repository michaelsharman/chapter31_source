---
comments: true
date: 2007-02-04 06:45:38
layout: post
slug: cfqueryparam-and-conditional-handling-of-nulls
title: cfqueryparam and conditional handling of NULL's
wordpress_id: 100
categories:
- ColdFusion
---

Most people know that you should always use [cfqueryparam](http://livedocs.macromedia.com/coldfusion/6.1/htmldocs/tags-b20.htm) on your query parameters when querying a database to (among other things):
	
  * secure your database from unauthorised/malicious users
  * perform data validation
  * take advantage of SQL bind parameters

The cfqueryparam tag can and should be used whether the query be a SELECT, UPDATE, DELETE or INSERT.

One of the problems I've had in the past is when I want to either INSERT or UPDATE a column which has an INT datatype (MSSQL), but that column is not mandatory and therefore allows NULL values. Traditionally (if not using a stored procedure) I would have an approach as follows:

``` ruby
<cfquery name="qAddUser" datasource="#application.dsn#">
	INSERT INTO MyUsers
	(
	Age,
	FirstName,
	LastName
	)
	VALUES
	(
	<cfqueryparam cfsqltype="cf_sql_integer" value="#trim(form.iAge)#" maxlength="3" />,
	<cfqueryparam cfsqltype="cf_sql_varchar" value="#trim(form.sFirstName)#" maxlength="50" />,
	<cfqueryparam cfsqltype="cf_sql_varchar" value="#trim(form.sLastName)#" maxlength="50" />
	)
</cfquery>
```

This works nicely except remember that 'Age' isn't a mandatory column in the database, so if the user leaves that form field blank I'll be passing through an empty string (form.iAge) to the cfqueryparam. Because the database is expecting an INT value it really won't like my empty string so I'll get a nice big error. Now to get around this I have a couple of immediate options.
	
  * use a database default (e.g. 0)
  * Use conditional logic to set the empty string to an INT, like 0
  * Use conditional logic to use the NULL attribute of cfqueryparam

Number 3 is my preferred option, I don't want the value '0' in the database when I don't know if it's really a valid value. Did the user type in '0' or is it my default database value? Sure I could use something like '-1' instead or code my application to know that if a '0' (or '-1') was found then I know that it's actually a NULL value. But that just seems messy to me.

The NULL attribute of cfqueryparam can take a value of 'yes|true' or 'no|false' and if set to 'yes|true' then anything in the 'value' attribute is ignored and a NULL is passed to the database. This is what we want! Unfortunately though if I do use null="yes" and I also have a 'value', then that value will be ignored and NULL will be used instead. To get around this I need to do something like:

``` ruby
<cfif NOT len(trim(form.iAge))>
	<cfqueryparam cfsqltype="cf_sql_integer" value="#trim(form.iAge)#" maxlength="3" null="yes" />
<cfelse>
	<cfqueryparam cfsqltype="cf_sql_integer" value="#trim(form.iAge)#" maxlength="3" />
</cfif>
```

That would work but it's not really that neat or optimal (in terms of coding and reading). 

As usual it's always the simple solutions which are right in front of you that work the best! Today I saw a nice solution to this all too common problem from Ian Skinner over on [Google groups](http://groups.google.com/group/macromedia.coldfusion.cfml_general_discussion/topics) where Ian used the yesNoFormat() and len() functions to conditionally pass in null or a value like:

``` ruby
<cfqueryparam cfsqltype="cf_sql_integer" value="#trim(form.iAge)#" maxlength="3" null="#yesNoFormat(NOT len(trim(form.iAge)))#" />
```

This is nice an simple, the len() function will return the length of the string (0 or more) and the yesNoFormat() will translate that into the boolean value we need for the NULL attribute.

However because we want to use the NULL attribute if the string DOESN'T have a length...we use the NOT boolean operator to reverse the results.

Note that because we are using NOT, our result will be the desired boolean therefore negating the need to use yesNoFormat(). That leaves us with:

``` ruby
<cfqueryparam cfsqltype="cf_sql_integer" value="#trim(form.iAge)#" maxlength="3" null="#NOT len(trim(form.iAge))#" />
```

Nice and clean :)
