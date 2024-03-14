Feature: Swag Labs Login Functionality

  Scenario Outline: Verify valid Swag Labs login
    Given User is on the Swag Labs login page
    When User enters "<username>" and "<password>"
    And User clicks the login button on the valid case
    Then Swag Labs title should be displayed at the top of the page

    Examples:
      | username       | password      |
      | standard_user  | secret_sauce  |

  Scenario Outline: Verify invalid Swag Labs login
    Given User is on the Swag Labs login page
    When User enters "<username>" and "<password>"
    And User clicks the login button on the invalid case
    Then Showing Epic sad face: Sorry, this user has been locked out 
    Examples:
      | username        | password      |
      | locked_out_user | secret_sauce  |
  
  Scenario Outline: Verify problem Swag Labs login
    Given User is on the Swag Labs login page
    When User enters "problem_user" and "secret_sauce"
    And User clicks the login button on the problem case
    Then The image should not be displayed



 