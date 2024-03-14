Feature: Swag Labs Checkout Step One Functionality

    Background:  Given User is on the Swag Labs login page

  Scenario Outline: Verify checkout Step One
    Given User is on the Swag Labs login page
    When User enters "standard_user" and "secret_sauce"
    And User clicks the login button on the valid case
    And User clicks the Add to Cart button on the inventory page
    And User should see the added product on the cart page with the corresponding details
    And User clicks the cart icon on the inventory page
    And User will be redirected to the cart page
    And User should see the details of the previously added product, including the product name, product description, and product price
    And User clicks on the checkout button
    And User should be redirected to the checkout page
    And User fills out the first name "<first_name>" form
    And User fills in the last name "<last_name>" form
    And User fills out the postal code "<postal_code>" form
    And User clicks the continue button
    Then User will be redirected to the checkout overview page
     Examples:
      | first_name | last_name | postal_code |
      | Test       | Data       | 12345       |

  
  