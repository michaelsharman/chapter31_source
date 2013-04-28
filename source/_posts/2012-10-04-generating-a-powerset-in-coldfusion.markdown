---
comments: true
date: 2012-10-04 11:20:46
layout: post
slug: generating-a-powerset-in-coldfusion
title: Generating a powerset in ColdFusion
wordpress_id: 1250
categories:
- ColdFusion
---

I recently needed to generate a [powerset](http://en.wikipedia.org/wiki/Power_set) (a set of all subsets) of 3 HTML select boxes. The idea was that a user could choose 1-many options from each box, and they had to choose a value from all 3 boxes (none could be empty).

Select #1 had 4 values  
Select #2 had 7 values  
Select #3 had 13 values

Now, I needed to generate every possible permutation for these 3 select boxes based on the rules I defined above. That meant the possible number of combinations for each box was:

Select #1 had 16* possible combinations  
Select #2 had 128* possible combinations  
Select #3 had 8192* possible combinations  

\* It was actually 1 less than that, because a powerset take into consideration an empty selection, so in reality the numbers would have been 15, 127 and 8191.

This was calculated using 2n, where _n_ is an number (integer) of options in a set, so 24, 27 and 213

Now, how did I go about calculating these powersets? I cheated :smile:

I grabbed a JavaScript function from [Rosetta Code](http://rosettacode.org/wiki/Power_set#JavaScript) and ported it to ColdFusion.

Here is the function to generate a powerset from a set (array) of data:

``` javascript
public array function calculate(required array data)
{
  var ps = [""];
  var d = arguments.data;
  var lenData = arrayLen(d);
  var lenPS = 0;
  for (var i=1; i LTE lenData; i++)
  {
    lenPS = arrayLen(ps);
    for (var j = 1; j LTE lenPS; j++)
    {
      arrayAppend(ps, listAppend(ps[j], d[i]));
    }
  }
  return ps;
}
```

A sample powerset of 4 values (in this case 1,2,3,4) would be:

``` javascript
var Powerset = new Powerset();
var res = Powerset.calculate([1,2,3,4]);

Outputs:
["","1","2","1,2","3","1,3","2,3","1,2,3","4","1,4","2,4","1,2,4","3,4","1,3,4","2,3,4","1,2,3,4"]
```

By the way, my total combination across all 3 sets was a mere 16,777,216.

[Grab from github](https://github.com/michaelsharman/Powerset) if you prefer the CFC
