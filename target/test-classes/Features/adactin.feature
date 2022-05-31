Feature: To verify and validate the funtionalities of adactin hotel.

  Background: 
    Given The user should be in the adactin hotel home page.

  @smoke @retest
  Scenario Outline: To check the login page functionalities with valid datas.
    When To fill the "<username>" and "<password>" with valid credentials.
    And Click the login button.
    Then Check whether it directs us to the valid page or not.

    Examples: 
      | username     | password    |
      | Jothikrishna | Life@heaven |
      | JKrish98     | Life@heaven |

  @sanity @retest
  Scenario Outline: To check the login page functionalities with Invalid datas.
    When To fill the "<username>" and "<password>" with invalid credentials.
    And Click the login button.
    Then Check whether it directs us to the invalid page or not.

    Examples: 
      | username     | password        |
      | Jothikrishna | Life@heaven1998 |
      | JKrish98     | Life@h          |

  @regression @retest
  Scenario: To check the search hotel page functionalities.
    When To fill the "Jothikrishna" and "Life@heaven" with valid credentials.
    And Click the login button.
    And The user have to select options for location, hotel, room type, No. of room.
    And The user have to fill the datein and dateout option.
      | Datein     | Dateout    |
      | 28/05/2022 | 29/05/2022 |
      | 29/05/2022 | 30/05/2022 |
      | 30/05/2022 | 31/05/2022 |
    And The user have to select options for adult per person and children per person option and give search.
    Then Check whether it directs us to the select hotel page.
