import { Given, When, Then, Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import {page, loginPage, cartPage,inventoryPage,checkoutPage ,logger} from '../setup';

import { Console } from 'console';
// Set the default timeout to 10 seconds
setDefaultTimeout(50000);


//###########################################################################################################################
//Scenario1:  Verify valid Swag Labs login
Given('User is on the Swag Labs login page', async () => {
  try {
    await loginPage.open();
    logger.info('Successfully opened the Swag Labs login page');
  } catch (error) {
    logger.error(`Failed to open the Swag Labs login page $ {error}`);
    throw error;
  }
});



When('User enters {string} and {string}', async (username: string, password: string) => {
  try {
    await loginPage.login(username, password);
    logger.info('Successfully entered username and password');
  } catch (error) {
    logger.error(`Failed to enter username and password $ {error}`);
    throw error;
  }
});


When('User clicks the login button on the valid case', async () => {
  try {
    await loginPage.clickLoginButton();
    logger.info('Successfully clicked the login button');
  } catch (error) {
    logger.error(`Failed to click the login button $ {error}`);
    throw error;
  }
});


Then('Swag Labs title should be displayed at the top of the page', async () => {
  try {
    const title = await loginPage.getSwagLabsTitle();
    if (title !== 'Swag Labs') {
      throw new Error(`Expected title to be 'Swag Labs', but found '${title}'`);
    }
    logger.info('Swag Labs title is displayed at the top of the page');
  } catch (error) {
    logger.error(`Error occurred: $ {error}`);
    throw error;
  }
});
//####################################################################################################################
//Scenario-2: Verify invalid Swag Labs login
When('User clicks the login button on the invalid case', async function () {
  try {
    await loginPage.clickLoginButton();
    logger.info('Login button clicked successfully');
  } catch (error) {
    logger.error(`Error occurred while clicking login button: $ {error}`);
    throw error;
  }
});

Then('Showing Epic sad face: Sorry, this user has been locked out', async function () {
  try {
    await loginPage.visibleErrorButton();
    logger.info('Epic sad face displayed: Sorry, this user has been locked out');
  } catch (error) {
    logger.error(`Error occurred while checking for Epic sad face: $ {error}`);
    throw error;
  }
});
//####################################################################################################################
//Scenario 3: Verify problem Swag Labs login
When('User clicks the login button on the problem case', async function () {
  try {
    await loginPage.clickLoginButton();
    logger.info('Login button clicked successfully');
  } catch (error) {
    logger.error(`Error occurred while clicking login button: $ {error}`);
    throw error;
  }
});

Then('The image should not be displayed', async function () {
  try {
    await loginPage.visibleProblemImg();
    logger.info('The image is not displayed as expected');
  } catch (error) {
    logger.error(`Error: The image is displayed when it should not be $ {error}`);
    throw error;
  }
});
