---
comments: true
date: 2008-06-19 00:47:06
layout: post
slug: farcry-finding-a-page-by-typename-somewhere-above-the-current-page
title: FarCry - Finding a page by 'typename' somewhere above the current page
wordpress_id: 250
categories:
- ColdFusion
- Farcry
---

**Note:** This is for FarCry v3 which is a bit old now but should work for v5 :)

Sometimes when using FarCry I have a need to find an occurance of a page "type" which sits somewhere above where I currently am in the the navigation hierachy.

Say I want to find the "VehicleType" page (which could be Car or Bike etc) above where I am in the navigation hierachy as listed below (when I'm on the "Models" page):
	
  * Home
    * Vehicles
      * Bike
      * Car
        * Sedans
          * **_Models_**
        * Wagons
			
I want to know whether I'm in the "Car" or "Bike" part of the navigation tree and I want the content object of that page.

There are a couple of ways to do this, using categories (tags) would be one way. Another is to simply look for an occurance of my type (VehicleType) in the tree _above_ the current page you're on.

The following function will do just that, just pass in the **request.navId** of the page you're on (Models), the **typename** and **displayMethod** you're looking for (VehicleType).

``` javascript
<cffunction name="getParentPageByTypename" access="public" output="false" returnType="struct" hint="Returns the first tree occurance of a page 'typename' based on an ancestor search.">
	<cfargument name="objectId" type="string" required="true" hint="Current nav id of the page we want to search above in the tree" />
	<cfargument name="typename" type="string" required="true" hint="Which page typename are we looking for" />
	<cfargument name="displayMethod" type="string" required="true" hint="Which page display method are we looking for" />
	<cfargument name="nLevel" type="numeric" required="false" default="1" hint="Which nLevel to start looking in the ancestor query. Usually we can start at 3 or higher (1 being 'Root' and 2 being 'Home')" />
	<cfargument name="oTree" type="any" required="false" default="#application.factory.oTree#" />
	
	<cfscript>
	
		var qAncestors = "";
		var lAncestorIds = "";
		var aLeafNodes = "";
		var iArrayLength = 0;
		var i = 0;
		var stCurrentSubject = structNew();	//Default here in case we don't find anything, an empty struct will be returned
	
	</cfscript>

	<!--- Get the ancestor nav nodes for the object argument --->
	<cfset qAncestors = arguments.oTree.getAncestors(arguments.objectId) />

	<!--- Put the objectIds of the parent nav nodes into a list so we can retrieve their 'leaf' values. Using nLevel we can skip nodes we know we're not interested in --->
	<cfloop query="qAncestors" startrow="#arguments.nLevel#">
		<cfset lAncestorIds = listAppend(lAncestorIds, qAncestors.objectId) />
	</cfloop>
	
	<!--- Retrieve an array of leaf node information from a list of ancestor nav Id's --->
	<cfset aLeafNodes = arguments.oTree.getLeaves(lAncestorIds)>		
	<cfset iArrayLength = arrayLen(aLeafNodes) />
	
	<!--- Loop over the leaf nodes returned and look for the typename we're after --->
	<cfloop from="1" to="#iArrayLength#" index="i">
		<cfif aLeafNodes[i]["typename"] EQ arguments.typename AND aLeafNodes[i]["displayMethod"] EQ arguments.displayMethod>
			<cfset stCurrentSubject = aLeafNodes[i] />
			<cfbreak />
		</cfif>
	</cfloop>

	<cfreturn stCurrentSubject />

</cffunction>
```

For example:
``` javascript
stVehicleType = getParentPageByTypename(objectId=request.navId, typeName="vehicleType", displayMethod="displayPageStandard", nLevel=3);
```

Note that the "nLevel" argument in the function allows you to skip the ancestor nodes you know you're not interested in such as "Root" and "Home".

Hope this helps some people.
