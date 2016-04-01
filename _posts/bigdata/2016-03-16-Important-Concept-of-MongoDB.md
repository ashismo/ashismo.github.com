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
 * Below table shows the comparison between RDBMS and MongoDB

SL NO | RDBMS | MongoDB
:---:|:---|:---
1 | Database | Database
2 | Table | Collection
3 | Tuple/Row | Document
4 | Column | Field
5 | Table Join | Embedded Documents
6 | Primary Key | Primary Key (Default key _id provided by mongodb itself)

* Unlike RDBMS, the mongoDB schema is more of UI pattern intutive.
