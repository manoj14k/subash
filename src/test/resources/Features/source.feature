Feature: Verifying Adactin details

  
  Scenario Outline: verifying Adactin login with valid credentials
    Given user is on the Adactin page
    When user should enter "<username>" and "<password>" and click login button
    And user should enter the "<location>","<hotels>","<roomtype>","<numberofrooms>","<checkin>","<checkout>","<adults>","<chldrenroom>"
    And user should select the hotel
    And user should book a hotel so enter the "<firstname>","<lastname>","<billingaddress>","<creditcard>","<cardtype>","<expdate>","<expmonth>","<expyear>","<cvv>"
    Then user should get the order id

    Examples: 
      | username | password  | location | hotels      | roomtype | numberofrooms | checkin    | checkout   | adults  | chldrenroom | firstname | lastname | billingaddress       | creditcard       | cardtype | expdate | expmonth | expyear | cvv |
      | Manoj14k | max563686 | London   | Hotel Greek | Standard | 2 - TWO       | 20/08/2021 | 22/08/2021 | 2 - Two | 1 - One     | manoj     | kumar    | c-7,adzelane,chennai | 1234567890123456 | Visa     |      12 | October  |    2022 | 123 |

