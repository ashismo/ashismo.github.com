---
layout: post
category : misc-Project Management
tags : [Project Management Tutorial]
weight: 1
---

## Introduction

#### Procure Management:
Procurement management is one such form of management, where goods and services are acquired from a different organization or firm. All organizations deal with this form of management at some point in the life of their businesses.

**Procure Management Process:**
Procurement Management process will help you to purchase goods and services from external suppliers.
Procure management deals with 

* how to issue Purchase Orders, 
* receive and approve deliveries, 
* endorse supplier payments and 
* manage suppliers against their contracts
 

Followings are the steps of procurements

* Identify the goods and services to procure
* Complete Purchase Orders and issue to suppliers
* Agree on delivery timeframes and methods
* Receive goods and services from suppliers
* Review and accept the items procured
* Approve supplier payments
* 

Generally, as a part of procurement, all financial aspects (like payment terms, cost of the services/products, penalty if delivery date is missed etc) should be clearly mentioned to avoid confusion in future and to maintain good and sustainable relationship with vendors.

**Request for Proposal (RFP)**
A request for proposal (RFP) is a document that an organization posts to elicit bids from potential vendors for a desired IT solution. The RFP specifies what the customer is looking for and establishes evaluation criteria for assessing proposals.  

An RFP

* may include SOW (Statement of Work), which describes the tasks to be performed by the winning bidder and a timeline for providing deliverables.
* Alerts suppliers that the selection process is competetive.

Key sections in an RFP are

* **Submission Details:** Provides deadlines, PoC for any clarifications
* **Introduction:** Brief overview of the company and requirement for the product/services
* **Business overview and background:** Provides the brief overview of the business, products and market sectors.
* **Detailed Specification:** Provides the parameter details (e.g. qualitative measure and requirement) about the vendor selection process.
* **Assumptions and Constrains:** Assumptions/Constrains that the prospective vendors to be made aware of
* **Terms and Conditions:** All terms and conditions to be listed to make fair and honest response from the vendor like pricing option, payment terms, renewal, delivery penalties etc. 


#### Estimation Technique

There are two most popular approaches for estimation, namely Bottom Up and Top Down estimation techniques.

##### Bottom up estimation technique


* In the Bottom-up estimation technique the amount of work, duration and cost are set at the task level. Then the task level cost and duration will be aggregated to determine the total cost of the project. 
* Bottom-up estimating is the most accurate approach to estimating cost and duration. 
* The drawback of this technique is, it requires more time for estimation. **Work Breakdown Structure (WBS)** is an example of the bottom-up technique. 
* This technique relies on the project team members identifying the tasks and organizing them into specific group or work packages.

##### Top down estimation technique


* This estimation is derived from someone who uses experience and/or information to determine the project duration and total cost.
* This type of estimations are made by top managers who have little knowledge to the processes used to complete the project.
* This technique is not very accurate. This is good for rough estimation
* Function Point (FP) and Use Case Point (UCP) are the example of topdown estimation technique

##### Bottom-up vs Top-down approach 

Conditions | Macro Estimate (Top-down) | Micro Estimate (Bottom-up)
:---: | --- | ---
Cost and time important | | X
Internal, small project | X | 
Fixed-price contract | | X
Customer wants details | | X
Unstable scope | X | 


#### WBS Estimation


* WBS stands for **Work Breakdown Structure**
* In a large scale project multiple vendors and large number of tasks/activities are involved. In such scenarios, requirement based estimation techniques like **Test Step Point (TSP)**, **Test Case Point (TCP)** are not ideal.
* In WBS, a relatively complex project is divided into simpler and manageable tasks. These small chunks are supervised and estimated.
* Again tasks are further divided into sub tasks.
* The dependencies to be identified for activities, tasks and sub-tasks.
* The team needs to be identified for individual tasks/sub tasks and ownership to be assigned
* Then estimation to be done for each sub tasks.
* 3 point approach for estimation is followed i.e.
  * **Best Case Estimate (BC)**
  * **Worst Case Estimate (WC)**
  * **Most Likely Estimate (MC)**
  * The final estimattion is calculated as **[ BC + (4 x MC) + WC ] / 6**

##### Advantages


* Risks and dependencies are identified during the initial stage of the estimation
* Realistic estimation because it considers Best Case, Worst case and Most likely cases as mentioned above

##### Disadvantages

The challanges includes in identifying right tasks to break it down further and tasks/subtasks are kept low enough to track the work and should require no more than 80Hrs to complete.


#### Function Point Estimation


* The amount of business functionality provided to a user is measured in **Function Point** unit
* Function points are used to compute a functional size measurement (FSM) of software
* **Elementary Process (EP)** is a smallest unit of functional user requirement that 
  * is meaningful to the user
  * constitues a complete function
* There are two types of functions
  * **Data Function:** There are two types of data functions
    * **Internal Logic Files (ILF):** is a logical data or control information that resides with the application boundary being measured using Function Point
    * **External Logic Files (ELF):** is a logical data or control information that resides outside the application boundary but used by the application being measured using Function Point
  * **Transaction Functions:** There are three types of transaction functions
    * **External Inputs:** This transaction function mainly deals with the data from UI or other application. This data is used to maintain one or more **Internal Logic Files (ELF)**
    * **External Outputs:** This transaction function mainly deals with the data that comes out of the system.
    * **External Inquiries:** This transaction function mainly deals with the both input and output components that result in data retrieval.

#### Use Case Point Estimation


* Use case point estimation technique is primarily used in OOPs based project
* This technique primarily measures the sizes of the functional requirement and NFRs (Non Functional Requirements) are not major consideration here.
* The principle of this estimation methodologies are 
  * break down the functional requirements into Use cases
  * Break use cases further down into transactions.
  * Generally, count modules as use cases and simple CRUD as transactions within the use cases
  * Complex CRUD can be broken down as a seperate use cases on a case by case basis. Generally discussion required for such cases.
  * Validations, Error Messages, Notification messages can not be counted as transactions
  * Re-usable components/repeated transactions or functionality should be counted once at an application level. For example use of date picker in multiple screens.
  * Data element/ UI complexity can not be counted as transaction
