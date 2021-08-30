package org.hook;

import org.hook1.hooksreport;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources", glue = {"org.hook1" }, monochrome = true, dryRun = false, snippets = SnippetType.CAMELCASE, plugin = { "pretty",
				"html:C:\\Users\\HP\\eclipse-workspace\\Cucumber\\reportjason\\file","json:C:\\\\Users\\\\HP\\\\eclipse-workspace\\\\Cucumber\\\\reportjason\\\\ada.json" })
public class Hooksclass {
	@AfterClass
	public static void jvmreport() {
		hooksreport.jvmreport("C:\\Users\\HP\\eclipse-workspace\\Cucumber\\reportjason\\ada.json");

	}

}
