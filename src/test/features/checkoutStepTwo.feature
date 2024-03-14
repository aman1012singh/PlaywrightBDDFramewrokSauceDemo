Feature: Swag Labs Checkout Step Two Functionality

  Scenario Outline: Verify Checkout Step Two
    Given User is on the Swag Labs login page
    When User enters "<username>" and "<password>"
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
    And User will be redirected to the checkout overview page
    And User should see the details of the previously added product on the checkout step two page, including the product name, product description, and product price
    And User should see the details of the previously added product, including the payment information, shipping information, price total, and total
    And User clicks on the finish button
    And User should see Thank you for your order page
    And User clicks back to the home button

    Examples:
      | username      | password    | first_name | last_name | postal_code |
      | standard_user | secret_sauce| Test       | Data       | 12345       |