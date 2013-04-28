---
comments: true
date: 2006-12-12 22:47:51
layout: post
slug: outputting-content-from-within-a-method
title: Outputting content from within a method
wordpress_id: 88
categories:
- ColdFusion
---

Normally I'm with the crowd who says "don't output content or use <cfinclude> from within a function". Like a lot of people I would much rather return whatever value I need to the calling page/function, so that I then have a choice with what I want to do with it.

Still, the other day I found myself doing what I don't normally do...wanting to output a simple text value from within a method.

My scenario was quite complex so I won't go into all the details, suffice to say that there were several methods being called eventuating in a final method call to display().

The display() method was outputting a simple string value (yikes!). Now the actual problem I encountered was that my output wasn't actually displaying :(

I had output="true" in the display() method but nothing was showing. It took me a few minutes to trace through the code and discover that because display() was being called from another function (and I wanted to output a value from within display(), that the initial functions output attribute also needed to be set to true. This I did not know.

So the following will not work because output is set to false in function1():

``` ruby
<cffunction name="function1" access="public" returntype="void" output="false">
   <cfscript>

      //no output in this method, just call another method
      display();

      return;			

   </cfscript>
</cffunction>

<!--- PRIVATE METHODS --->
<cffunction name="display" access="private" returntype="void" output="true">
   <cfsavecontent variable="content">
      <h1>Header</h1>

      Content to display
   </cfsavecontent>

   <cfoutput>#content#</cfoutput>

   <cfreturn />
</cffunction>
```

But if you change the output attribute to true:
    
``` ruby
<cffunction name="function1" access="public" returntype="void" output="true">
```

Lovely output!

Now if only I kept true to my rule of not outputting content in a method...
