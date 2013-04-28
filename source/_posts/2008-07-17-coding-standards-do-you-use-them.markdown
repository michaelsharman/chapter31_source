---
comments: true
date: 2008-07-17 22:52:08
layout: post
slug: coding-standards-do-you-use-them
title: Coding standards, do you use them?
wordpress_id: 265
categories:
- ColdFusion
---

Reading a [blog entry](http://www.mkville.com/blog/index.cfm/2008/7/16/Custom-Tag-and-CFC-Case-Issue-Followup-and-Workaround) this morning got me thinking. Essentially the author had experienced problems (after installing the latest ColdFusion hotfix) with case sensitivity on a Linux server. Two of the issues where based around calling custom tags and createObject(), where the actual filename was in a different "case" to the code calling the tag or instansiating the object.

Why did this get me thinking? Coding standards.

What standards do you use when developing? The kind of standards which dictate the naming of methods, variables and filenames. Do you name your variables and functions _semantically?_

For instance to return information about a product do you call a method like _getProduct()_ or _getProductById()_ or do you use something like _prod()_ (I'm hoping for the former as the latter really isn't that descriptive).

How about variables? ColdFusion can be a funny beast with its scoping, particularly inside component methods where local variables are actually global (in the _variables_ scope) to the cfc unless you _var_ scope them. This being the case a lot of people have [global cfc variables inside a struct](http://www.chapter31.com/2007/06/14/using-variablesinstance-inside-your-components/), often called something like variables.instance. This enables you to easily distinguish calls to global variables (like _variables.instance.dsn_) and local variables (like using _i_ as a loop counter).

What about the actual variable name? Do you use prefixes depending on the "type" of variable? Something like:

  * a for arrays - aEmployees
  * i for integers - iEmployeeCount
  * o for objects - oEmployee
  * q for queries - qEmployees
  * st for structs - stEmployees

How about filenames (the original topic which got me thinking)? Do you have a standard for the naming of files? You should. You might develop on Windows but is your production environment on Linux (which is usually case sensitive)? Will it ever be ported to Linux? Are you writing code which may be released as a commercial or open source offering so you really don't know where the code will end up?

An often used standard (at least in my experience) is thus:

ColdFusion components use camel case;
	
  * Product.cfc
  * ProductService.cfc

All other .cfm templates (including custom tags) use headless (mixed) camel case;

  * displayProduct.cfm
  * inc_Header.cfm

Some people might totally disagree with the examples I've listed (perhaps their standard is that all filenames are lowercase to prevent any possible mixups with case sensitivity), however the point is that there is really no excuse for not using coding standards, whatever they may be. 

The important thing is that your entire development team follow a single agreed upon standard. This will prevent the completely unnecessary headache of your code breaking if/when you test your code in a different environment such as Linux.

It also (imho) makes your codebase infinitely more readable as you already have expectations about naming conventions etc.

There are of course many other topics to be discussed around coding standards, from database table names to commenting (or not!) or code. What standards do you use in your organisation?

Some [further reading](http://livedocs.adobe.com/wtg/public/coding_standards/contents.html) which is quite old but still relevant.
