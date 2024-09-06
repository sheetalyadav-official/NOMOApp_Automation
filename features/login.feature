Feature: Login functionality of Swag Lab Mobile App

  Scenario: Verify all elements are visible on login screen

    Given the app is launched and user is on login screen
    Then user should see all the login elements

  Scenario Outline: Verify login for Standard user

    Given the app is launched and user is on login screen
    When user click on Standard user
    Then username and password textfield must be populated with "<user>" credentials
    When user click on login button
    Then user is logged in and can view dashboard screen 

    |user|
    |standard_user|  

  Scenario Outline: Verify login for Locked user

    Given the app is launched and user is on login screen
    When user click on Locked user
    Then username and password textfield must be populated with "<user>" credentials
    When user click on login button
    Then user should see a error message

    |user|
    |standard_user|   
    
  Scenario Outline: Verify login for Problem user

    Given the app is launched and user is on login screen
    When user click on Problem user
    Then username and password textfield must be populated with "<user>" credentials
    When user click on login button
    Then user is logged in and can view dashboard screen  

    |user|
    |problem_user|      

  Scenario Outline: Verify user login with different combinations of credentials

    Given the app is launched and user is on login screen
    When user enters "<username>" and "<password>"
    When user click on login button
    Then the user should see a screen and message according to login "<status>"

    Examples:
      | username          | password        |status |
      |                   |                 |Failure|
      | bob@example.com   |                 |Failure| 
      | alice@example.com | 10203040        |Failure| 
      | 1@2.com           | f-o-o           |Failure| 
      | bob@example.com   | 10203040        |Failure| 
      | standard_user     | secret_sauce    |Success|