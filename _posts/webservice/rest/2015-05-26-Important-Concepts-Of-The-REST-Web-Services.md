---
layout: post
category : java-Java/J2EE Popular Topics
tags : [Java/J2EE popular topics]
weight: 100
---

{% include JB/setup %}

### What is the difference between @QueryParam and @PathParam and @FormParam ?

**@QueryParam** is used to access key/value pairs in the query string of the URL (the part after the ?). For example in the url http://example.com?q=searchterm, you can use @QueryParam("q") to get the value of q.
**@PathParam** is used to match a part of the URL as a parameter. For example in an url of the form http://example.com/books/{bookid}, you can use @PathParam("bookid") to get the id of a book.
**@FormParam** is used for POST request in RESTful web services. However, it works for GET request as well. But it is recomended to use @QueryParam or @PathParam for GET request
