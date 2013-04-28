---
comments: true
date: 2008-04-07 06:07:39
layout: post
slug: flushing-a-cached-web-service
title: Flushing a cached web service
wordpress_id: 223
categories:
- ColdFusion
---

When you use WebServices with ColdFusion, the WSDL 'stub' is cached in CF Administrator (presumably for performance reasons).

This can be a pain when you need to change the WSDL and you don't have access to CF Admin to flush the service which is the scenario I found myself in today.

Luckily for me I sit near some ColdFusion peeps who sorted me out with a little Java method (courtesy of the ServiceFactory) to flush a WSDL from a ColdFusion template.

Basically all you need to do is:

``` javascript
<cfset wsdl = "yourwsdlpath.wsdl">
<cfobject type="java" action="Create" name="factory" class="coldfusion.server.ServiceFactory">
<cfset RpcService = factory.XmlRpcService>
<cfset RpcService.refreshWebService(wsdl)>
```

I also wrapped it up in a little function:

``` javascript
<cffunction name="flushWebService" access="public" output="false" returnType="void" hint="Flush a cached WebService in ColdFusion Administrator">
	<cfargument name="wsdlURL" type="string" required="false" default="#getWSDLURL()#" hint="URL of the WSDL to flush" />
	
	<cfscript>
		
		var oFactory = createObject("java", "coldfusion.server.ServiceFactory");
		
		oFactory.XmlRpcService.refreshWebService(arguments.wsdlURL);
		return;
		
	</cfscript>
		
</cffunction>
```

Thanks [Marko (and Mark)](http://www.lynchconsulting.com.au/blog/)

After the fact I did some googling and found a great read from [Doug Boude](http://www.dougboude.com/blog/) on [Refreshing Cached ColdFusion Webservices Through the Back Door](http://www.dougboude.com/blog/1/2006/06/Refreshing-Cached-ColdFusion-Webservices-Through-the-Back-Door.cfm) in case you're interested.
