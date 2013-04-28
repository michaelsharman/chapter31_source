---
comments: true
date: 2006-10-01 00:43:45
layout: post
slug: javascript-function-properties
title: Javascript function properties
wordpress_id: 43
categories:
- Javascript
---

Javascript is pretty cool and I'll admit that I don't get to do as much as I'd like with it. Today I'm going to briefly cover a few properties of any Javascript function which you can take advantage of:

  * arguments
  * callee
  * arity

### arguments

The arguments property contains an array of input parameters which may be passed to the function. It can be used to determine how many variables are being passed in and what they are, without each argument being explicitly declared in the function.

Using the "length" property of the arguments, you can iterate through the array for each parameter passed.
    
``` javascript
<script type="text/javascript">
    //<![CDATA[
    function myFunction()
    {
       var aArgs = myFunction.arguments;
       var iArgLength = aArgs.length;
       for (var i = 0; i < iArgLength; i++)
       {
         alert("Argument " + i + " = " + aArgs[i]);
       }
    }
    //]]>
</script>
```

Note that the arguments property can be preceeded by the function name i.e. myFunction.arguments[1].

The arguments array is especially useful with functions that can be called with a variable number of arguments, or with more arguments than they were formally declared to accept. 

### callee

The callee property can only be called from within a function, when run it will return a string value of the entire function (as if you were viewing the source of the page). Note that you can also use the function.toSource() method to obtain the function source.

### arity

The arity property specifies the number of arguments the current function expected to receive. This is different to arguments.length which indicates how many actual arguments were passed in.

### Examples

``` javascript
<script type="text/javascript">
    //<![CDATA[
    function myFunction()
    {
       return myFunction2('arg1','arg2');
    }
    
    function myFunction2(a,b,c)
    {
       alert(arguments.length);  //only passed in 2 arguments
       alert(myFunction2.arity)  //expects 3 arguments
       alert(arguments.callee);  //generates function source (with line feeds)
       alert(myFunction2.toSource());   //generates function source (with no line feeds)
    }
    //]]>
</script>
```
