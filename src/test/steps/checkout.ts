import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { page, loginPage, cartPage, checkoutPage, inventoryPage, overviewPage, logger } from '../setup';

// Set the default timeout to 10 seconds
setDefaultTimeout(50000);

When('User clicks on the checkout button', async () => {
  try {
    await cartPage.clickCheckoutButton();
    logger.info("Clicked on checkout button");
  } catch (error) {
    logger.error(`Error occurred while clicking on checkout button: ${error}`);
    throw error;
  }
});

Then('User should be redirected to the checkout page', async () => {
  try {
    await checkoutPage.verifyRedirectedToCheckoutPage();
    logger.info("Verified redirection to checkout page");
  } catch (error) {
    logger.error(`Error occurred while verifying redirection to checkout page: ${error}`);
    throw error;
  }
});

When('User fills out the first name {string} form', async (firstName: string) => {
  try {
    await checkoutPage.enterFirstName(firstName);
    logger.info("Filled out first name form");
  } catch (error) {
    logger.error(`Error occurred while filling out first name form: ${error}`);
    throw error;
  }
});

When('User fills in the last name {string} form', async (lastName: string) => {
  try {
    await checkoutPage.enterLastName(lastName);
    logger.info("Filled out last name form");
  } catch (error) {
    logger.error(`Error occurred while filling out last name form: ${error}`);
    throw error;
  }
});

When('User fills out the postal code {string} form', async (postalCode: string) => {
  try {
    await checkoutPage.enterPostalCode(postalCode);
    logger.info("Filled out postal code form");
  } catch (error) {
    logger.error(`Error occurred while filling out postal code form: ${error}`);
    throw error;
  }
});

When('User clicks the continue button', async () => {
  try {
    await checkoutPage.clickContinueButton();
    logger.info("Clicked continue button");
  } catch (error) {
    logger.error(`Error occurred while clicking continue button: ${error}`);
    throw error;
  }
});

Then('User will be redirected to the checkout overview page', async () => {
  try {
    await overviewPage.verifyRedirectedToCheckoutOverviewPage();
    logger.info("Verified redirection to checkout overview page");
  } catch (error) {
    logger.error(`Error occurred while verifying redirection to checkout overview page: ${error}`);
    throw error;
  }
});

//Scenario Step Two
Then('User should see the details of the previously added product on the checkout step two page, including the product name, product description, and product price', async () => {
  try {
    await overviewPage.verifyProductDetailsOnCheckoutStepTwo();
    logger.info("Verified product details on checkout step two page");
  } catch (error) {
    logger.error(`Error occurred while verifying product details on checkout step two page: ${error}`);
    throw error;
  }
});

Then('User should see the details of the previously added product, including the payment information, shipping information, price total, and total', async () => {
  try {
    await overviewPage.verifyOrderDetails();
    logger.info("Verified order details");
  } catch (error) {
    logger.error(`Error occurred while verifying order details: ${error}`);
    throw error;
  }
});

When('User clicks on the finish button', async () => {
  try {
    await overviewPage.clickFinishButton();
    logger.info("Clicked on finish button");
  } catch (error) {
    logger.error(`Error occurred while clicking on finish button: ${error}`);
    throw error;
  }
});

Then('User should see Thank you for your order page', async () => {
  try {
    await overviewPage.verifyThankYouPage();
    logger.info("Verified Thank you page");
  } catch (error) {
    logger.error(`Error occurred while verifying Thank you page: ${error}`);
    throw error;
  }
});

Then('User clicks back to the home button', async () => {
  try {
    await overviewPage.clickBackToHomeButton();
    logger.info("Clicked back to home button");
  } catch (error) {
    logger.error(`Error occurred while clicking back to home button: ${error}`);
    throw error;
  }
});
