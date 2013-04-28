---
comments: true
date: 2008-10-22 02:35:25
layout: post
slug: problems-submitting-a-form-via-enter-in-ie
title: Problems submitting a form via 'enter' in IE
wordpress_id: 451
categories:
- (X)HTML
---



Like many things, handling form submissions with [ColdFusion](http://www.adobe.com/products/coldfusion/) can be done many many ways. A preferred method which I've been using for years now is looking for a specific element in the form struct. Something like:

``` javascript
<cfif structKeyExists(form, "myelement")>
	<!--- handle form submission here --->
</cfif>
```

Most times I use a hidden field as the form element to look for (in my [structKeyExists()](http://www.cfquickdocs.com/#StructKeyExists)), but I came across something funny today where I happened to be looking for the _name_ of a submit button.

My form was very basic:

[![](http://www.chapter31.com/wp-content/uploads/2008/10/form.png)](http://www.chapter31.com/wp-content/uploads/2008/10/form.png)

If this form is submitted by clicking the submit button ("Go") in all browsers I get the following form struct:

[![](http://www.chapter31.com/wp-content/uploads/2008/10/picture-3.png)](http://www.chapter31.com/wp-content/uploads/2008/10/picture-3.png)

Notice that I have _2 form elements_ in the form dump, "btnSearch" which is the submit button and "searchCriteria" which is the text box. So far so good, but what happens when I submit the form by hitting the "enter" key (when I have focus in the text box)?

In most browsers you get the same form dump as above...not so with IE where I get the following:

[![](http://www.chapter31.com/wp-content/uploads/2008/10/picture-2.png)](http://www.chapter31.com/wp-content/uploads/2008/10/picture-2.png)

As you can see, my submit button (btnSearch) _**does not exist in the form struct!**_.

The submit button HTML was:

``` javascript
<input type="submit" name="btnSearch" id="btnSearch" value="Go" />
```

After discussions with [Mark Lynch](http://www.lynchconsulting.com.au/blog/) and some testing it appears that this only happens when you have _a single text element_ on the page. If you have 2 or more textboxes then the form submit button appears in the form struct as expected 

For those asking whether it's really important, after all how often will you have a form with a single text box. Ever used a search form? :)

The easy way around this *bug* is to never look for a submit button, instead look for a hidden field or a text box.

For those who sometimes use 2 submit buttons on the same page and take action depending on which one was clicked...the same thing happens i.e. neither submit button exists in the form struct (in IE) if you hit "enter". In Firefox the submit button which appears first in the form markup exists in the form!

All in all I'd recommend never using the name of a submit button to determine the action of a form submission. The only exception is if you have multiple submit buttons and you understand and are happy with the default action in IE (the first submit button existing etc).

Some might say you could have a 2nd textbox on the form and hide it using CSS. While this would work it just feels wrong and a bit of a hack. 

If you're curious, here's a small compatibility table of my findings on Mac OSX (except IE of course which was on Windows XP):

| Browser | Submit exists on enter |
| |
| Firefox 3.0.3 | Yes
| |
| Internet Explorer 7 (7.0.5730.13) | No
| |
| Internet Explorer 6 SP2 (6.0.2900.2180) | No
| |
| Opera 9.52/9.61 | Yes
| |
| Safari 3.1.2 | Yes
| |
| Camino 1.6.4 | Yes
