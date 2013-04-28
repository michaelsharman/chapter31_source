---
comments: true
date: 2008-02-26 04:16:49
layout: post
slug: code-tip-how-to-structure-your-queryparams
title: 'Code Tip: How to structure your queryparams'
wordpress_id: 192
categories:
- ColdFusion
---

If I were a betting man I'd bet a LOT of money (and perhaps even the house!) that you've done this before.

Try to spot the error in the query below:

``` javascript
<cfquery name="qCreate" datasource="#getDSN()#">
	INSERT INTO	myTable
		(
			ObjectId,
			Country,
			DateOfBirth,
			Email,
			FirstName,
			Gender,
			LastName,
			MainSchoolId,
			PhoneHome,
			PhoneMobile,
			PostCode,
			State,
			Street,
			StudentId,
			StudentPassword,
			StudentPodId,
			Suburb
		)
	VALUES
		(
			<cfqueryparam cfsqltype="cf_sql_varchar" value="#createUUID()#" />,
			<cfqueryparam cfsqltype="cf_sql_varchar" value="#arguments.oUser.get('country')#" />,
			<cfqueryparam cfsqltype="cf_sql_date" value="#createODBCDate(arguments.oUser.get('dateOfBirth'))#" />,
			<cfqueryparam cfsqltype="cf_sql_varchar" value="#arguments.oUser.get('email')#" />,
			<cfqueryparam cfsqltype="cf_sql_varchar" value="#arguments.oUser.get('firstName')#" />,
			<cfqueryparam cfsqltype="cf_sql_varchar" value="#arguments.oUser.get('gender')#" />,
			<cfqueryparam cfsqltype="cf_sql_varchar" value="#arguments.oUser.get('lastName')#" />
			<cfqueryparam cfsqltype="cf_sql_integer" value="#arguments.oUser.get('mainSchoolId')#" />,
			<cfqueryparam cfsqltype="cf_sql_varchar" value="#arguments.oUser.get('phoneHome')#" />,
			<cfqueryparam cfsqltype="cf_sql_varchar" value="#arguments.oUser.get('phoneMobile')#" />,
			<cfqueryparam cfsqltype="cf_sql_varchar" value="#arguments.oUser.get('postCode')#" />,
			<cfqueryparam cfsqltype="cf_sql_varchar" value="#arguments.oUser.get('state')#" />,
			<cfqueryparam cfsqltype="cf_sql_varchar" value="#arguments.oUser.get('street')#" />,
			<cfqueryparam cfsqltype="cf_sql_integer" value="#arguments.oUser.getStudentId()#" />,
			<cfqueryparam cfsqltype="cf_sql_varchar" value="#hash(arguments.oUser.get('studentPassword'))#" />,
			<cfqueryparam cfsqltype="cf_sql_varchar" value="#createUUID()#" />,
			<cfqueryparam cfsqltype="cf_sql_varchar" value="#arguments.oUser.get('suburb')#" />
		)			
</cfquery>
```

Spot it? It's one of those "Where's Wally" errors where some people spot it straight away and some people (like me today) spend FAR too long searching for what went wrong. 

Ok...if you haven't spotted it there is a missing comma in the SQL (after the 7th argument 'lastName').

Even though in hindsight the error returned from MySQL was telling me exactly what was wrong:



> "You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'MainSchoolId = 8459, PhoneHome = '', PhoneMobile = '', Post' at line 9"



Still took me longer than 5 minutes to debug. So...

A new rule for me is going back to what I used to do all the time for this exact reason (no idea why I didn't in this case).

Putting the comma at the START of any argument like this:

``` javascript
<cfqueryparam cfsqltype="cf_sql_varchar" value="#createUUID()#" />
, <cfqueryparam cfsqltype="cf_sql_varchar" value="#arguments.oUser.get('country')#" />
, <cfqueryparam cfsqltype="cf_sql_date" value="#createODBCDate(arguments.oUser.get('dateOfBirth'))#" />
, <cfqueryparam cfsqltype="cf_sql_varchar" value="#arguments.oUser.get('email')#" />
, <cfqueryparam cfsqltype="cf_sql_varchar" value="#arguments.oUser.get('firstName')#" />
, <cfqueryparam cfsqltype="cf_sql_varchar" value="#arguments.oUser.get('gender')#" />
, <cfqueryparam cfsqltype="cf_sql_varchar" value="#arguments.oUser.get('lastName')#" />
, <cfqueryparam cfsqltype="cf_sql_integer" value="#arguments.oUser.get('mainSchoolId')#" />
, <cfqueryparam cfsqltype="cf_sql_varchar" value="#arguments.oUser.get('phoneHome')#" />
, <cfqueryparam cfsqltype="cf_sql_varchar" value="#arguments.oUser.get('phoneMobile')#" />
, <cfqueryparam cfsqltype="cf_sql_varchar" value="#arguments.oUser.get('postCode')#" />
, <cfqueryparam cfsqltype="cf_sql_varchar" value="#arguments.oUser.get('state')#" />
, <cfqueryparam cfsqltype="cf_sql_varchar" value="#arguments.oUser.get('street')#" />
, <cfqueryparam cfsqltype="cf_sql_integer" value="#arguments.oUser.getStudentId()#" />
, <cfqueryparam cfsqltype="cf_sql_varchar" value="#hash(arguments.oUser.get('studentPassword'))#" />
, <cfqueryparam cfsqltype="cf_sql_varchar" value="#createUUID()#" />
, <cfqueryparam cfsqltype="cf_sql_varchar" value="#arguments.oUser.get('suburb')#" />
```

Now it's EASY to spot this all too common syntax error, especially if you're copying and pasting from somewhere else :)
