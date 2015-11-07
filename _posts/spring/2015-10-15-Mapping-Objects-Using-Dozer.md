---
layout: post
category : java-Misc
tags : [dozer]
weight: 120
---

{% include JB/setup %}

## Introduction

Dozer is a Java Bean to Java Bean mapper that recursively copies data from one object to another. Typically, these Java Beans will be of different complex types.
Dozer supports 


* simple property mapping, 
* complex type mapping, 
* bi-directional mapping, 
* implicit-explicit mapping, as well as 
* recursive mapping. 
This includes mapping collection attributes that also need mapping at the element level.  

Dozer is mainly used when your model in UI is different from the JPA Entities. Dozer sits between UI model and JPA Entities and maps UI data into entities or vice versa.

In this example, I am going to cover the basics of dozer configuration and custom dozer converter which helps to map data for exceptional scenarios when a simple way can not be used. Spring is used to run this stand alone application.

## Required Software


* Eclipse
* JDK 1.7 or above
* Maven 2.2.x or above
 
## Steps to write code

<div class="download-view">
	<span class="download">
		<a href="https://github.com/ashismo/repositoryForMyBlog/blob/master/spring/DoZerMapper.zip" target="_blank">DoZerMapper zip(11kb)</a>
	</span>
	<span class="view">
		<a href="https://github.com/ashismo/repositoryForMyBlog/tree/master/spring/DoZerMapper" target="_blank">DoZerMapper</a>
	</span>
</div>

The project structure and important files are shown below
<img src="https://cloud.githubusercontent.com/assets/11231867/10510257/8b077a3a-734f-11e5-9e2d-f2f40690a3c4.png"/>

SL No | File Name | Description
:---: | --- | ---
1 | **com.config.DozerConfig** | This is the spring annotation based configuration file which loads the dozer mapping file.
2 | **com.business.MapDozerImpl** | This class has business logic to map values from source to destination
3 | **com.dozerbean.*** | Lets assume the classes inside this package represents UI models in any real time project. ParentBean has the details of parents and Child bean has the details of child and included into parent bean as a list
4 | **com.entity.*** | Lets assume the classes inside this package represents JPA Entities in any real time project
5 | **com.custom.converter.ChildCustomConverter** | custom dozer converter which helps to map data for exceptional scenarios when a simple way can not be used. In this scenario, we are copying mother id into the list of children.
6 | **Main** | This is the entry point of this dozer mapper application. This class creates an ParentBean objects (lets assume it is a UI model in real time project) and calls doxer framework to map into entities.

The purpose of this application is to copy from ParentBean to Parent object

<img src="https://cloud.githubusercontent.com/assets/11231867/10510854/0e517afa-7353-11e5-8f49-b778d46d47ec.png"/>


* **POM.xml**

<pre class="prettyprint highlight"><code class="language-xml" data-lang="xml">
&lt;project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"&gt;
	&lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
	&lt;groupId&gt;com.ashish.dozer&lt;/groupId&gt;
	&lt;artifactId&gt;DoZerMapper&lt;/artifactId&gt;
	&lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;
	&lt;build&gt;
		&lt;sourceDirectory&gt;src&lt;/sourceDirectory&gt;
		&lt;plugins&gt;
			&lt;plugin&gt;
				&lt;artifactId&gt;maven-compiler-plugin&lt;/artifactId&gt;
				&lt;version&gt;3.1&lt;/version&gt;
				&lt;configuration&gt;
					&lt;source /&gt;
					&lt;target /&gt;
				&lt;/configuration&gt;
			&lt;/plugin&gt;
		&lt;/plugins&gt;
	&lt;/build&gt;
	&lt;properties&gt;
		&lt;spring.version&gt;4.1.4.RELEASE&lt;/spring.version&gt;
	&lt;/properties&gt;
	&lt;dependencies&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;com.google.code.gson&lt;/groupId&gt;
			&lt;artifactId&gt;gson&lt;/artifactId&gt;
			&lt;version&gt;2.3.1&lt;/version&gt;
		&lt;/dependency&gt;
		&lt;!-- Dozer dependency START --&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;net.sf.dozer&lt;/groupId&gt;
			&lt;artifactId&gt;dozer&lt;/artifactId&gt;
			&lt;version&gt;5.5.1&lt;/version&gt;
		&lt;/dependency&gt;
		&lt;!-- Dozer dependency END --&gt;

		&lt;dependency&gt;
			&lt;groupId&gt;org.springframework&lt;/groupId&gt;
			&lt;artifactId&gt;spring-core&lt;/artifactId&gt;
			&lt;version&gt;${spring.version}&lt;/version&gt;
		&lt;/dependency&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;org.springframework&lt;/groupId&gt;
			&lt;artifactId&gt;spring-context&lt;/artifactId&gt;
			&lt;version&gt;${spring.version}&lt;/version&gt;
		&lt;/dependency&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;org.springframework&lt;/groupId&gt;
			&lt;artifactId&gt;spring-web&lt;/artifactId&gt;
			&lt;version&gt;${spring.version}&lt;/version&gt;
		&lt;/dependency&gt;
		
		&lt;dependency&gt;
			&lt;groupId&gt;org.jvnet.jaxb2_commons&lt;/groupId&gt;
			&lt;artifactId&gt;jaxb2-basics-runtime&lt;/artifactId&gt;
			&lt;version&gt;0.9.4&lt;/version&gt;
		&lt;/dependency&gt;
	&lt;/dependencies&gt;
&lt;/project&gt;
</code></pre>

* **DozerConfig.java**: This is the spring annotation based configuration file which loads the dozer mapping file.

```
package com.config;

import java.util.Arrays;
import java.util.List;

import org.dozer.DozerBeanMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(value={"com.business"})
public class DozerConfig {
	
	@Bean(name = "org.dozer.Mapper")
	  public DozerBeanMapper dozerBean() {
	    List<String> mappingFiles = Arrays.asList(
	      "globalMapping.xml", 
	      "dozerMapping.xml"
	    );
	
	    DozerBeanMapper dozerBean = new DozerBeanMapper();
	    dozerBean.setMappingFiles(mappingFiles);
	    return dozerBean;
	  }
}

```


 * **MapDozerImpl.java**: This class has business logic to map values from source to destination.

<pre class="prettyprint highlight"><code class="language-java" data-lang="java"> 
package com.business;

import org.dozer.DozerBeanMapper;
import org.dozer.Mapper;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.stereotype.Component;

import com.config.DozerConfig;
import com.dozerbean.ParentBean;
import com.entity.Parent;

@Component
public class MapDozerImpl implements MapDozer{

	public void mapBean(ParentBean srcParent, Parent destParent) {
		AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(DozerConfig.class);
		Mapper dozerBeanMapper = (Mapper) context.getBean("org.dozer.Mapper", DozerBeanMapper.class);
		dozerBeanMapper.map(srcParent, destParent, "parentChildMapping");
	}
}

</code></pre>

* **ChildCustomConverter.java**: custom dozer converter which helps to map data for exceptional scenarios when a simple way can not be used. In this scenario, we are copying mother id into the list of children.
<pre class="prettyprint highlight"><code class="language-java" data-lang="java"> 
package com.custom.converter;

import java.util.List;

import org.dozer.DozerConverter;
import org.dozer.Mapper;
import org.dozer.MapperAware;

import com.entity.Child;

public class ChildCustomConverter extends DozerConverter<Integer, List> implements MapperAware {

	public ChildCustomConverter() {
		super(Integer.class, List.class);
	}
	
	public ChildCustomConverter(Class<Integer> prototypeA, Class<List> prototypeB) {
		super(prototypeA, prototypeB);
	}
	
	public void setMapper(Mapper arg0) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Integer convertFrom(List src, Integer dest) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Child> convertTo(Integer src, List dest) {
		// TODO Auto-generated method stub
		if(src != null && dest != null && dest.size() > 0) {
				for(Object o : dest) {
					if(o instanceof Child) {
						Child c = (Child)o;
//						c.setfId(src);
						c.setmId(src);
					}
			}
		}
		return dest;
	}

}
</code></pre>

* **Main.java**: This is the entry point of this dozer mapper application. This class creates an ParentBean objects (lets assume it is a UI model in real time project) and calls doxer framework to map into entities.
<pre class="prettyprint highlight"><code class="language-java" data-lang="java"> 
import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.business.MapDozerImpl;
import com.config.DozerConfig;
import com.dozerbean.ChildBean;
import com.dozerbean.ParentBean;
import com.entity.Parent;
import com.google.gson.Gson;


public class Main {

	public static void main(String args[]) {
		Main main = new Main();
		main.loadBean();
	}

	private static ParentBean getParentBean() {
		ParentBean pb = new ParentBean();
		pb.setfId(10);
		pb.setmId(11);
		pb.setmAge(40);
		pb.setfAge(40);
		pb.setfName("XYZ");
		pb.setmName("ABC");
		
		List<ChildBean> childList = new ArrayList<ChildBean>();
		for(int i = 0; i < 3; i++) {
			ChildBean c = new ChildBean();
			c.setId(i + 1);
			c.setfId(10);
			c.setmId(11);
			c.setName("MNO" + i);
			c.setAge(12 + i);
			
			childList.add(c);
		}
		pb.setChild(childList);
		return pb;
	}
	
	public void loadBean() {
		AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(DozerConfig.class);
        MapDozerImpl app = context.getBean(MapDozerImpl.class);
        ParentBean pb = getParentBean();
        
        Gson gson = new Gson();
		String json = gson.toJson(pb);
		System.out.println("Input Parent Bean JSON: " + json);
		
		
        Parent p = new Parent();
        app.mapBean(pb, p);
        System.out.println("Output Parent JSON: " + gson.toJson(p));
	}
	
}
</code></pre>

* **com.dozerbean.*** and **com.entity.*** Refer the above image for the respective object structures and download the code to get details about these bean classes.
