package org.hook1;

import org.test.Baseclass;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class hooksclass2 extends Baseclass {
@Before
public void beforescenario() {
	getDriver();
 getUrl("https://adactinhotelapp.com/");

}
@After
public void afterscenario() {
	closeCurrentWindow();

}
	
		}
	
	


