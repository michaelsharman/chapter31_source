---
comments: true
date: 2011-07-01 00:51:52
layout: post
slug: farcry-grouping-formtool-category-items
title: FarCry - grouping formtool category items
wordpress_id: 973
categories:
- ColdFusion
- Farcry
---

A new project we're working has the need to categorise each new content object, for this we use the built in FarCry category/keyword formtool.

By default the render type is a multi-select tree, I wanted a single select dropdown. Luckily formtools makes this oh so simple.

``` javascript
<cfproperty name="catHTML" type="nstring" required="true" default="" ftSeq="2" ftwizardStep="Content"  ftValidation="required" ftFieldset="General Details" ftLabel="Categories" ftType="Category" ftAlias="sections" ftRenderType="dropdown" ftSelectSize="1" ftSelectMultiple="false" ftAliasAsOptGroup="true">
```

Note that I've set the dropdown size to 1 and multiple select to false. Basically I have a group of "sections" that each content object needs to belong to, section 1 through 11. I've setup the categories already under a parent category called "sections" (note the ftAlias in the formtool definition). Unfortunately the default rendering was showing "sections" as a selectable category, however I didn't want this. I only wanted the users to be able to choose the _children_ of this category, not the category itself.

Luckily FarCry makes this kind of thing simple to override. I added my own category.cfc inside my projects _packages/formtools_ directory and made sure to extend category.cfc from _farcry.core.packages.formtools.category_. In this I only used the edit() function to render an optgroup from a new custom property called ftAliasAsOptGroup (see above snippet). This gave me the following:

![FarCry optgroup](http://www.chapter31.com/wp-content/uploads/2011/07/optgroup.png)

The full category.cfc is below if you're interested.

``` javascript
<cfcomponent extends="farcry.core.packages.formtools.category">


	<cfproperty name="ftAliasAsOptGroup" default="" hint="If true, renders ftAlias as an optgroup">

	
	<cffunction name="edit" access="public" output="false" returntype="string" hint="his will return a string of formatted HTML text to enable the user to edit the data">
		<cfargument name="typename" required="true" type="string" hint="The name of the type that this field is part of.">
		<cfargument name="stObject" required="true" type="struct" hint="The object of the record that this field is part of.">
		<cfargument name="stMetadata" required="true" type="struct" hint="This is the metadata that is either setup as part of the type.cfc or overridden when calling ft:object by using the stMetadata argument.">
		<cfargument name="fieldname" required="true" type="string" hint="This is the name that will be used for the form field. It includes the prefix that will be used by ft:processform.">

		<cfset var html = "" />
		<cfset var navid = "" />
		<cfset var oCategory = createObject("component",'farcry.core.packages.farcry.category')>
		<cfset var lSelectedCategoryID = "" >
		<cfset var lCategoryBranch = "" />
		<cfset var CategoryName = "" />
		<cfset var i = "" />
		<cfset var rootNodeText = "" />
		<cfset var rootID = "" />
				
		<cfif structKeyExists(application.catid, arguments.stMetadata.ftAlias)>
			<cfset rootID = application.catid[arguments.stMetadata.ftAlias] >
		<cfelse>
			<cfset rootID = application.catid['root'] >
		</cfif>
		
		<cfset lSelectedCategoryID = oCategory.getCategories(objectid=arguments.stObject.ObjectID,bReturnCategoryIDs=true,alias=arguments.stMetadata.ftAlias) />
		
		<cfset rootNodeText = oCategory.getCategoryNamebyID(categoryid=rootID) />
		
		<cfswitch expression="#arguments.stMetadata.ftRenderType#">
			
			<cfcase value="dropdown">
				<cfset lCategoryBranch = oCategory.getCategoryBranchAsList(lCategoryIDs=rootID) />
							
				<cfsavecontent variable="html">
					<cfoutput><select id="#arguments.fieldname#" name="#arguments.fieldname#"  <cfif arguments.stMetadata.ftSelectMultiple>size="#arguments.stMetadata.ftSelectSize#" multiple="true"</cfif> class="selectInput #arguments.stMetadata.ftSelectSize# #arguments.stMetadata.ftClass#"></cfoutput>
					<cfloop list="#lCategoryBranch#" index="i">
						<!--- If the item is the actual alias requested then it is not selectable. --->
						<cfif i EQ rootID>
							<cfif len(arguments.stMetadata.ftDropdownFirstItem)>
								<cfoutput><option value="">#arguments.stMetadata.ftDropdownFirstItem#</option></cfoutput>
							<cfelse>
								<cfset CategoryName = oCategory.getCategoryNamebyID(categoryid=i,typename='dmCategory') />
								<cfif arguments.stMetadata.ftAliasAsOptGroup EQ true>
									<cfoutput><optgroup label="#CategoryName#"></cfoutput>
								<cfelse>
									<cfoutput><option value="">#CategoryName#</option></cfoutput>
								</cfif>
							</cfif>
						<cfelse>
							<cfset CategoryName = oCategory.getCategoryNamebyID(categoryid=i,typename='dmCategory') />
							<cfoutput><option value="#i#"<cfif listContainsNoCase(lSelectedCategoryID, i)> selected="selected"</cfif>>#CategoryName#</option></cfoutput>
						</cfif>						
					</cfloop>
					<cfif arguments.stMetadata.ftAliasAsOptGroup EQ true>
						<cfoutput></optgroup></cfoutput>
					</cfif>
					<cfoutput></select></cfoutput>
				</cfsavecontent>
			</cfcase>
			
			<cfcase value="prototype">
				<cfsavecontent variable="html">
				
					<cfoutput><fieldset style="width: 300px;">
						<cfif len(arguments.stMetadata.ftLegend)><legend>#arguments.stMetadata.ftLegend#</legend></cfif>
					
						<div class="fieldsection optional full">
												
							<div class="fieldwrap">
							</cfoutput>

								<ft:NTMPrototypeTree id="#arguments.fieldname#" navid="#rootID#" depth="99" bIncludeHome=1 lSelectedItems="#lSelectedCategoryID#" bSelectMultiple="#arguments.stMetadata.ftSelectMultiple#">
							
							<cfoutput>
							</div>
							
							<br class="fieldsectionbreak" />
						</div>
						<input type="hidden" id="#arguments.fieldname#" name="#arguments.fieldname#" value="" />
					</fieldset></cfoutput>
							
				</cfsavecontent>			
			</cfcase>
			<cfcase value="extjs">
				<!--- <skin:htmlHead library="extjs" />
				<skin:htmlHead library="farcryForm" /> --->
				
				<cfsavecontent variable="html">
					
					<cfoutput><fieldset style="width: 300px;">
						<cfif len(arguments.stMetadata.ftLegend)><legend>#arguments.stMetadata.ftLegend#</legend></cfif>
					
						<!--- <div id="tree-div" style="border:1px solid #c3daf9;"></div> --->
						<div class="fieldsection optional full">
											
							<div class="fieldwrap">
								
								<div id="#arguments.fieldname#-tree-div"></div>	
								
							</div>
							
							<br class="fieldsectionbreak" />
						</div>
						<input type="hidden" id="#arguments.fieldname#" name="#arguments.fieldname#" value="#lSelectedCategoryID#" />
						<input type="hidden" name="#arguments.fieldname#" value="" />
					</fieldset>
					</cfoutput>
												
				</cfsavecontent>
			
				<skin:onReady>
				<cfoutput>
				    createFormtoolTree('#arguments.fieldname#','#rootID#', '#application.url.webtop#/facade/getCategoryNodes.cfm', '#rootNodeText#','#lSelectedCategoryID#', 'categoryIconCls');											
				</cfoutput>
				</skin:onReady>
			</cfcase>
			<cfcase value="jquery">			

				<skin:onReady>
				<cfoutput>
					$j("###arguments.fieldname#_list").treeview({
						url: "#application.url.webtop#/facade/getCategoryNodes.cfm?node=#rootID#&fieldname=#arguments.fieldname#&multiple=#arguments.stMetadata.ftSelectMultiple#&lSelectedItems=#lSelectedCategoryID#"
					})
				</cfoutput>
				</skin:onReady>
				
				<cfsavecontent variable="html">				
					<cfoutput>
					<div class="multiField">
						<ul id="#arguments.fieldname#_list" class="treeview"></ul>
					</div>
					<input type="hidden" name="#arguments.fieldname#" value="" />	
					</cfoutput>
				</cfsavecontent>			
			</cfcase>			
			<cfdefaultcase>
				
				<skin:loadJS id="jquery" />
				<skin:loadJS id="jquery-checkboxtree" basehref="#application.url.webtop#/thirdparty/checkboxtree/js" lFiles="jquery.checkboxtree.js" />
				<skin:loadCSS id="jquery-checkboxtree" basehref="#application.url.webtop#/thirdparty/checkboxtree/css" lFiles="checkboxtree.css" />
												
				<skin:onReady>
				<cfoutput>
					$j.ajax({
					   type: "POST",
					   url: '#application.fapi.getLink(type="dmCategory", objectid="#rootID#", view="displayCheckboxTree", urlParameters="ajaxmode=1")#',
					   data: {
					   	fieldname: '#arguments.fieldname#',
					   	rootNodeID:'#rootID#', 
					   	selectedObjectIDs: '#lSelectedCategoryID#'
						},
					   cache: false,
					   success: function(msg){
					   		$j("###arguments.fieldname#-checkboxDiv").html(msg);
							$j("###arguments.fieldname#-checkboxTree").checkboxTree({
									collapsedarrow: "#application.url.webtop#/thirdparty/checkboxtree/images/checkboxtree/img-arrow-collapsed.gif",
									expandedarrow: "#application.url.webtop#/thirdparty/checkboxtree/images/checkboxtree/img-arrow-expanded.gif",
									blankarrow: "#application.url.webtop#/thirdparty/checkboxtree/images/checkboxtree/img-arrow-blank.gif",
									checkchildren: false,
									checkparents: false
							});	
							$j("###arguments.fieldname#-checkboxDiv input:checked").addClass('mjb');	 
							$j("###arguments.fieldname#-checkboxDiv input:checked").parent().addClass('mjb');	     	
					   }
					 });
					
				</cfoutput>
				</skin:onReady>
				
				<cfsavecontent variable="html">

					<cfoutput>
					<div class="multiField">
						<div id="#arguments.fieldname#-checkboxDiv">loading...</div>
						<input type="hidden" name="#arguments.fieldname#" value="" />			
					</div>
					</cfoutput>
					
				</cfsavecontent>			
			</cfdefaultcase>			
			
		</cfswitch>
		
		<cfreturn html>
	</cffunction>

</cfcomponent>
```
