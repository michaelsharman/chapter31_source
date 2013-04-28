---
comments: true
date: 2006-10-12 23:51:13
layout: post
slug: when-not-to-use-thisformsubmit
title: When not to use this.form.submit()
wordpress_id: 56
categories:
- Javascript
---

So ok, I've run into this problem in the past where I'm using an onclick event to submit a form from a button control. When you click the button you get a nice little Javascript error stating:

> this.form.submit is not a function

Bugger...wtf?

This only seems to happen when you have a form element named "submit" already on your page, so the browser treats that "submit" element as an object which is of course NOT a function.

I seem to run into this when I want 2 ways of submitting the form as follows:

``` javascript
<form>
   ...
   <input type="submit" name="submit" id="submit" value="Submit Me" />
   <input type="button" name="submit2" id="submit2" value="Save Me" onclick="this.form.submit();" />
</form>
```

Note the name of the submit button is "submit", hence causing an error :(

Make sure you don't name your submit button as "submit" when you want to have multiples submits:

``` javascript
<form>
   ...
   <input type="submit" name="btnSubmit" id="btnSubmit" value="Submit Me" />
   <input type="button" name="btnSave" id="btnSave" value="Save Me" onclick="this.form.submit();" />
</form>
```
