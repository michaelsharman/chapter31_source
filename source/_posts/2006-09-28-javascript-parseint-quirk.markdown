---
comments: true
date: 2006-09-28 07:45:35
layout: post
slug: javascript-parseint-quirk
title: Javascript parseInt() quirk
wordpress_id: 41
categories:
- Javascript
---

I ran into a little quirk or 'bug' today when using parseInt() with a string (input from a text box). Now as we all know parseInt() parses a string and returns an integer value.

The scenario: I was working on a legacy application where a user could pass a date to the server in 3 separate form fields (day, month and year); all text boxes. No nice little DHTML calendars here 

Anyways, the validation on the month text box was being tripped when a user entered a value like '08' or '09' for the month, note the leading 0.

The parseInt() function can take 2 arguments – the first is the string to be parsed and the second is a radix. The radix parameter is used to specify which numeral system to be used but if it is not supplied (as it most commonly is not), the function tries to determine what to use based on the submitted string. If the string passed to parseInt() begins with a '0', then it is parsed in octal ( base 8 ). Note that this 'bug' does not happen with parseFloat().

Keep in mind that this only happens when the value being checked is a string and only when the string starts with a leading zero. So that’s why it is difficult to notice. But if you’re dealing with a web page that has user input, there’s nothing prevening the user from entering '08' for a number field. To be 100% confident that you won’t see the bug, use one of these two techniques:

``` javascript
parseInt(parseFloat(<my text value>))

parseInt(<my text value>, 10)
```

The first example uses parseFloat() which doesn’t suffer from this little quirk and the second used the radix value of 10.

Muchas gracias to [Pradeep](http://www.go4expert.com/forums/showthread.php?t=857) for the tip
