---
layout: post
category : java-Misc
tags : [xml2json_json2xml]
weight: 130
---

{% include JB/setup %}

## Introduction

There are situations when we need to convert XML to JSON or vice versa. For example, you are writing json based REST web service application and there are some existng service that you need to use which takes only XML as input. Also the need could be other way around where you need to convert XML to JSON. Based on the requirement you may need to do this in Client side or server side. The client side XML2JSON or JSON2XML conversion is shown in this blog.


## Required Software

  * HTML
  * JQuery

## Steps to write code

<div class="download-view">
	<span class="download">
		<a href="" target="_blank">JSON2XML_XML2JSON zip(0kb)</a>
	</span>
	<span class="view">
		<a href="" target="_blank">JSON2XML_XML2JSON</a>
	</span>
</div>


**JsonToXmlToJson.html** 
  This file has jquery implementation to convert JSON o XML and vice versa.
  
<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml"> 
&lt;html&gt;
	&lt;head&gt;
		&lt;script src="jquery.min.js"&gt;&lt;/script&gt;
		&lt;script src="x2js.js"&gt;&lt;/script&gt;
		&lt;script type="text/javascript"&gt;
			function convertToJSON() {
				var input = $('textarea#input').val();
				 var x2js = new X2JS();
				 var json = JSON.stringify(x2js.xml_str2json(input))
				$('textarea#output').val(json);
			}
			
			function convertToXml() {
				var input = $('textarea#input').val();
				 var x2js = new X2JS();
				 var xml = x2js.json2xml_str($.parseJSON(input));
				$('textarea#output').val(xml);
			}
		&lt;/script&gt;
	&lt;/head&gt;
	&lt;body&gt;
		Input: &lt;textarea id='input' rows="4" cols="50"&gt;&lt;/textarea&gt;&lt;/br&gt;
		&lt;input type='submit' value='JSON2XML' onclick='convertToXml();'/&gt;
		&lt;input type='submit' value='XML2JSON' onclick='convertToJSON();'/&gt;
		&lt;br&gt;
		Output: &lt;textarea id='output' rows="4" cols="50"&gt;&lt;/textarea&gt;
		
	&lt;/body&gt;
&lt;/html&gt;

</code></pre>
