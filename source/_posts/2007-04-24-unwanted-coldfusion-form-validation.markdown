---
comments: true
date: 2007-04-24 08:06:58
layout: post
slug: unwanted-coldfusion-form-validation
title: Unwanted ColdFusion form validation
wordpress_id: 115
categories:
- ColdFusion
---

I came across something strange today when developing a web form. 

Basically I had a form field with a name/id of "restoration_required" but when I submitted the form I got the following error:

![Form Error](http://www.chapter31.com/wp-content/uploads/2007/04/formerror.gif)

Now [Geoff Bowers](http://www.daemon.com.au/) happened to be standing nearby and was kind enough to point out that this looked like a <cfform> validation error, only I wasn't using cfform!

A quick test (on WinXP, CFMX 7.0.2) showed everything working as expected when I renamed the field as "restoration_isRequired".

Of course what was really strange was the fact that this was happening when using a normal <form> tag...not <cfform>.

### Update 25th April 2007

In response to Todd's last comment I did a little bit of testing, and when I create a <cfform> ColdFusion will (as expected) generate an HTML form for me. 

If I then add the validation attributes (for validateat="onserver") ColdFusion will validate any fields where I specify "required='true'". In that situation I will get the same error message as before...not that I know where you'd use this because you don't really seem to get any control over the message!

But...

Even with a <cfform> if I name a field something which ends with "_required" I get that server side validation message whether I've entered a value or not!

``` javascript
<cfform name="myForm" action="" format="html" method="post">
	
	<cfinput type="text" name="firstName_required" id="firstName_required" required="true" validateat="onServer" />
	
	<cfinput type="submit" name="Submit" id="Submit" value="Send" />
	
</cfform>
```

![Sample form](http://www.chapter31.com/wp-content/uploads/2007/04/form1.gif)

Submitting this gives me the following error:

![Form Error 2](http://www.chapter31.com/wp-content/uploads/2007/04/formerror2.gif)

In my opinion that is a bug which basically means whether you're using &lt;cfform&gt; or &lt;form&gt; you can't name any fields ending with "_required".
