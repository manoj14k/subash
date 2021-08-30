$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/source.feature");
formatter.feature({
  "name": "Verifying Adactin details",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "verifying Adactin login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "user is on the Adactin page",
  "keyword": "Given "
});
formatter.step({
  "name": "user should enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and click login button",
  "keyword": "When "
});
formatter.step({
  "name": "user should enter the \"\u003clocation\u003e\",\"\u003chotels\u003e\",\"\u003croomtype\u003e\",\"\u003cnumberofrooms\u003e\",\"\u003ccheckin\u003e\",\"\u003ccheckout\u003e\",\"\u003cadults\u003e\",\"\u003cchldrenroom\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user should select the hotel",
  "keyword": "And "
});
formatter.step({
  "name": "user should book a hotel so enter the \"\u003cfirstname\u003e\",\"\u003clastname\u003e\",\"\u003cbillingaddress\u003e\",\"\u003ccreditcard\u003e\",\"\u003ccardtype\u003e\",\"\u003cexpdate\u003e\",\"\u003cexpmonth\u003e\",\"\u003cexpyear\u003e\",\"\u003ccvv\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user should get the order id",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "location",
        "hotels",
        "roomtype",
        "numberofrooms",
        "checkin",
        "checkout",
        "adults",
        "chldrenroom",
        "firstname",
        "lastname",
        "billingaddress",
        "creditcard",
        "cardtype",
        "expdate",
        "expmonth",
        "expyear",
        "cvv"
      ]
    },
    {
      "cells": [
        "Manoj14k",
        "max563686",
        "London",
        "Hotel Greek",
        "Standard",
        "2 - TWO",
        "20/08/2021",
        "22/08/2021",
        "2 - Two",
        "1 - One",
        "manoj",
        "kumar",
        "c-7,adzelane,chennai",
        "1234567890123456",
        "Visa",
        "12",
        "October",
        "2022",
        "123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "verifying Adactin login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "user is on the Adactin page",
  "keyword": "Given "
});
formatter.match({
  "location": "Loginpage.user_is_on_the_Adactin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Manoj14k\" and \"max563686\" and click login button",
  "keyword": "When "
});
formatter.match({
  "location": "Loginpage.user_should_enter_and_and_click_login_button(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter the \"London\",\"Hotel Greek\",\"Standard\",\"2 - TWO\",\"20/08/2021\",\"22/08/2021\",\"2 - Two\",\"1 - One\"",
  "keyword": "And "
});
formatter.match({
  "location": "Loginpage.user_should_enter_the(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should select the hotel",
  "keyword": "And "
});
formatter.match({
  "location": "Loginpage.user_should_select_the_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should book a hotel so enter the \"manoj\",\"kumar\",\"c-7,adzelane,chennai\",\"1234567890123456\",\"Visa\",\"12\",\"October\",\"2022\",\"123\"",
  "keyword": "And "
});
formatter.match({
  "location": "Loginpage.user_should_book_a_hotel_so_enter_the(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should get the order id",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginpage.user_should_get_the_order_id()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "verifying Adactin login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "user is on the Adactin page",
  "keyword": "Given "
});
formatter.step({
  "name": "user should enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and click login button",
  "keyword": "When "
});
formatter.step({
  "name": "user should enter the \"\u003clocation\u003e\",\"\u003chotels\u003e\",\"\u003croomtype\u003e\",\"\u003cnumberofrooms\u003e\",\"\u003ccheckin\u003e\",\"\u003ccheckout\u003e\",\"\u003cadults\u003e\",\"\u003cchldrenroom\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user should select the hotel",
  "keyword": "And "
});
formatter.step({
  "name": "user should book a hotel so enter the \"\u003cfirstname\u003e\",\"\u003clastname\u003e\",\"\u003cbillingaddress\u003e\",\"\u003ccreditcard\u003e\",\"\u003ccardtype\u003e\",\"\u003cexpdate\u003e\",\"\u003cexpmonth\u003e\",\"\u003cexpyear\u003e\",\"\u003ccvv\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user should get the order id",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "location",
        "hotels",
        "roomtype",
        "numberofrooms",
        "checkin",
        "checkout",
        "adults",
        "chldrenroom",
        "firstname",
        "lastname",
        "billingaddress",
        "creditcard",
        "cardtype",
        "expdate",
        "expmonth",
        "expyear",
        "cvv"
      ]
    },
    {
      "cells": [
        "Manoj14k",
        "max563686",
        "London",
        "Hotel Greek",
        "Standard",
        "2 - TWO",
        "20/08/2021",
        "22/08/2021",
        "2 - Two",
        "1 - One",
        "manoj",
        "kumar",
        "c-7,adzelane,chennai",
        "1234567890123456",
        "Visa",
        "12",
        "October",
        "2022",
        "123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "verifying Adactin login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "user is on the Adactin page",
  "keyword": "Given "
});
formatter.match({
  "location": "Loginpage.user_is_on_the_Adactin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Manoj14k\" and \"max563686\" and click login button",
  "keyword": "When "
});
formatter.match({
  "location": "Loginpage.user_should_enter_and_and_click_login_button(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter the \"London\",\"Hotel Greek\",\"Standard\",\"2 - TWO\",\"20/08/2021\",\"22/08/2021\",\"2 - Two\",\"1 - One\"",
  "keyword": "And "
});
formatter.match({
  "location": "Loginpage.user_should_enter_the(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should select the hotel",
  "keyword": "And "
});
formatter.match({
  "location": "Loginpage.user_should_select_the_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should book a hotel so enter the \"manoj\",\"kumar\",\"c-7,adzelane,chennai\",\"1234567890123456\",\"Visa\",\"12\",\"October\",\"2022\",\"123\"",
  "keyword": "And "
});
formatter.match({
  "location": "Loginpage.user_should_book_a_hotel_so_enter_the(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should get the order id",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginpage.user_should_get_the_order_id()"
});
formatter.result({
  "status": "passed"
});
});