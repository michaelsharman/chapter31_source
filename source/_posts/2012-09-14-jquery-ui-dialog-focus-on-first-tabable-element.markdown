---
comments: true
date: 2012-09-14 06:27:29
layout: post
slug: jquery-ui-dialog-focus-on-first-tabable-element
title: jQuery UI dialog focus on first tabable element
wordpress_id: 1170
categories:
- Javascript
---

I've been using the [jQuery UI dialog](http://jqueryui.com/demos/dialog/) for a project recently, one thing that bugged me though, was that upon opening a dialog the first tabable element always gets focussed. This can be:

  * hyperlinks
  * input boxes
  * select boxes
  * buttons
  * textareas etc

An example of this is:


![](/images/uploads/2012/09/Screen-shot-2012-09-14-at-4.06.09-PM.png)

![](/images/uploads/2012/09/Screen-shot-2012-09-14-at-4.06.30-PM.png)

A quick way around this is to fire a [blur()](http://api.jquery.com/blur/) method, targeting the first _tabable_ element type of your dialog. So if I open up a dialog window with an id of _dialog_, I can do:

``` javascript
  $('#dialog').dialog('open');
  $('#dialog').find('a, select, input, textarea, button').first().blur();
```

I was hoping to put this inside the open() method of the dialog, but it doesn't seem to parse the contents of the dialog within that method. So the following did not work for me:

``` javascript
$('#dialog').dialog({
  autoOpen: false,
  maxWidth: 600,
  minWidth: 500,
  modal: true,
  resizable: false,
  open: function() {
    $(this).find('a, select, input, textarea, button').first().blur();
  }
});
```
