---
layout: post
category : bigdata-Concept
tags : [bigdata]
weight: 110
---

{% include JB/setup %}

## What is Mongodb?


 * MongoDB is a document database
 * MongoDB saves data in JSON (Java Script object Notation) format
 * It is easier to share data across multiple low cost servers
 * MongoDB natively supports **Scaling Out** across low cost servers through its sharding feature however, relational database is basically **Scaling Up** in nature.That means if data volume grows up we generally need expensive system to support
 * Multitable join and transaction is not the design consideration to retain scalability. Atomic read and write is the design consideration for the mongo DB.
