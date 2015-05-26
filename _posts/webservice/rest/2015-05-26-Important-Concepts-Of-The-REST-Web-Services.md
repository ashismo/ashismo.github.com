---
layout: post
category : java-Java/J2EE Popular Topics
tags : [Java/J2EE popular topics]
weight: 100
---

{% include JB/setup %}

### What is the difference between @QueryParam and @PathParam?

**@QueryParam** is used to access key/value pairs in the query string of the URL (the part after the ?). For example in the url http://example.com?q=searchterm, you can use @QueryParam("q") to get the value of q
