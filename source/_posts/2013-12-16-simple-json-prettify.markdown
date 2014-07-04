---
layout: post
title: "Simple JSON prettify"
date: 2013-12-16 14:24
comments: true
categories:
- javascript
---
I went looking for a quick and easy way to style JSON content for display in the browser and quickly came across this [answer at stack overflow](http://stackoverflow.com/questions/4810841/json-pretty-print-using-javascript/7220510#7220510) with a [corresponding jsfiddle entry](http://jsfiddle.net/unLSJ/).

However the problem is that this is kinda broken, the output isn't valid JSON because the keys aren't quoted. It's just outputting a JavaScript object intead. A quick fix (and slight refactor) to the JavaScript gave me what I needed, I couldn't post on SO as I don't have the reputation (yeah that's annoying) so I'm posting here for reference and I [forked the original JSFiddle](http://jsfiddle.net/michaelsharman/HLzxw/3/).

```javascript
var prettyPrint = (function () {
    'use strict';

   function replacer (match, pIndent, pKey, pVal, pEnd) {
        var key = '<span class=json-key>';
        var val = '<span class=json-value>';
        var str = '<span class=json-string>';
        var r = pIndent || '';
        if (pKey) {
            r = r + key + pKey.replace(/[: ]/g, '') + '</span>: ';
        }
        if (pVal) {
            r = r + (pVal[0] == '"' ? str : val) + pVal + '</span>';
        }
        return r + (pEnd || '');
    }

    function render (obj) {
        var jsonLine = /^( *)("[\w]+": )?("[^"]*"|[\w.+-]*)?([,[{])?$/mg;
        return JSON.stringify(obj, null, 3)
            .replace(/&/g, '&amp;').replace(/\\"/g, '\\&quot;')
            .replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(jsonLine, replacer);
    }

    return {
        render: render
    };
}());
```

And the CSS that goes with it:

```css
pre {
   background-color: ghostwhite;
   border: 1px solid silver;
   padding: 10px 20px;
   margin: 20px;
}

.json-key {
   color: brown;
}

.json-value {
   color: navy;
}

.json-string {
   color: olive;
}
```

## The end result

The original:

```javascript
[
   {
      name: "Earth",
      order: 3,
      stats: {
         life: true,
         mass: 5.973600000000001e+24
      }
   },
   {
      name: "Saturn",
      order: 6,
      stats: {
         life: null,
         mass: 5.6846e+26
      }
   }
]
```

The result after a minor change:

```javascript
[
   {
      "name": "Earth",
      "order": 3,
      "stats": {
         "life": true,
         "mass": 5.973600000000001e+24
      }
   },
   {
      "name": "Saturn",
      "order": 6,
      "stats": {
         "life": null,
         "mass": 5.6846e+26
      }
   }
]
```
