---
comments: true
date: 2006-09-19 23:23:59
layout: post
slug: trimming-strings-with-javascript
title: Trimming strings with Javascript
wordpress_id: 39
categories:
- Javascript
---

[Ben Nadel](http://bennadel.com/) has a nice post on [trimming strings with javascript](http://bennadel.com/resources/uploads/string_trimming1.htm) using regular expressions.

Note that the reg exp white space character '\s' is used to match:

  * space
  * tab
  * horizontal tab
  * vertical tab
  * line break

Sample code below:

``` javascript
<script type="text/javascript">

	// Trims the beginning and trailing white space from a string.
	function trim( strText ){
		return( strText.replace(new RegExp("^([s]+)|([s]+)$", "gm"), "") );
	}

	// Trims the beinning white space from a string.
	function leftTrim( strText ){
		return( strText.replace(new RegExp("^[s]+", "gm"), "") );
	}

	// Trims the trailing white space from a string.
	function rightTrim( strText ){
		return( strText.replace(new RegExp("[s]+$", "gm"), "") );
	}

</script>
```

[Javascript: trimString.js](/images/uploads/2006/09/trimstring.js)

Update 25th March 2007:

		myString.replace(/^\s*|\s*$/g, "");

A basic breakdown:

``` javascript
/.../
    Regular expressions in javascript are delimited with forward slashes

^
    Outside the usual square brackets, the **caret** means look only at the beginning of the target string

|
    **Alternatation**, meaning finding the left hand OR right have values

\s*
    Denotes 0 to many white space characters

$
    Means look only at the end of the target string

g
    Makes the search **global**; finding all matches, not just the first match
```

Of course all we're doing is replacing left and right white space with an empty string ("").
