---
comments: true
date: 2009-06-15 05:33:29
layout: post
slug: prototypescriptaculous-issue-with-sortablecreate
title: Prototype/scriptaculous issue with Sortable.create()
wordpress_id: 650
categories:
- Javascript
---

I've been doing some custom sorting within FarCry using the prototype/scriptaculous libraries as they already exist in the FarCry framework by default.

I was having trouble getting the [Sortable.create()](http://wiki.github.com/madrobby/scriptaculous/sortable-create) to work properly and the main docs site for scriptaculous seems severely lacking in examples. Basically the "sorting" action was happening fine but no event was being fired "onUpdate". No exception was being thrown, just that nothing was happening after the drag/drop.

The solution came from google (where else?) on the rubyonrails groups thanks to a fellow named Chris. 

[Straight from the board](http://groups.google.com/group/rubyonrails-spinoffs/browse_thread/thread/eb54b586942af4f2/d27bf870447b0584):

``` javascript
I had the same problem, and the issue is probably in your markup. Each
item of the 'sortable' has to be named in the format 'string_integer'.
So this will work:

<ul id="makeMeSortable">
   <li id="item_1"></li>
   <li id="item_2"></li>
   <li id="item_3"></li>
</ul>

and this will NOT work:

<ul id="makeMeSortable">
   <li id="firstitem"></li>
   <li id="seconditem"></li>
   <li id="thirditem"></li>
</ul> 
```

Wait, read that again. Are you serious? 

Yep...you have to split your "id" value with a string, then an underscore followed by an integer. This is truly the dumbest thing I've found in a while. Hall of famer for sure.

Just posting here to help anyone else who spends more time than necessary getting this (simple) task working.
