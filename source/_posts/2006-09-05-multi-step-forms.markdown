---
comments: true
date: 2006-09-05 23:23:30
layout: post
slug: multi-step-forms
title: Multi-step forms
wordpress_id: 18
categories:
- ColdFusion
---

[Rahul Narula](http://rahulnarula.blogspot.com/) has a great post on [Multi-step forms](http://rahulnarula.blogspot.com/2006/09/multi-step-forms.html). As web developers forms are a part of our everyday lives, sometimes those forms exist over several pages instead of 1 looong page. That being said we need a way to hold the data entered by the user at each step (page) thoughout the process.

We can of course use either of the following:

* Database
* Session scope
* Structures
* URL

There are probably more but that would be all I would consider (at this stage!).

The database is fine but poses problems; namely we need to create a new record after the submission from step 1. Lets say there are 4 steps (pages) to this form. If a user doesn't complete all steps (they may give up!) then we need a mechanism for clearing out the now (presumably) invalid data from the database. Of course there are many ways to do this which really aren’t that difficult, but it is still more work for you to do! Also consider the extra load on the database server in a high traffic environment.

Sessions work really well here, no extra database load and no cleaning up the database if a user doesn't complete all steps. This is one I use all the time.

The URL (via action="get") is an option, particularly if you don’t want to (or can't) use session. Things get tricky however if users are allowed to jump back to prior pages. i.e. if they are on step 4 and they want to go back to step 2. They can use the back button, but it's not very elegant.

Rahul's method uses a UDF to generate hidden fields on each subsequent page. A nice and elegant solution including the ability to 'exclude' a list of fields.

An excerpt from his site:

``` javascript
<cffunction name="createHiddenFields" output="no" returntype="string">
  <cfargument name="excludeFields" type="string" default=""/>

 <cfscript>
  var formFieldsList ="";
  var formFieldArray= ArrayNew(1);
  var formHTML="";
  var element=0;
  var exclude = listappend(arguments.excludeFields,"formfields");

  if(structKeyExists(form,"fieldnames")) {
   formFieldsList = form.fieldnames;
  }
  formFieldArray = listtoArray(formFieldsList);

 </cfscript>

 <cfsavecontent variable="formHTML">
   <cfoutput>
 <cfloop from ="1" to="#ArrayLen(formFieldArray)#" index="element">
   <cfif listfindnocase(exclude,formFieldArray[element]) eq 0>
     <input type="hidden" name="#lcase(formFieldArray[element])#"  value="#htmleditformat(form[formFieldArray[element]])#">
  </cfif>
   </cfloop>
 </cfoutput>
 </cfsavecontent> 

  <cfreturn formHTML />
</cffunction>
```

To use the UDF just call this udf anywhere within the &lt;form&gt;…&lt;/form&gt; in your page
