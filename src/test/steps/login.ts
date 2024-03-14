import { Given, When, Then, Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import {page, loginPage, cartPage,inventoryPage,checkoutPage } from '../setup';

import { Console } from 'console';
// Set the default timeout to 10 seconds
setDefaultTimeout(50000);


//###########################################################################################################################
//Scenario1:  Verify valid Swag Labs login
Given('User is on the Swag Labs login page', async () => {
  await loginPage.open();
});

When('User enters {string} and {string}', async (username: string, password: string) => {
    await loginPage.login(username, password);
});

When('User clicks the login button on the valid case', async () => {
  await loginPage.clickLoginButton();
});

Then('Swag Labs title should be displayed at the top of the page', async () => {
  const title = await loginPage.getSwagLabsTitle();
  if (title !== 'Swag Labs') {
    throw new Error(`Expected title to be 'Swag Labs', but found '${title}'`);
  }
});
//####################################################################################################################
//Scenario-2: Verify invalid Swag Labs login
When('User clicks the login button on the invalid case', async function () {
  await loginPage.clickLoginButton();
});
Then('Showing Epic sad face: Sorry, this user has been locked out', async function () {
  await loginPage.visibleErrorButton();
});
//####################################################################################################################
//Scenario 3: Verify problem Swag Labs login
When('User clicks the login button on the problem case', async function () {
  await loginPage.clickLoginButton();
});
Then('The image should not be displayed', async function () {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.visibleProblemImg();
});
