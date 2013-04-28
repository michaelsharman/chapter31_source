---
comments: true
date: 2008-10-13 13:29:14
layout: post
slug: generaterandomkey-udf-with-several-handy-options
title: generateRandomKey() UDF with several handy options
wordpress_id: 420
categories:
- ColdFusion
---

Working on a ColdFusion project recently I had the need to generate a random key; the format of which was based on a specific set of business rules. I actually ended up writing a basic UDF to handle this but after the fact I went looking to see if I could find something which provided some of the features I was after.

Although I found several through google and [cflib](http://cflib.org/) they weren't completely what I was after. Not finding exactly what I needed inspired me to write my own one based on the following requirements:

  * Users can set the length of the returned key
  * Key can be UPPER, lower or MixEd case
  * Format can include numeric, string, alphanumeric (a-zA-Z0-9) and special characters
  * Potentially confusing characters (e.g. o, i, l, s, O, I, L, S etc) are ignored by default and users can pass in their own list of special characters (overriding the default list) to be ignored from the returned key
  * Users can pass a fixed prefix or suffix, handy if your business needs to generate order numbers which all start with "CF-" etc
  * Users can specify that the first (or last) 'x' characters in the key are numeric, the rest of the key follows the "format" argument

Some examples:

``` javascript
	generateRandomKey();
	//DCE8YDEK

	generateRandomKey(case="mixed");
	//wYu3Kbaj

	generateRandomKey(case="mixed", format="alphanumeric", length="10");
	//7hE3hv4Yzr

	generateRandomKey(format="special", fixedPrefix="MPS");
	//MPS>M_!{

	generateRandomKey(case="upper", format="string", numericPrefix="3", length="12");
	//193TYTVDYJFZ

	generateRandomKey(format="numeric", length="12");
	//692490463609

	generateRandomKey(case="lower", format="special", specialChars="*,&", length="12");
	//fqr74mhb*cq&
```

If anyone is interested you can [download the UDF here](/images/uploads/2008/10/generaterandomkey1.txt).

As usual comments and critiques are always welcome :)
