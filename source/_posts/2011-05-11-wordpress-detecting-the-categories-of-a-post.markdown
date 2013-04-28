---
comments: true
date: 2011-05-11 13:48:49
layout: post
slug: wordpress-detecting-the-categories-of-a-post
title: Wordpress - detecting the categories of a post
wordpress_id: 909
categories:
- PHP
- Wordpress
---

I was creating a Wordpress child theme (the best way to modify/override your themes) tonight and had the need to have different display options depending on which categories the blog article had. So for example if I had a post categorised with "portfolio", I wanted to hide the comments form which usually sits at the bottom of a post.

The following snippet will loop over all post categories, if it finds that "portfolio" is one of the categories assigned to the current post then a local variable (boolean) is set which you can use to hide Wordpress functions anywhere in the current template.

``` php
<?php
	$isPortfolio = false;
	
	$categories = get_the_category();

	foreach($categories as $cat)
	{
		if ($cat->cat_name == 'portfolio')
		{
			$isPortfolio = true;
			break;
		}		
	}
?>
```

These changes were at the top of my child theme's _single.php_ template. Not displaying the comments form was as simple as:

```
<?php if (!$isPortfolio){comments_template('', true);} ?>
```

## Update 12th May 2011
Thanks to Martin in the comments below for alerting me to the fact that Wordpress already has something for this, has_category($category, $post);

```
<?php $isPortfolio = has_category('portfolio'); ?>
```

Note I didn't need the 2nd argument as it defaults to the current post.
