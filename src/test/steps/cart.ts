import { Given, When, Then, Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { page, loginPage, cartPage, inventoryPage, checkoutPage, logger } from '../setup';
// Set the default timeout to 10 seconds
setDefaultTimeout(50000);
When('User clicks the Add to Cart button on the inventory page', async () => {
   try {
       await inventoryPage.clickAddToCartButton();
       logger.info("Clicked add to cart");
   } 
   catch (error) {
       logger.error(`Error occurred while clicking add to cart button: ${error}`);
       throw error;
   }
});
Then('User should see the added product on the cart page with the corresponding details', async () => {
    try {
        await inventoryPage.verifyProductDetails();
        logger.info("Verified product details on cart page");
    } 
    catch (error) {
        logger.error(`Error occurred while verifying product details: ${error}`);
        throw error;
    }
});

When('User clicks the cart icon on the inventory page', async () => {
    try {
        await inventoryPage.clickCartIcon();
        logger.info("Clicked cart icon");
    } 
    catch (error) {
        logger.error(`Error occurred while clicking cart icon: ${error}`);
        throw error;
    }
});

Then('User will be redirected to the cart page', async () => {
    try {
        await cartPage.verifyRedirectedToCartPage();
        logger.info("Verified redirection to cart page");
    } 
    catch (error) {
        logger.error(`Error occurred while verifying redirection to cart page: ${error}`);
        throw error;
    }
});

Then('User should see the details of the previously added product, including the product name, product description, and product price', async () => {
    try {
        await cartPage.verifyProductDetailsOnCartPage();
        logger.info("Verified product details on cart page");
    } 
    catch (error) {
        logger.error(`Error occurred while verifying product details on cart page: ${error}`);
        throw error;
    }
});
