package org.hook1;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;
import net.masterthought.cucumber.Reportable;
import net.masterthought.cucumber.json.support.Status;

public class hooksreport {
	public static void jvmreport(String json) {
		File file = new File("C:\\Users\\HP\\eclipse-workspace\\Cucumber\\reportjason");
		Configuration configure = new Configuration(file,"adactin");
		configure.addClassifications("platform", "win 10");
		configure.addClassifications("browser", "chrome");
		configure.addClassifications("Sprint no","34");
		List<String> li = new ArrayList<String>();
		li.add(json);
		ReportBuilder report = new ReportBuilder(li, configure);
		report.generateReports();
		
		

	}

}
