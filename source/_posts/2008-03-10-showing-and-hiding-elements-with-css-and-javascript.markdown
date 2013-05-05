---
comments: true
date: 2008-03-10 22:41
layout: post
slug: showing-and-hiding-elements-with-css-and-javascript
title: "Showing and hiding elements with CSS and JavaScript"
wordpress_id: 202
categories:
- Javascript
---

_*** Note:** These examples reference the [Prototype](http://www.prototypejs.org/) JavaScript framework._

Often I find that I want to load content onto a page but have its default view state as hidden until a user defined event makes it appear.

The problem is if I hide an element using a linked CSS file (with a class or Id style of {display:none;}) it seems I cannot show that element using either of the following JavaScript options:

``` javascript
	//uses Prototype to display:block a previously hidden element
	$('myEl').show();

	//adds a CSS classname to the element
	$('myEl').addClassName('showElement');
```

Where the CSS class 'showElement' above is basically {display:block;}

Now if I add the CSS to hide the element inline like so:

``` javascript
	<div id="myEl" style="display:none;">
```

Then everything works great, except now I have CSS embedded in my markup which I really don't want there.

The Prototype API for [Element.show()](http://www.prototypejs.org/api/element/show) suggests that:


> Element.show cannot display elements hidden via CSS stylesheets. Note that this is not a Prototype limitation but a consequence of how the CSS display property works.


A user on the Prototype google group [sent me this link](http://tobielangel.com/2006/12/31/why-the-css-display-property-sucks) as an explanation. A quote from that page:


> The problem actually only arises when you want some elements to be hidden when the page loads: there is no possible way to find out what there display should be when you show them.


The solution I used? Well something that I've been doing with Prototype and jQuery for a while (it's just that I wanted to know if there was a cleaner solution in this case) is the [dom:loaded observer function](http://www.chapter31.com/2008/01/23/taking-advantage-of-dom-on-ready-and-event-observers-using-prototypejs/) which will run as soon as the Dom is loaded (and before all 'assets' are loaded so it's super quick).

Basically I use JavaScript to hide the element(s) I want hidden instead of CSS. This has the following benefits:

  * Clean markup (no inline CSS)
  * Being able to modify the 'display' state from a user event
  * Works if the user has no JavaScript enabled (the elements will simply always be there which is better than them not!)

Example of the dom:loaded function:

``` javascript
	Event.observe(document, 'dom:loaded', function() {
		//uses Prototype to hide the element
		$('myEl').hide();

		//Alternative to the above example - attach a CSS class called 'hide' (with has {display:none;}) to the element
		$('myEl').addClassName('hide');
	});
```
