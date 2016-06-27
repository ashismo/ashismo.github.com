---
layout: post
category : misc-Software Design
tags : [Software Design Tutorial]
weight: 10
---

{% include JB/setup %}


## Introduction


* Software Design helps developers to develop and implement the user requirements in the form of software.
* There are different types of software design
  * **Architechtural Design:** 
    * Shows relationship between major modules.
    * Finalizes on the design pattern to be used.
  * **Design Design:** Focuses on the data structure representation
  * **Interface Design:** Shows the flow of the information
  * **Component Design:** provides a higher level of abstraction and divides the problem into sub-problems, each associated with component partitions
* Good software design will have the following features
  * Abstraction
  * Highly cohesive modules
  * Loosely coupled modules
  * Partitionaed
  * Maintability and
  * possibility of the forward engineering
* **Coupling** and **Cohesion**
  * **Coupling:**  is the degree of interdependencies between modules
  * **Cohesion:**  cohesion measures the strength of relationship between pieces of functionality within a given module
  * A good design will be loosely coupled and tight cohesion
  * A focused class which performs its own responsibility is considered highly cohesive class. In contrast, suppose you are using 2 independent classes. Change in one class requires change in another class. This is considered that both the classes are tightly coupled.
* **Abstraction**
  * Suppose there are two projects managed by one project manager. The team under him has two leads and developers under leads. Each lead manages one project each. If we build a system then there will be following level of abstractions\
    * Project manager can see information of 2 projects. He can also see employee information as well.
    * Leads can see th project where he is assigned.
