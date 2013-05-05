---
comments: true
date: 2011-05-31 22:31
layout: post
slug: mura-overriding-dspcrumblistlinks
title: "Mura - overriding dspCrumblistLinks"
wordpress_id: 963
categories:
- ColdFusion
- Mura
- Railo
---

Like most CMS solutions out there, Mura CMS gives you some cool hooks to override core functionality. [See the developer guides](http://docs.getmura.com/index.cfm/developer-guides/) for more information.

I've created a [repository on github](https://github.com/michaelsharman/muracustomisations/) to store any customisations or extensions that could be cherry picked for use in any Mura app.

First up was a super simple one for breadcrumbs. By default, Mura will put an "a href" around the last item in the crumb list. The site I was working on specified that the last item should be plain text (no hyperlink).

Mura makes this nice and easy by extending the contentRenderer.cfc inside your /[siteid]/includes folder. Here is the function which includes my custom argument _linkLastItem [bool]_ to determine whether or not to link the last item:

``` javascript
<cffunction name="dspCrumblistLinks"  output="false" returntype="string">
	<cfargument name="id" type="string" default="crumblist">
	<cfargument name="separator" type="string" default="">
	<cfargument name="linkLastItem" type="boolean" required="false" default="true" hint="Whether to generate an 'a href' for the last crumb item">

	<cfset var thenav="" />
	<cfset var theOffset=arrayLen(this.crumbdata)- this.navOffSet />
	<cfset var I = 0 />

	<cfif arrayLen(this.crumbdata) gt (1 + this.navOffSet)>
		<cfsavecontent variable="theNav">
			<cfoutput><ul id="#arguments.id#">
				<cfloop from="#theOffset#" to="1" index="I" step="-1">
					<cfif I neq 1>
						<li class="#iif(I eq theOffset,de('first'),de(''))#">
						<cfif i neq theOffset>#arguments.separator#</cfif>
						#addlink(this.crumbdata[I].type, this.crumbdata[I].filename, this.crumbdata[I].menutitle, '_self', '', this.crumbdata[I].contentid, this.crumbdata[I].siteid, '', application.configBean.getContext(), application.configBean.getStub(), application.configBean.getIndexFile(), event.getValue('showMeta'),0)#</li>
					<cfelse>
						<li class="#iif(arraylen(this.crumbdata),de('last'),de('first'))#">
							<cfif arguments.linkLastItem>
								#arguments.separator##addlink(this.crumbdata[1].type, this.crumbdata[1].filename, this.crumbdata[1].menutitle, '_self', '', this.crumbdata[1].contentid, this.crumbdata[1].siteid, '', application.configBean.getContext(), application.configBean.getStub(), application.configBean.getIndexFile(),event.getValue('showMeta'),0)#
							<cfelse>
								#arguments.separator##this.crumbdata[1].menutitle#
							</cfif>
						</li>
					</cfif>
				</cfloop>
			</ul></cfoutput>
		</cfsavecontent>
	</cfif>

	<cfreturn trim(theNav)>
</cffunction>
```


