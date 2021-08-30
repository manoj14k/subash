package org.test;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources", glue = {"org.test" }, monochrome = true, dryRun = false, snippets = SnippetType.CAMELCASE, plugin = { "pretty",
				"html:C:\\Users\\HP\\eclipse-workspace\\Cucumber\\report1\\file" })
public class Adactinpage {

}
