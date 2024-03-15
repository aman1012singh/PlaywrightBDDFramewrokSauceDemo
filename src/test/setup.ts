import { chromium, Browser, Page } from 'playwright';
import { Before, After, BeforeAll, AfterAll, Status } from '@cucumber/cucumber';
import { LoginPage } from './pages/LoginPage';
import { InventoryPage } from './pages/InventoryPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/checkoutPage';
import { CheckoutOverviewPage } from './pages/CheckoutOverviewPage';
import { Logger, createLogger } from 'winston';
import { create } from 'domain';
import { options } from '../helper/util/logger';
let logger : Logger;
let browser: Browser;
let page: Page;
let loginPage: LoginPage;
let inventoryPage: InventoryPage;
let cartPage: CartPage;
let checkoutPage: CheckoutPage;
let overviewPage: CheckoutOverviewPage;
BeforeAll(async () => {
  browser = await chromium.launch({headless: true}); 
});
Before(async ({pickle}) => {
  const scenarioName =pickle.name+ pickle.id;
  page = await browser.newPage();
  logger = createLogger(options(scenarioName));
  loginPage = new LoginPage(page);
  inventoryPage = new InventoryPage(page);
  cartPage = new CartPage(page);
  checkoutPage = new CheckoutPage(page);
  overviewPage = new CheckoutOverviewPage(page);
});
After(async ({pickle, result}) => {
  console.log(result?.status);
  if(result?.status==Status.FAILED){
    const img=await page.screenshot({path:`./test-results/screenshots/${pickle.name}.png`});
    //Attch Screenshot with report
  }
  else{}
  await page.close();
});
AfterAll(async () => {
  await browser.close();
  await logger.close();
});

export { browser, page, logger,loginPage,inventoryPage, cartPage, checkoutPage , overviewPage }; // Exporting the browser and page objects
