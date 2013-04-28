---
comments: true
date: 2007-06-14 08:36:02
layout: post
slug: using-variablesinstance-inside-your-components
title: Using variables.instance inside your components
wordpress_id: 123
categories:
- ColdFusion
---

Often when creating ColdFusion components developers will create a structure to hold component instance data. This data is stored in the components 'variables' scope and is therefore available to all methods.

Here is an example from the [rooibos component generator](http://rooibos.maestropublishing.com/):

``` javascript
<cfcomponent
	displayname="sample"
	output="false"
	hint="A bean which models the form.">

	<!---
	PROPERTIES
	--->
	<cfset variables.instance = StructNew() />
```

Now some of you may be wondering why you would use the extra struct level of 'instance' when we already know everything in that struct is in the components instance (variables) scope.

A quick question to [Geoff Bowers](http://www.daemon.com.au/) gave me a few answers.




	
  * It's obvious everywhere you reference this that it is instance data in the variables scope

	
  * You can dump all the components instance data by using <cfdump var="#variables.instance#" />. The benefit of this is that only dumping the _variables_ scope will give you a lot more than just your instance data! Think method signatures etc

	
  * You can (if you want) separate 'types' of instance data. e.g. you might pass in a DAO or Gateway component and assign it to the variables scope (variables.UserDAO)



Another great example of dumping variables.instance quickly and easily (from the Rooibos generator):

``` javascript
<!---
DUMP
--->
<cffunction name="dump" access="public" output="true" return="void">
	<cfargument name="abort" type="boolean" default="FALSE" />
	<cfdump var="#variables.instance#" />
	<cfif arguments.abort>
		<cfabort />
	</cfif>
</cffunction>
```


