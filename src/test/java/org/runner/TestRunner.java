package org.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.jvm.JVMReport;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources", glue = "org.stepdefinition", dryRun = false, 
                 tags = {"@regression , @retest" }, monochrome = true,
		         plugin = { "pretty",
		        		    "html:src\\test\\resources\\Reports\\HtmlReport",
				            "junit:src\\test\\resources\\Reports\\JunitReport\\junitreport.xml",
				            "json:src\\test\\resources\\Reports\\JsonReport\\jsonreport.json" })
public class TestRunner {
	@AfterClass
	public static void jvmReport() {
		JVMReport.generateJVMReport("src\\test\\resources\\Reports\\JsonReport\\jsonreport.json");
		System.out.println("-----Report Generated-----");

	}
}
