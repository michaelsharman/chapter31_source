---
comments: true
date: 2008-01-23 10:44:59
layout: post
slug: taking-advantage-of-dom-on-ready-and-event-observers-using-prototypejs
title: Taking advantage of DOM on ready and Event observers using Prototype.js
wordpress_id: 180
categories:
- Javascript
---

I've been doing some JavaScript development with [Prototype](http://www.prototypejs.org/) over the last few days and it's been interesting trying to do things that I know how to do in [jQuery](http://www.jquery.com/), but in Prototype.

One of the cool things I like with all these JavaScript frameworks is the easy way they allow you to execute code on 'DOM Ready' (once the page markup has completed but before all the images etc have loaded). I like this as it lets you get a lot of the grunt work and page initialisation out of the way before the user would notice the result of your code, such as hiding page elements etc

Anyway, here is how you can set this up using Prototype. Add this to your &lt;script&gt; tag or hopefully better still in an external .js file:

``` javascript
document.observe('dom:loaded', function(){

	//any code here will be read once the DOM is ready, nice and early!

});
```

Another way to do this is using the Event model to call a separate function to handle your initialisation code:

``` javascript
Event.observe(document, 'dom:loaded', init); 

function init()
{
	//initialise code
}
```

Now another cool thing about these frameworks is they give you the ability to register "listeners" for user events. This way I can have my HTML markup completely free of _event code_ like "onclick" or "onsubmit" etc which is great for users with JavaScript turned off as it clearly degrades nice and cleanly, but I can setup listeners in my external .js files to handle these events.

So to handle a form submission I might have the following HTML form:

``` javascript
<form name="frmAddLink" id="frmAddLink" method="post" action="/?event=links/create">

	<!-- form controls here -->

</form>
```

And my JavaScript will be:

``` javascript
document.observe('dom:loaded', function(){
	
	Event.observe('frmAddLink', 'submit', submitForm);

});
```

This basically says whenever the form with an ID of "frmAddLink" is submitted...execute the function called "submitForm" (which can of course be any function you like). 

An "event" container is automatically made available to the "submitForm" as an argument where I can serialize my form data, setup form "action" URL's etc and submit asynchronously. Again, no JavaScript in your markup is good and degrades easily :)

``` javascript
function submitForm(event) 
{

	Event.stop(event);	//Stops the eventâ€™s propagation and prevents its default action from being triggered eventually.

	var element = event.element();
	var sAction = element.action
	var stForm = $(element.id).serialize(true);	//serialise the form for posting

	new Ajax.Request(sAction,{
		parameters: stForm,
		method:'get',
	    	onSuccess: function(transport){
			var response = transport.responseText || "no response text";
			$('myEl').update(response);
	    },
	    onFailure: function(){ alert('Something went wrong...') }
	});

}
```

One problem though is if you load a page on your site where the form in question doesn't exist, you will get an error where your Observer is being registered because it can't find the element in the DOM and Prototype isn't a "fail silently" framework. 

To get around this I do the following:

``` javascript
document.observe('dom:loaded', function(){
	
	$('frmAddLink') === null ? "" : Event.observe('frmAddLink', 'submit', submitForm);

});
```

This simply says if the element "frmAddLink" exists register an observer; else do nothing.

### UPDATE 24th Jan

After asking a question on the Prototype mailing list, the following is "best practise" when looking for elements which might not be on every page:

``` javascript
var el = $('frmAddLink');
if (el)
{		
	el.observe('submit', showElement);
	//etc
}
```

The first line will have a value of NULL if the element "frmAddLink" isn't defined in the markup. This is also a better way as you can have multiple statements instead of just one observe, handy if you want to do more things on 'submit'.

### UPDATE 2nd Feb

Thanks to Dr J in the comments of this post where he advised that I actually was using the wrong syntax for dom:loaded. I had the equivalent of window.onLoad() by using the following:

``` javascript
Event.observe(window, 'load', function() {

});
```

This of course not the best as you need to wait for the entire page to load before your JavaScripts are run. The updated way (dom:loaded) is much nicer :)
