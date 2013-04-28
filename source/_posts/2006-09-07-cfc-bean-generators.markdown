---
comments: true
date: 2006-09-07 00:55:28
layout: post
slug: cfc-bean-generators
title: CFC Bean generators
wordpress_id: 27
categories:
- ColdFusion
---

There are a few Bean generators around for ColdFusion which can save you a lot if time and effort when you need to create your CFC Beans, here are a few making the rounds.

[Jonathan Block](http://www.jonathanblock.com/Members/admin/ColdFusionBeanCreator)

A more advanced generator which creates init() and validate() functions for you. For the picky developers out there you might want to tidy things up a bit. Example the ‘set’ in the init() misses a space at the end of the <cfset>

``` javascript
<cfset setFirstName(arguments.FirstName)/>
```

also when declaring your instance (inside the init()) the reference to a new struct is in capitals

``` javascript
<cfset variables.instance = STRUCTNEW() />
```

[Doug Hughes](http://www.doughughes.net/includes/beans/)

I like this one a lot for simple beans. It’s extremely easy to use and generates fast, clean code in (X)HTML style syntax.

[Francis Scott](http://www.feed-squirrel.com/index.cfm?evt=viewItem&ID=4358) 
 
This one is pretty cool and is one of my favourites. It can generate Beans, DAO’s and Gateways FROM your database table! Nice  Simply choose your datasource, this will populate a select box with a list of tables to choose from. Choose your table, submit and voila! You have your bean complete with init() and validate() methods. Your gateway and DAO. Lovely!

Oh and you can also [download it here](http://www.franciswscott.com/downloads/cfccreator.zip)

[David Sirr](http://www.sparkit.biz/codegen/uml2cfc/)  

Not a bad generator taking advantage of UML style syntax when entering ‘generate’ commands. This one does create an init() for you but generates with unwanted functions:

``` javascript
<cffunction name="doSomethingPublic" access="public" returntype="string" output="false" hint="description">
    <cfargument name="foo" type="numeric" required="true" />
    <cfargument name="poo" type="string" required="true" />
    <cfreturn />
</cffunction>
<cffunction name="doSomethingPrivate" access="private" returntype="void" output="false" hint="description">

</cffunction>
```

Also the init() validates bean creation by calling a changeBean() method, but if this fails for whatever reason you need to add your own exception handling.

[Rooibos Generator](http://rooibos.maestropublishing.com/)  

Create boilerplate beans and transfer objects for ColdFusion! Based on Jon Block’s original bean creator. This one is fantastic, probably all you’ll ever need! Peter has done a great job making life simple for us all.

Easy to use it even can create Transfer Objects (TO) for you! Of course there are init() and validate() methods as well as dump() and tools to create, get and set your TO’s all in super clean code. Niiiiice 