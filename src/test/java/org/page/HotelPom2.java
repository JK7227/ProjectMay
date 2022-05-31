package org.page;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.test.BaseClass;

public class HotelPom2 extends BaseClass {
	public HotelPom2() {
		PageFactory.initElements(driver, this);
	}
	@FindBy(id="radiobutton_0")
	private static WebElement radiobtn;
	@FindBy(id="continue")
	private static WebElement continuebtn;
	@FindBy(id="first_name")
	private static WebElement firstname;
	@FindBy(id="last_name")
	private static WebElement lastname;
	@FindBy(id="address")
	private static WebElement address;
	@FindBy(id="cc_num")
	private static WebElement cardnumber;
	@FindBy(id="cc_type")
	private static WebElement cardtype;
	@FindBy(id="cc_exp_month")
	private static WebElement expirymonth;
	@FindBy(id="cc_exp_year")
	private static WebElement expiryyear;
	@FindBy(id="cc_cvv")
	private static WebElement cvvnumber;
	@FindBy(id="book_now")
	private static WebElement bookbtn;
	@FindBy(id="order_no")
	private static WebElement orderno;
	public static WebElement getRadiobtn() {
		return radiobtn;
	}
	public static WebElement getContinuebtn() {
		return continuebtn;
	}
	public static WebElement getFirstname() {
		return firstname;
	}
	public static WebElement getLastname() {
		return lastname;
	}
	public static WebElement getAddress() {
		return address;
	}
	public static WebElement getCardnumber() {
		return cardnumber;
	}
	public static WebElement getCardtype() {
		return cardtype;
	}
	public static WebElement getExpirymonth() {
		return expirymonth;
	}
	public static WebElement getExpiryyear() {
		return expiryyear;
	}
	public static WebElement getCvvnumber() {
		return cvvnumber;
	}
	public static WebElement getBookbtn() {
		return bookbtn;
	}
	public static WebElement getorderno() {
		return orderno;
	}
	
	}
