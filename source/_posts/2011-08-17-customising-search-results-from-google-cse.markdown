---
comments: true
date: 2011-08-17 23:07:35
layout: post
slug: customising-search-results-from-google-cse
title: Customising search results from google cse
wordpress_id: 1005
categories:
- ColdFusion
---

Google custom search engine (cse) is pretty cool, in fact it's very cool. Within minutes you can have the ability to search your entire site all with a snippet of code! And for a nominal fee you can deliver these results without ads :)

We use google cse for most of our sites but the other day we ran into a slight problem. The site in question has both public and private access, the public site is delivered over _http_ and has plenty of indexable content. This is what we use google cse for. The issue came about once a user was logged in, their session is maintained via _secure cookies over https_. But the problem was that if they performed a search, all the results that cse returned directed users to _http_ which effectively logged them out of the site (i.e. the user was no longer on https, as we don't send cookies over http no session existed).

Even changing the site to index as _https_ inside the cse control panel didn't fix the issue, so we started to look for solutions to customise the results. Here are a few immediate options:
	
* Use the JSON API
* Return the results as XML
* Use custom templates

The JSON API is super cool but from what I can see there's a crazy limit of 150 queries per day unless you pay $5 per 1000 queries. Wow, no thanks.

XML is of course a tried and true approach but kinda clunky and verbose.

That leaves [custom templates](http://code.google.com/apis/customsearch/docs/js/rendering.html), from google:


> The specification that allows you to customize results is a minimal form of the template languages used by [OpenSocial](http://code.google.com/apis/opensocial/) and [jstemplates](http://code.google.com/apis/jstemplate/docs/howto.html).


This is a super cool and super easy way to modify the rendering of your custom google search results. Of course if you need to make big changes to the results then one of the other options is probably your best bet, but for what we wanted to achieve (delivering cse results as https) this was fine.

How does it work? Add your JavaScript snippet as usual:

``` javascript
<script type="text/javascript">
	google.load('search', '1', {language : 'en', "nocss": true});
	google.setOnLoadCallback(function() {
		var customSearchControl = new google.search.CustomSearchControl('003499422247080460488:qvs6fhb5k8o');
		customSearchControl.setResultSetSize(google.search.Search.FILTERED_CSE_RESULTSET);
		var options = new google.search.DrawOptions();
		options.setAutoComplete(true);
		google.search.Csedr.addOverride("bos_");
		customSearchControl.draw('cse', options);
	}, true);
</script>
```

We override the css from google and turn on autocomplete, apart from that the most important thing to note is the _addOverride()_ option. Essentially here you add a prefix specific to your site, in this case ours is "bos_". Google will look for this prefix, along with several specific values to render the content.

For example the main results appear in a section called _webResult_, so create a div with an id of your prefix + "webResult"

``` javascript
<div id="bos_webResult">
```

This is where google will look render the search results. A full example:

``` javascript
<div id="bos_webResult">
	<div class="gs-webResult gs-result"
	data-vars="{longUrl:function() {
	  var i = unescapedUrl.indexOf(visibleUrl);
	  return i < 1 ? visibleUrl : unescapedUrl.substring(i);}}">
		<table>
			<tr>
				<td valign="top">					
					<div class="gs-title">		
						<a class="gs-title" data-attr="{href:unescapedUrl.replace('http://', 'https://'),target:target}" data-body="html(title.replace('Our site tite :: ', ''))"></a>
					</div>
					<div class="gs-snippet" data-body="html(content)"></div>
					<div class="gs-visibleUrl gs-visibleUrl-long" data-body="longUrl()"></div>					
				</td>
			</tr>
		</table>
	</div>
</div>
```

You can see that we're using the template language "data-xxx" attributes on the "a" tag to modify the results returned from cse. In the example above we use the data-attr to replace "http://" with "https://" and also the data-body to replace the site title. This is possible because the templating approache evaluates JavaScript, nice!

There are many more options available with this approach, great to see google provide so many ways to render their search results.

This templating approach is another fantastic way to simplify the modifying the results from google cse. [Read more on their docs](http://code.google.com/apis/customsearch/docs/js/rendering.html).
