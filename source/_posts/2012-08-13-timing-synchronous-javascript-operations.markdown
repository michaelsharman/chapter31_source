---
comments: true
date: 2012-08-13 21:24:05
layout: post
slug: timing-synchronous-javascript-operations
title: Timing synchronous JavaScript operations
wordpress_id: 1158
categories:
- Javascript
---

There's a cool little method on the _console_ object that allows you to track how long an operation took to run. It's called [console.time](https://developer.mozilla.org/en-US/docs/DOM/console.time).

Basically you just start a timer at the top of the code you want to time, like so:

``` javascript
console.time('timer-name');

// your javascript goes here

console.timeEnd('timer-name');
```

Each _timer_ block should have a unique name (in the example above I called my timer 'timer-name'), and you can have up to 10,000 timers running on a single page.

By calling _console.timeEnd()_, the browser will write to the console how long (in milliseconds) the code took to run since you first called console.time();

This works in Chrome 2+, Firefox 10+, Opera and Safari 4+. Typically IE support is a little sketchy, however I [found a cool custom function](http://stackoverflow.com/questions/3516515/console-time-in-ie8-developer-tools?answertab=active#tab-top) on Stack Overflow that allows you to use console.time/timeEnd in IE7/8 etc.

``` javascript
//console.time implementation for IE
if(window.console && typeof(window.console.time) == "undefined") {
    console.time = function(name, reset){
        if(!name) { return; }
        var time = new Date().getTime();
        if(!console.timeCounters) { console.timeCounters = {} };
        var key = "KEY" + name.toString();
        if(!reset && console.timeCounters[key]) { return; }
            console.timeCounters[key] = time;
        };

    console.timeEnd = function(name){
        var time = new Date().getTime();
        if(!console.timeCounters) { return; }
        var key = "KEY" + name.toString();
        var timeCounter = console.timeCounters[key];
        if(timeCounter) {
            var diff = time - timeCounter;
            var label = name + ": " + diff + "ms";
            console.info(label);
            delete console.timeCounters[key];
        }
        return diff;
    };
}
```
