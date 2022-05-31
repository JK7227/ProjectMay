$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/adactin.feature");
formatter.feature({
  "name": "To verify and validate the funtionalities of adactin hotel.",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To check the login page functionalities with valid datas.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@retest"
    }
  ]
});
formatter.step({
  "name": "To fill the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" with valid credentials.",
  "keyword": "When "
});
formatter.step({
  "name": "Click the login button.",
  "keyword": "And "
});
formatter.step({
  "name": "Check whether it directs us to the valid page or not.",
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
        "password"
      ]
    },
    {
      "cells": [
        "Jothikrishna",
        "Life@heaven"
      ]
    },
    {
      "cells": [
        "JKrish98",
        "Life@heaven"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user should be in the adactin hotel home page.",
  "keyword": "Given "
});
formatter.match({
  "location": "AdactinHotel.the_user_should_be_in_the_adactin_hotel_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To check the login page functionalities with valid datas.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@retest"
    }
  ]
});
formatter.step({
  "name": "To fill the \"Jothikrishna\" and \"Life@heaven\" with valid credentials.",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinHotel.to_fill_the_and_with_valid_credentials(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the login button.",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinHotel.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether it directs us to the valid page or not.",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinHotel.check_whether_it_directs_us_to_the_valid_page_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user should be in the adactin hotel home page.",
  "keyword": "Given "
});
formatter.match({
  "location": "AdactinHotel.the_user_should_be_in_the_adactin_hotel_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To check the login page functionalities with valid datas.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@retest"
    }
  ]
});
formatter.step({
  "name": "To fill the \"JKrish98\" and \"Life@heaven\" with valid credentials.",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinHotel.to_fill_the_and_with_valid_credentials(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the login button.",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinHotel.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether it directs us to the valid page or not.",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinHotel.check_whether_it_directs_us_to_the_valid_page_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To check the login page functionalities with Invalid datas.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    },
    {
      "name": "@retest"
    }
  ]
});
formatter.step({
  "name": "To fill the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" with invalid credentials.",
  "keyword": "When "
});
formatter.step({
  "name": "Click the login button.",
  "keyword": "And "
});
formatter.step({
  "name": "Check whether it directs us to the invalid page or not.",
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
        "password"
      ]
    },
    {
      "cells": [
        "Jothikrishna",
        "Life@heaven1998"
      ]
    },
    {
      "cells": [
        "JKrish98",
        "Life@h"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user should be in the adactin hotel home page.",
  "keyword": "Given "
});
formatter.match({
  "location": "AdactinHotel.the_user_should_be_in_the_adactin_hotel_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To check the login page functionalities with Invalid datas.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    },
    {
      "name": "@retest"
    }
  ]
});
formatter.step({
  "name": "To fill the \"Jothikrishna\" and \"Life@heaven1998\" with invalid credentials.",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinHotel.to_fill_the_and_with_invalid_credentials(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the login button.",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinHotel.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether it directs us to the invalid page or not.",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinHotel.check_whether_it_directs_us_to_the_invalid_page_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user should be in the adactin hotel home page.",
  "keyword": "Given "
});
formatter.match({
  "location": "AdactinHotel.the_user_should_be_in_the_adactin_hotel_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To check the login page functionalities with Invalid datas.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    },
    {
      "name": "@retest"
    }
  ]
});
formatter.step({
  "name": "To fill the \"JKrish98\" and \"Life@h\" with invalid credentials.",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinHotel.to_fill_the_and_with_invalid_credentials(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the login button.",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinHotel.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether it directs us to the invalid page or not.",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinHotel.check_whether_it_directs_us_to_the_invalid_page_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user should be in the adactin hotel home page.",
  "keyword": "Given "
});
formatter.match({
  "location": "AdactinHotel.the_user_should_be_in_the_adactin_hotel_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To check the search hotel page functionalities.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@retest"
    }
  ]
});
formatter.step({
  "name": "To fill the \"Jothikrishna\" and \"Life@heaven\" with valid credentials.",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinHotel.to_fill_the_and_with_valid_credentials(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the login button.",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinHotel.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user have to select options for location, hotel, room type, No. of room.",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinHotel.the_user_have_to_select_options_for_location_hotel_room_type_No_of_room()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user have to fill the datein and dateout option.",
  "rows": [
    {
      "cells": [
        "Datein",
        "Dateout"
      ]
    },
    {
      "cells": [
        "28/05/2022",
        "29/05/2022"
      ]
    },
    {
      "cells": [
        "29/05/2022",
        "30/05/2022"
      ]
    },
    {
      "cells": [
        "30/05/2022",
        "31/05/2022"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AdactinHotel.the_user_have_to_fill_the_datein_and_dateout_option(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user have to select options for adult per person and children per person option and give search.",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinHotel.the_user_have_to_select_options_for_adult_per_person_and_children_per_person_option_and_give_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether it directs us to the select hotel page.",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinHotel.check_whether_it_directs_us_to_the_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.after({
  "status": "passed"
});
});