package org.page;

public class AdactinUtility extends HotelPom {
	public AdactinUtility() {
		super();
	}

	public void login(String name, String pass) {
		sendKeys(getUsername(), name);
		sendKeys(getPass(), pass);
		
	}

	public void click() {
		click(getLogin());

	}

	public void selection1(int l, int h, int r, int rc) {
		selectByIndex(getLocation(), l);
		selectByIndex(getHotel(), h);
		selectByIndex(getRoom(), r);
		selectByIndex(getRoomcount(), rc);
		
	}
	public void selection2(String datein, String dateout) {		
		sendKeys(getCheckin(), datein);
		sendKeys(getCheckout(), dateout);

	}
	public void selection3(int adults, int child) {
		selectByIndex(getAdultsperroom(), adults);
		selectByIndex(getChildperroom(), child);
		click(getSearch());
	}

	public void clickButtons() {
		click(getRadiobtn());
		click(getContinuebtn());

	}

	public void personalInfo(String first, String last, String add, String Cno, int Ctype, int Emonth, int Eyear,
			String cvv) throws InterruptedException {
		sendKeys(getFirstname(), first);
		sendKeys(getLastname(), last);
		sendKeys(getAddress(), add);
		sendKeys(getCardnumber(), Cno);
		selectByIndex(getCardtype(), Ctype);
		selectByIndex(getExpirymonth(), Emonth);
		selectByIndex(getExpiryyear(), Eyear);
		sendKeys(getCvvnumber(), cvv);
		click(getBookbtn());
		Thread.sleep(3000);
		String text = getAttribute(getOrderno());
		System.out.println("Order #: " + text);

	}

}
