package org.hook1;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;


public class Loginpage {
	WebDriver driver;
	@Given("user is on the Adactin page")
	public void user_is_on_the_Adactin_page() {
	WebDriverManager.chromedriver().setup();
	 driver = new ChromeDriver();
	driver.get("https://adactinhotelapp.com/");
	driver.manage().window().maximize();
	driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
	}

	@When("user should enter {string} and {string} and click login button")
	public void user_should_enter_and_and_click_login_button(String username, String password) {
		WebElement findElement = driver.findElement(By.id("username"));
		findElement.sendKeys(username);
		driver.findElement(By.id("password")).sendKeys(password);
		driver.findElement(By.id("login")).click();
	}
	
	@When("user should enter the {string},{string},{string},{string},{string},{string},{string},{string}")
	public void user_should_enter_the(String location, String hotels, String roomtype, String numberofrooms, String checkin, String checkout, String adults, String chldrenroom) {
		driver.findElement(By.id("location")).sendKeys(location);
		driver.findElement(By.id("hotels")).sendKeys(hotels);
		driver.findElement(By.id("room_type")).sendKeys(roomtype);
		driver.findElement(By.id("room_nos")).sendKeys(numberofrooms);
		driver.findElement(By.id("datepick_in")).clear();
		driver.findElement(By.id("datepick_in")).sendKeys(checkin);
		driver.findElement(By.id("datepick_out")).clear();
		driver.findElement(By.id("datepick_out")).sendKeys(checkout);
		driver.findElement(By.id("adult_room")).sendKeys(adults);
		driver.findElement(By.id("child_room")).sendKeys(chldrenroom);
	}
	@When("user should select the hotel")
	public void user_should_select_the_hotel() {
		driver.findElement(By.id("Submit")).click();
		driver.findElement(By.id("radiobutton_0")).click();
		driver.findElement(By.id("continue")).click();
	}

	@When("user should book a hotel so enter the {string},{string},{string},{string},{string},{string},{string},{string},{string}")
	public void user_should_book_a_hotel_so_enter_the(String firstname, String lastname, String billingaddress, String creditcard, String cardtype, String expdate, String expmonth, String expyear, String cvv) {
		driver.findElement(By.id("first_name")).sendKeys(firstname);
		driver.findElement(By.id("last_name")).sendKeys(lastname);
		driver.findElement(By.id("address")).sendKeys(billingaddress);
		driver.findElement(By.id("cc_num")).sendKeys(creditcard);
		driver.findElement(By.id("cc_type")).sendKeys(cardtype);
		driver.findElement(By.id("cc_exp_month")).sendKeys(expmonth);
		driver.findElement(By.id("cc_exp_year")).sendKeys(expyear);
		driver.findElement(By.id("cc_cvv")).sendKeys(cvv);
	}
	@Then("user should get the order id")
	public void user_should_get_the_order_id() {
		driver.findElement(By.id("book_now")).click();
		WebElement findElement = driver.findElement(By.id("order_no"));
		String attribute = findElement.getAttribute("value");
		System.out.println(attribute);
		driver.quit();
	}


}
