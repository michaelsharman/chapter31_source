---
comments: true
date: 2008-03-11 02:26:12
layout: post
slug: passing-extra-parameters-to-prototype-observer-handlers
title: Passing extra parameters to Prototype observer handlers
wordpress_id: 203
categories:
- Javascript
---

Another tip from my [Prototype](http://www.prototypejs.org/) travels...

'Observers' let you create a listener for a user event, for example on a form submission you may want to run some client side validation before actually submitting the form.

Of course you can add 'onsubmit()' in your <form> tag, but isn't it much nicer to keep your markup clean of this type of thing?

In your dom:loaded observer you can 'listen' for a form submission as follows:

``` javascript
	$('myForm').observe('submit', validateMyForm);
```

Whenever a form with and Id of 'myForm' is submitted the function 'validateMyForm' will fire and automagically be passed an 'event' which will essentially be a reference to the form. This is great, but sometimes you may want to pass extra parameters to the function you want to execute which might be localised to the specific user event (the function might be rather generic etc).

T.J. Crowder gave me a great workaround for this situation on the [Prototype groups](http://groups.google.com/group/rubyonrails-spinoffs/):

``` javascript
	$('myForm').observe('submit', function(event) {
		validateMyForm(event, param1, param2);
	});
```

Note that you need to add an anonymous function here, you can't just add the parameters with the normal syntax.

Any extra parameters can of course be strings or variables set outside of the observer (as long as they're within the parent function of course).

Thanks T.J.

:)


