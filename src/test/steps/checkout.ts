import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';

import {page, loginPage, cartPage,checkoutPage,inventoryPage, overviewPage} from '../setup';

// Set the default timeout to 10 seconds
setDefaultTimeout(50000);
When('User clicks on the checkout button', async () => {
  await cartPage.clickCheckoutButton();
});

Then('User should be redirected to the checkout page', async () => {
  await checkoutPage.verifyRedirectedToCheckoutPage();
});

When('User fills out the first name {string} form', async (firstName: string) => {
  await checkoutPage.enterFirstName(firstName);
});

When('User fills in the last name {string} form', async (lastName: string) => {
  await checkoutPage.enterLastName(lastName);
});

When('User fills out the postal code {string} form', async (postalCode: string) => {
  await checkoutPage.enterPostalCode(postalCode);
});

When('User clicks the continue button', async () => {
  await checkoutPage.clickContinueButton();
});

Then('User will be redirected to the checkout overview page', async () => {
  await overviewPage.verifyRedirectedToCheckoutOverviewPage();
});







//Scenario Step Two:::::
Then('User should see the details of the previously added product on the checkout step two page, including the product name, product description, and product price', async () => {
  await overviewPage.verifyProductDetailsOnCheckoutStepTwo();
});

Then('User should see the details of the previously added product, including the payment information, shipping information, price total, and total', async () => {
  await overviewPage.verifyOrderDetails();
});

When('User clicks on the finish button', async () => {
  await overviewPage.clickFinishButton();
});

Then('User should see Thank you for your order page', async () => {
  await overviewPage.verifyThankYouPage();
});

Then('User clicks back to the home button', async () => {
  await overviewPage.clickBackToHomeButton();
});