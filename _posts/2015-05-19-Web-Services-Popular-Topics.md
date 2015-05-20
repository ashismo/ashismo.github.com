---
layout: post
category : java-Java/J2EE Popular Topics
tags : [Java/J2EE popular topics]
weight: 100
---

## What is web services?

 * A Web service is a method of communication between two electronic devices over a network. 
 * Web services are client and server applications that communicate over the World Wide Web's (WWW) HyperText Transfer Protocol (HTTP).
 * Two applications on two different platforms can communicate via web services.
 * Webservices are broadly classified into **RESTful** and **SOAP** web services.
   * SOAP stands for Simple Object Access Protocol
   * REST stands for REpresentational State Transfer
  
## SOAP (Simple Object Access Protocol)

### Core components of SOAP

Core components of SOAP webservices are


* UDDI - Universal Description, Discovery and Integration 
* WSDL - Web Services Description Language
* XSD - XML Schema Definition

#### UDDI - Universal Description, Discovery and Integration 

UDDI is a platform-independent framework for describing services, discovering businesses, and integrating business services by using the Internet.


 * UDDI stands for Universal Description, Discovery and Integration
 * UDDI is a directory for storing information about web services
 * UDDI is a directory of web service interfaces described by WSDL
 * UDDI communicates via SOAP
 * UDDI is built into the Microsoft .NET platform and supported by all major platform and software providers like Dell, Fujitsu, HP, Hitachi, IBM, Intel, Microsoft, Oracle, SAP etc.
 
##### How can UDDI be Used?

**Airlines** can register their services into an UDDI directory and **Travel agencies** can search UDDI to find airline's reservation interfaces. If the interface found, the agency can communicate with the service over SOAP protocol.

#### WSDL - Web Services Description Language

WSDL stands for Web Services Description Language written in XML.
**WSDL:**

 * describes the webservice
 * describes how to access them
 * is also used to locate Web services
 * is W3C recommendation

##### Sample WSDL Document

Below wsdl file provides a public function called **sayHelloWorld**. It takes string as input and string as output.
For example, if you pass "This is my first webservices program" as input then the output will be "Hello World! This is my first webservices program". 

Go through the inline comments to understand WSDL components  

**Web Service Name:** HelloWorldService

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">

&lt;definitions name="HelloWorldService"
	targetNamespace="http://www.examples.com/wsdl/HelloService.wsdl" xmlns="http://schemas.xmlsoap.org/wsdl/"
	xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/" xmlns:tns="http://www.examples.com/wsdl/HelloService.wsdl"
	xmlns:xsd="http://www.w3.org/2001/XMLSchema"&gt;

	&lt;!-- Request takes text as input. The type of the text is built-in String --&gt;
	&lt;message name="Request"&gt;
		&lt;part name="text" type="xsd:string" /&gt;
	&lt;/message&gt;

	&lt;!-- Response produces output in message variable. The type of the message is built-in String --&gt;
	&lt;message name="Response"&gt;
		&lt;part name="message" type="xsd:string" /&gt;
	&lt;/message&gt;

	&lt;!-- portType is an abstract set of operations supported by one or more endpoints.
		 sayHelloWorld operation is a part HelloWorld_PortType portType and takes Request and produces Response 
		 HelloWorld_PortType portType is binding with HelloWorld_Binding
	 --&gt;
	&lt;portType name="HelloWorld_PortType"&gt;
		&lt;operation name="sayHelloWorld"&gt;
			&lt;input message="tns:Request" /&gt;
			&lt;output message="tns:Response" /&gt;
		&lt;/operation&gt;
	&lt;/portType&gt;

	&lt;!-- binding defines the transport protocol as HTTP and message style as RPC or DOCUMENT --&gt;
	&lt;!-- If the WSDL is RPC type then xsd file won't be imported but for DOCUMENT type, the xsd file will be imported in wsdl file --&gt;
	&lt;!-- RPC style message is tightly coupled where as DOCUMENT style message is loosely coupled and can be validated against schema --&gt;
	&lt;binding name="HelloWorld_Binding" type="tns:HelloWorld_PortType"&gt;
		&lt;soap:binding style="rpc"
			transport="http://schemas.xmlsoap.org/soap/http" /&gt;
		&lt;operation name="sayHelloWorld"&gt;
			&lt;soap:operation soapAction="sayHelloWorld" /&gt;
			&lt;input&gt;
				&lt;soap:body encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"
					namespace="urn:examples:helloworldservice" use="encoded" /&gt;
			&lt;/input&gt;

			&lt;output&gt;
				&lt;soap:body encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"
					namespace="urn:examples:helloworldservice" use="encoded" /&gt;
			&lt;/output&gt;
		&lt;/operation&gt;
	&lt;/binding&gt;

	&lt;!-- Service is a collection of related endpoints. It says the webservice is available at http://www.ashismo.github.com/sayHelloWorld/ --&gt;
	&lt;service name="HelloWorld_Service"&gt;
		&lt;documentation&gt;WSDL File for HelloWorldService&lt;/documentation&gt;
		&lt;port binding="tns:HelloWorld_Binding" name="HelloWorld_Port"&gt;
			&lt;soap:address location="http://www.ashismo.github.com/sayHelloWorld/" /&gt;
		&lt;/port&gt;
	&lt;/service&gt;
&lt;/definitions&gt;

</code></pre>

### What is the difference between JAX-WS, AXIS2 and CXF?


 * **JAX-WS** is Java specification for SOAP based web services.**CXF or AXIS2** are the implementation of **JAX-WS** by Apache.
 * **JAX-WS** implementation comes by default with JDK. If you need WS-security, WS-Policy etc then you need to go for **CXF or AXIS2 or Metro**
 * **CXF** has better integration with Spring and other frameworks
 * **AXIS2** supports multiple languages like Java, C, C++ etc.
