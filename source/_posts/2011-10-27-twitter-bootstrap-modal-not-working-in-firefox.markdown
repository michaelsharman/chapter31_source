---
comments: true
date: 2011-10-27 07:00:45
layout: post
slug: twitter-bootstrap-modal-not-working-in-firefox
title: Twitter bootstrap - modal not working in firefox
wordpress_id: 1015
categories:
- ColdFusion
tags:
- bootstrap
---

Quick heads up for those having issues getting the modal window in the twitter bootstrap to work in firefox, I had a problem where the overlay would show but not the actual modal window content. Seems there is a problem if you're using animation (fade etc).

[See here for more information.](https://github.com/twitter/bootstrap/issues/240)

For now we use no animation, so a typical modal source example might be (note: no animation as is the default in the docs):

``` javascript
<div id="preview-modal" class="modal hide">
	<div class="modal-header">
		<a href="#" class="close">&times;</a>
		<h3>Modal Heading</h3>
	</div>
	<div class="modal-body">
		<p>One fine body…</p>
	</div>
	<div class="modal-footer">
		<a href="#" class="btn primary">Primary</a>
		<a href="#" class="btn secondary">Secondary</a>
	</div>
</div>
```

Typically there is "fade" in the class of the parent div which we've removed.
