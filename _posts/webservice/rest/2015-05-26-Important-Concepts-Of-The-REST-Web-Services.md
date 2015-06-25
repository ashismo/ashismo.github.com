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


### Can we make RESTful webservices stateful?

By design, RESTful is stateless for better scalability. However, you can add state, but it's at a trade-off in scalability.  
One of the most common reasons to add state to REST is for authentication. Once a secure connection is established, a secure cookie can be sent to the client. This cookie is then added by the client to all requests for the session. The server maintains state and then loads that state in with every request based on the cookie
