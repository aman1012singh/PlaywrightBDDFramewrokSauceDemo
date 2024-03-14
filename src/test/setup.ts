import { chromium, Browser, Page } from 'playwright';
import { Before, After } from '@cucumber/cucumber';
import { LoginPage } from './pages/LoginPage';
import { InventoryPage } from './pages/InventoryPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/checkoutPage';
import { CheckoutOverviewPage } from './pages/CheckoutOverviewPage';

let browser: Browser;
let page: Page;
let loginPage: LoginPage;
let inventoryPage: InventoryPage;
let cartPage: CartPage;
let checkoutPage: CheckoutPage;
let overviewPage: CheckoutOverviewPage;

Before(async () => {
  browser = await chromium.launch({headless: false});
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  inventoryPage = new InventoryPage(page);
  cartPage = new CartPage(page);
  checkoutPage = new CheckoutPage(page);
  overviewPage = new CheckoutOverviewPage(page);
});

After(async () => {
  await page.close();
  await browser.close();
});

export { browser, page, loginPage,inventoryPage, cartPage, checkoutPage , overviewPage }; // Exporting the browser and page objects
