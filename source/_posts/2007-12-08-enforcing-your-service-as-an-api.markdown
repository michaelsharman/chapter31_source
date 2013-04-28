---
comments: true
date: 2007-12-08 06:36:35
layout: post
slug: enforcing-your-service-as-an-api
title: Enforcing your Service as an API
wordpress_id: 177
categories:
- ColdFusion
---

A lot ColdFusion developers are moving (or already there) towards a more OOP style of development. They have an understanding of and use several techniques and design patterns when building applications, particularly when it relates to things such as MVC and n-tiered development.

A small part of this is grouping related files withing separate directories in you application. Take 'User' related files as an example where you'll probably need some kind of a business object (User.cfc), something to store business/application logic (service or manager) and typically some files to handle database access.

With that in mind most will recognise the following CFC types (as they pertain at least to the ColdFusion community):




	
  * Bean

	
  * Service (or manager)

	
  * Gateway

	
  * DAO



This is not to get into whether you should use 5:1 components for every different 'thing' in your application (the 5th might be a controller), or whether you should have a 'Gateway' AND a 'DAO' for data access. Instead I'm talking about how you might layout your files and control access to the methods contained within them.

A typical structure people use is the reverse domain naming (which can prevent naming conflicts with other similarly named files), so for me I might have the following:

/com/chapter31/myApp/user

The 'user' directory could hold the following cfc's:

	
  * User.cfc

	
  * UserService.cfc

	
  * UserGateway.cfc

	
  * UserDAO.cfc



How do I manage access to methods contained within the Gateway or DAO? Often you may not want developers being able to access the getUsers() method inside UserGateway.cfc directly. This might be for different reasons, typically there may be some business logic required or a bean which is to be returned instead of a query etc. Either way, developers shouldn't access these data access files directly.

A nice easy way to get around this is to make all 'public' methods inside the components you want to restrict access to, 'package', which means that they are only accessible from files which reside within the same directory (/user).

An example method within UserGateway.cfc might look like this:

``` javascript
<cffunction name="getUsers" output="false" access="package" returntype="query">
	
	//query the users table in your database below
	
</cffunction>
```

If you tried to access this method from outside the 'user' directory (say index.cfm within the webroot) you will get an error saying something like 

_"The package method 'getUsers' in component /user/UserGateway.cfc cannot be accessed from /index.cfm."_

This is because index.cfm does not reside within the 'user' directory and because the method's access modifier is set to 'package', access is restricted.

So how do we now get access to this method? 

A common approach is to have your Service act as an API to the other cfc's within the 'user' directory by setting the access modifier to 'public' inside your UserService.cfc. Now whenever you need to call Gateway or DAO methods, you need to go through UserService.cfc which will hold your business logic and application rules etc.

This is a nice way to store related files and control access to them to ensure your application rules are kept intact.
