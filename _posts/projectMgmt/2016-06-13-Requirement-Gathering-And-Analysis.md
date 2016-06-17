---
layout: post
category : misc-Project Management
tags : [Requirement Gathering Tutorial]
weight: 10
---

{% include JB/setup %}


## Introduction

The software requirements are description of features and functionalities of the target system. The requirement gathering process gathers the requirement from client then analyze the requirement document and finally **System Requirements Specification** document needs to be prepared.

## Requirement Elicitation techniques

The requirement elicitation process consists the followings


* **Requirement Gathering:** Developers understand from client/end user about the expectation from the software.
* **Organizing Requirements:** Developers prioritize the requirements based on the criticallity of the requirements.
* **Negotiation and discussion:** Ambiguous or unrealistic requirements require discussion with various stakeholders. 
* **Documentation:** Functional and non functional requirements need to be documented and made available for the next phase processing.
 

There are different requirement elicitation techniques. Few important techniques are listed below


* **Brainstorming:** An informal debate is held among the various stakeholders and all their inputs are recorded for further requirement analysis. 
* **Interface Analysis:**
* **Interviews, Survey and Questionnaire:**
* **Prototyping:**
* **Requirement Workshops:**
* **Delphi Techniques:** This is very famous technique of requirement elicitation. This techniques involves structured interaction among a group of experts on the requirements. The identity of the participating experts are kept confidential to avoid influent on the process. There can be round of inputs from the experts till the process is finalized. The facilitator will have multi round **one to one interview** with each expert on the questionnaires and collect their opinions and answers.
 

#### Brainstorming Techniques


* An informal debate is held among the various stakeholders and all their inputs are recorded for further requirement analysis. 
* Brainstorming session will have a facilitator and will have time limit for the discussion. 
* **Advantages**
  * Helps to generate new ideas
  * Helps to encourage involvement of participants
  * Focuses on a topic or problem and coming up with many ideas or solutions
* **Disadvantage**
  * During brainstorming session, ideas are not explored.
* **Consideration for Brainstorming techniques**
  * Brainstorming is useful early in the requirements elicitation process.
  * Brainstorming can help to generate wide variety of views of the problem and solution.
* Brainstorming sessions are ideally divided into two phases
  * **Idea Generation Phase**: It focuses on the gathering all possible ideas within the time limit
  * **Idea Consolidation phase**: In this phase, the ideas are getting revised, organizing and reviewed. In this phase, each idea gets evaluated, then combine ideas after removing duplicate ideas. Finally, ideas will be rated and ranked after discussing with the team
* Different types of brainstorming techniques
  * **Open Brainstorming**: Participants call out the ideas and are capture by the meeting facilitator
  * **Individual Brainstorming**: Project team member creates a list of features/ideas concerning project issue/risk and shares with the facilitator
  * **Structured Brainstorming**: Meeting participant silently write down their ideas and facilitator requests


#### Interface Analysis technique


* Interfaces would include user interface, interfaces with external applications and interfaces with external hardware devices.
* Interface analysis helps to clarify the boundaries of the interacting application, identify the functionality, input and output of the each interface.
* When a system takes input from multiple systems then the interface analysis techniques is preferred for the enhancement/change in that system. 
* Interface analysis techniques can not be used to identify hardware interfaces with software applications.
* **Context Diagram** helps in interface analysis because it defines the boundary between a system and its environment, showing the entities that interact with it. This interface analysis tool is used as a part of the **Prepare for Interface Analysis** phase and NOT as a part of the **Conduct Interface Analysis**
* Steps in interface analysis are
  * Prepare for interface analysis
  * Conduct interface analysis
  * Define interface requirement
* Interface analysis helps in sizing and estimations as well. As far as sizing is concern, the interfaces are considered as non-functional requirements.
* In interface analysis, the **description** of each interface, **batch feed**, transactional files and interfaces to and from the systems (**input and output of each interface**) are very important factors. Also the **validation rules** that govern the interfaces and **events** that might trigger the interaction will be documented.
* In interface analysis, the user expectation is also documented.
* The **disadvantage** for the interface analysis technique is it does not provide an understanding of the underlying business process


#### Software Prototyping


* It is an activity of creating prototype of the software i.e. incomplete version of the software program. A prototype typically simulates only a few aspects of, and may be completely different from, the final product.
* Prototype is a working model of software with some limited functionality
* The prototype does not always hold the exact logic used in the actual software application and is an extra effort to be considered under effort estimation.
* **Dimensions of prototypes**
  * **Horizontal Prototype**: It provides the broad view of the entire system. It focuses more on user interface than low-level system functionality, such as database access
  * **Vertical Prototype**: It is more complete elaboration of a single subsystem or function. 
* **Types of prototyping**
  * **Throwaway prototyping**: This type of prototype gets discarded rather than becoming part of the final delivered software. When you need to come up with quick hand drawn prototype then the throw-away prototyping is the best choice.
  * **Evolutionary Prototyping**: The objective of this type of prototyping is to build very robust and structured prototype which can be refined later.
  * **Incremental Prototyping**:  Incremental prototyping refers to building multiple functional prototypes of the various sub systems and then integrating all the available prototypes to form a complete system
  * **Extreme prototyping**: This type of prototyping is used for developing web application. It breaks down the web devolopment into three phases one after another. In the **first phase**, the static prototypes i.e. HTML pages gets developed. In the **second phase**, the screens are integrated with the simulated services layer. In the **last phase** the actual services are implemented.

* Prototyping is used to allow the users evaluate developer proposals and try them out before implementation.
* **Advantages**
  * Increases user involvement in the product even before the actual implementation
  * User gets a better and visual understanding of the system.
  * Defects get identified in much earlier phase of the development.
* **Disadvantages**
  * If the scope of the actual system changes in the later phase of the development then the complexity gets increase since the prototyping gets started with very basic and less understanding abount the system.
  * Developers may try to reuse the existing prototypes to build the actual system, even when its not technically feasible
  * A prototype may create unrealistic expectation in clients and customers about the functionality, reliability or performance.
  * In the early stage of prototyping, one has to make assumption about underlying technologies


#### Interview/Survey/Questionnaire

##### Interview

* One of the best ways to gather requirements is to interview with the stakeholders. The interview can be
  * **Structured interview**: In structured interview
    * Design open and close ended questions
    * Define a logical flow of the questions
    * word the questions conciously and unambiguously
  * **Unstructured interview**: In unstructured interview
    * Determine the areas to be covered in the interview
    * determine the progression of the interview
* Interviewer should handle interviewee's concerns by clarifying them / recording for the future folloup
* An interview can have close ended questions but interviewer should try to get a precise answer for those.
* The important activity done while conducting interview is Scribing for better understanding of covered topic - scribing allows for effective documentation of the responses and details.

##### Survey


* Servey is also another way to improve the software considering the feedback from the stakeholders. Survey can be 
  * **Open-ended survey:** Survey held on overall application
  * **Close ended survey:** Survey held on a specific area of the application

Below are the followup phases of an interview/survey
* After an interview, the interviewer collates the scribing done during the interview and shares with the interviewee.
* For open ended surveys, themes that run across the responses are identified
* Statistical summary is provided for close ended surveys
* Survey results are summarized and shared with the project sponsor.
* An interviewee reviews the notes and identified issues in documentation and any uncovered areas.


#### Requirements Workshop


* **Requirement workshop** is a technique of **requirement gathering** or **requirement elicitation**.
* **Requirement workshop** technique works best when it is led by a trained facilitator and supported by a **scribe**
* Successful requirements workshop requires BA's to carefully select the stakeholders and SMEs to attend this short and intensive meeting.
* **Advantages**
  * This technique helps to get the broad view of areas under investigation.
  * It helps to increase productivity
* **Disadvantages**
  * Sometimes it is difficult to get the stakeholders available and arrange the required logistics. 
  * Also it is very time consuming to organize
* Activities required to conduct a requirement workshops
  * Facilitate the workshop
  * Identify with stakeholders need to participate in the workshop
  * Set the stage and expectation
  * Clarify the requirements and scope for the workshop
  * Follow-up on the workshop tasks and requirements, to generate final deliverables.

## Requirement Analysis


* Business analysts uses different models to analysis the gathered requirements.
* Analyzing requirements using models will help to 
  * identify gaps during the requirement elicitation phase.
  * define the expected behavior of the system.
* Business analysts validate business rule prior to the requirement analysis
* Business Analysts typically use three **Solution Development Methodologies(SDM)** during requirement analysis which depends on the types of project, culture and standard of the organization.
  * **Business process analysis:** focuses on the process improvement. It is done using
    * **Activity Diagram:** It is a graphical representations of workflows of stepwise activities and actions. An activity diagram will have a starting point, actions, decisions, splits and joins to show concurrent activities, and ending points. An activity diagram is also a type of flow chart.
    * **Flow chart**: represents an algorithm, workflow or process. The difference between **flow chart** and **activity diagram** is that the former is limited to the sequential process with condition checking points whereas the later helps us to understand the concurrent or parallel processes as well.
    * **Workflow model:** this model depicts the flow of work in a specific business area.
  * **Object-Oriented Analysis:** This methodologies views a system as a collection of objects that passes messages from one to another. This is achieved using 
    * **Use case diagram:** It depicts the different use cases performed by different types of users.
    * **Activity Diagram:** It is a graphical representations of workflows of stepwise activities and actions.
    * **Class diagram:** depicts the elements relevant to the solution. It also depicts the relationship between elements.
    * **Sequence diagram:** depicts the logic of use case descriptions.
  * **Structured Analysis** This technique focuses on the functional decomposition and data-flow analysis. It is achieved using one of the following
    * **flowchart:** represents an algorithm, workflow or process. 
    * **dataflow diagram:** It depicts how information flows through a system. How it is input, processed, stored and output from a system.
    * **entity relationship diagram:** It depicts the data structre of an application.

#### Process and flow models

Process and flow models helps BA to understand how system behaves through time. Benefit of knowing the process and flow models


* helps to understand the information expressed in the model
* helps you to choose the right model for your project
* helps you to effectively communicate project requirements

##### Dataflow diagram


* The dataflow diagram depicts how information flows through a system. How it is input, processed, stored and output from a system.
* Dataflow diagram is an ideal choice when solution involves the complex data processing.
* **disadvantages**
  * In dataflow diagram decisions and user interactions are not described. It only describes what system does.
  * DFD is not useful for the projects trying to improve processes or create interactive user-based system.
  * If a project requires knowledge of how system works and how people interact with the systems - in such cases can be described using DFD.

