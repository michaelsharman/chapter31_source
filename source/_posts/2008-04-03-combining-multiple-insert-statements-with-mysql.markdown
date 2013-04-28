---
comments: true
date: 2008-04-03 12:24:26
layout: post
slug: combining-multiple-insert-statements-with-mysql
title: Combining multiple INSERT statements with MySQL
wordpress_id: 219
categories:
- ColdFusion
- Databases
---

As all developers know, one of the most common bottlenecks in a web application is the database. Database optimisation is therefore a huge part of building a streamlined application capable of handling more concurrent users.

Often you might have the need to perform multiple INSERT's against a database from a single user form submission.

Let's say you had a form allowing a user to add their own web bookmarks (think a simple [del.icio.us](http://del.icio.us/)). To make things easier for the user they can add multiple 'bookmarks' at a time.

[![multiple_entry_form](http://www.chapter31.com/wp-content/uploads/2008/04/multiple_entry_form-300x101.jpg)](http://www.chapter31.com/wp-content/uploads/2008/04/multiple_entry_form.jpg)

For the sake of our argument when a user submits this form we transform the data into an array of structures (but it can really be anything you can loop over) so that each bookmark _row_ from the form is an element of the array.

[![Structure](http://www.chapter31.com/wp-content/uploads/2008/04/multi_insert_struct.gif)](http://www.chapter31.com/wp-content/uploads/2008/04/multi_insert_struct.gif)

Normally you might INSERT the data with something like the following:

``` javascript
<cfloop from="1" to="#arrayLen(aBookmarks)#" index="i">
	<cfquery name="qAddBookmarks" datasource="#getDSN()#">
		INSERT INTO	Bookmarks
			(
				BookmarkId
				, URL
				, Title
				, Description
			)
		VALUES
			(						
				<cfqueryparam cfsqltype="cf_sql_varchar" value="#createUUID()#" />
				, <cfqueryparam cfsqltype="cf_sql_varchar" value="#aBookmarks[i]['URL']#" />
				, <cfqueryparam cfsqltype="cf_sql_varchar" value="#aBookmarks[i]['Title']#" />
				, <cfqueryparam cfsqltype="cf_sql_varchar" value="#aBookmarks[i]['Description']#" />		
			)
	</cfquery>
</cfloop>
```

While this works fine it certainly isn't the best option because it sends multiple requests (INSERT's) to the database. So if the array count is 4, MySQL will process 4 separate INSERT statements which really isn't optimal.

Fortunately MySQL gives you a super cool way of handling these types of [INSERT](http://dev.mysql.com/doc/refman/5.0/en/insert.html) situations:

``` javascript
<cfquery name="qAddBookmarks" datasource="#getDSN()#">
	INSERT INTO	Bookmarks
		(
			BookmarkId
			, URL
			, Title
			, Description
		)
	VALUES
		<cfloop from="1" to="#arrayLen(aBookmarks)#" index="i">
			(						
				<cfqueryparam cfsqltype="cf_sql_varchar" value="#createUUID()#" />
				, <cfqueryparam cfsqltype="cf_sql_varchar" value="#aBookmarks[i]['URL']#" />
				, <cfqueryparam cfsqltype="cf_sql_varchar" value="#aBookmarks[i]['Title']#" />
				, <cfqueryparam cfsqltype="cf_sql_varchar" value="#aBookmarks[i]['Description']#" />		
			)<cfif i LT arrayLen(aBookmarks)>,</cfif>				
		</cfloop>
</cfquery>
```

It's quite simple, we have 1 <cfquery> tag, but we loop over the _VALUES_ part of the DML statement. The best thing about this is that MySQL only processes 1 INSERT statement! That's a huge performance increase particularly in a high traffic environment.

The only real thing to note is that each VALUES block must be in parenthesis (as normal) and must be comma separated (except the last block). To handle this we just look to see if we are at the final array index. If not then add a comma.

``` javascript
<cfif i LT arrayLen(aBookmarks)>,</cfif>
```

The more I use MySQL the more I'm impressed with it. I'm not sure if you can do this in other database engines though.
