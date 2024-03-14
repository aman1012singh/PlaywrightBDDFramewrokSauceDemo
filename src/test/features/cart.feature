Feature: Swag Labs Add One Product Functionality

  Scenario Outline: Add one product to the cart page
    Given User is on the Swag Labs login page
    When User enters "standard_user" and "secret_sauce"
    And User clicks the login button on the valid case
    Then Swag Labs title should be displayed at the top of the page
    And User clicks the Add to Cart button on the inventory page
    Then User should see the added product on the cart page with the corresponding details
    And User clicks the cart icon on the inventory page
    Then User will be redirected to the cart page
    And User should see the details of the previously added product, including the product name, product description, and product price

