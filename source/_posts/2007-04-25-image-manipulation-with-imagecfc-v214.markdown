---
comments: true
date: 2007-04-25 23:20:26
layout: post
slug: image-manipulation-with-imagecfc-v214
title: Image manipulation with imageCFC v2.14
wordpress_id: 117
categories:
- ColdFusion
---

**Update:** as of May 30th 2007 version 2.17 has been released! [See the site](http://www.opensourcecf.com/imagecfc/) for more information

Ok so I'm a little late on this one, but the new version of [imageCFC](http://www.opensourcecf.com/imagecfc/) (v2.14) was released on March 7th 2007. The big feature add is exact size thumbnails using the "cropToExact" argument of the "resize()" method:



> This argument, when combined with a specified width, specified height, and the preserveAspect argument being set to true will cause a image to be resized then cropped to fit exactly within the specified dimensions.



The nice thing about using imageCFC is that it leverages Java so is easily portable (you don't need to install a cfx_ which can be painful in a shared hosting environment).

A list of features:

  * READ jpg, gif, and PNG files, and provide dimensions and other details.
  * Images can be read from local files *OR* URLs.
  * scale images to a specific width or height
  * resize images to a specific width AND height
  * rotate images at 90 degree angles
  * flip images horizontally and vertically
  * Add text overlays to images using TrueType fonts
  * Watermark one image with another image
  * Image filters: fast blur, gaussian blur, box blur, sharpen, posterize
  * Control compression quality of JPG images.
  * WRITE images in JPG and PNG format

**Note:** GIF files can be read and manipulated but they have to be saved as PNGs)

Yes...make sure you read that line again. Java cannot **write** to gif files so you have to save as a .png instead after you resize/crop etc. Of course you can read information about a gif, just not manipulate and save as a gif.

My initial tests with resizing a gif and saving as a png produced mixed results which unfortunately were often not great. I'll have to keep testing and play with the compression settings etc, but at this stage it looks as though jpg gives the best results.

Doug Hughes has a nice little workaround for the [alagad](http://www.alagad.com/) image component (commercial but also based on Java) which you can [see here](http://www.doughughes.net/index.cfm?event=viewEntry&entryId=88).

I don't know how good this work around would be for some uses as you need to extract a package to the Java class path. This would more than likely be an issue for those in a shared hosting environment.
