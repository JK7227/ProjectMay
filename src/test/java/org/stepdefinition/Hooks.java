package org.stepdefinition;

import java.io.IOException;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.test.BaseClass;
import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hooks extends BaseClass {
	@Before
	public void beforeScenario() {
		browserLaunch("Chrome");
		launchUrl("https://adactinhotelapp.com/");
		maximize();
		implicityWait(10);
	}

	@After
	public void afterScenario(Scenario s) throws IOException {
		TakesScreenshot tk=(TakesScreenshot)driver;
		byte[] scr = tk.getScreenshotAs(OutputType.BYTES);
		s.embed(scr, "image/png");	
		quit();
	}

}
