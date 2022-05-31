package org.stepdefinition;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.page.AdactinUtility;
import org.page.HotelPom;
import org.test.BaseClass;
import io.cucumber.java.en.*;

public class AdactinHotel extends BaseClass {
	public static AdactinUtility a;
	public static HotelPom h;

	@Given("The user should be in the adactin hotel home page.")
	public void the_user_should_be_in_the_adactin_hotel_home_page() {
		Assert.assertTrue("Home page", getCurrentUrl().contains("adactin"));
	}

	@When("To fill the {string} and {string} with valid credentials.")
	public void to_fill_the_and_with_valid_credentials(String user, String pass) {
		a = new AdactinUtility();
		h = new HotelPom();
		a.login(user, pass);
	}

	@When("Click the login button.")
	public void click_the_login_button() {
		a.click();

	}

	@Then("Check whether it directs us to the valid page or not.")
	public void check_whether_it_directs_us_to_the_valid_page_or_not() {
		Assert.assertTrue("Valid login", getCurrentUrl().contains("SearchHotel"));

	}

	@When("To fill the {string} and {string} with invalid credentials.")
	public void to_fill_the_and_with_invalid_credentials(String user, String pass) {
		a = new AdactinUtility();
		h = new HotelPom();
		a.login(user, pass);
	}

	@Then("Check whether it directs us to the invalid page or not.")
	public void check_whether_it_directs_us_to_the_invalid_page_or_not() {
		Assert.assertTrue("Valid login", getText(h.getInvalid()).contains("Invalid"));
	}

	@When("The user have to select options for location, hotel, room type, No. of room.")
	public void the_user_have_to_select_options_for_location_hotel_room_type_No_of_room() {
		a.selection1(2, 0, 2, 1);
	}

	@When("The user have to fill the datein and dateout option.")
	public void the_user_have_to_fill_the_datein_and_dateout_option(io.cucumber.datatable.DataTable data) {
		List<Map<String, String>> li = data.asMaps();
		a.selection2(li.get(2).get("Datein"), li.get(2).get("Dateout"));
	}

	@When("The user have to select options for adult per person and children per person option and give search.")
	public void the_user_have_to_select_options_for_adult_per_person_and_children_per_person_option_and_give_search() {
		a.selection3(1, 0);
	}

	@Then("Check whether it directs us to the select hotel page.")
	public void check_whether_it_directs_us_to_the_select_hotel_page() {
		Assert.assertTrue("Hotel Selection", getCurrentUrl().contains("SelectHotel"));
		System.out.println("Have to validate two more modules");
	}

	

}
