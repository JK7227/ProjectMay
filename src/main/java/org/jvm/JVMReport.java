package org.jvm;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JVMReport {
	public static void generateJVMReport(String json) {
		File f = new File(System.getProperty("user.dir") + "\\src\\test\\resources\\Reports\\JVMReport");
		Configuration con = new Configuration(f, "Adactin");
		con.addClassifications("Browser Name", "Chrome");
		con.addClassifications("OS", "Windows 7");

		List<String> jsonFile = new ArrayList<String>();
		jsonFile.add(json);
		ReportBuilder r = new ReportBuilder(jsonFile, con);
		r.generateReports();

	}

}
