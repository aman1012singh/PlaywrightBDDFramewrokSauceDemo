import { Given, When, Then, Before, After, setDefaultTimeout } from '@cucumber/cucumber';

import {page, loginPage, cartPage,inventoryPage,checkoutPage } from '../setup';


// Set the default timeout to 10 seconds
setDefaultTimeout(50000);

When('User clicks the Add to Cart button on the inventory page', async () => {
   await inventoryPage.clickAddToCartButton();
});

Then('User should see the added product on the cart page with the corresponding details', async () => {
  await inventoryPage.verifyProductDetails();
});

When('User clicks the cart icon on the inventory page', async () => {
  await inventoryPage.clickCartIcon();
});

Then('User will be redirected to the cart page', async () => {
  await cartPage.verifyRedirectedToCartPage();
});

Then('User should see the details of the previously added product, including the product name, product description, and product price', async () => {
  await cartPage.verifyProductDetailsOnCartPage();
});

