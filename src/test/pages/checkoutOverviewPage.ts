import {Page, expect} from '@playwright/test'
export class CheckoutOverviewPage{
    private page : Page;
    private titleOverviewPage: any
    private invetoryItemName: any;
    private invetoryItemDesc: any;
    private inventoryItemPrice: any;
    private finishButton : any;
    private titleThankYouPage: any;
    private backButton: any;
    private paymentInfo :any;
    private shippingInfo :any;
    private priceTotalInfo :any;
    private total:any;
    
    constructor(page: Page) {
        this.page =page;
        this.titleOverviewPage=this.page.locator('[class="title"]');
        this.invetoryItemName = page.locator('[class="inventory_item_name"]').first();
        this.invetoryItemDesc= page.locator('[class="inventory_item_desc"]').first();
        this.inventoryItemPrice= page.locator('[class="inventory_item_price"]').first();
        this.paymentInfo = page.locator('[class="summary_value_label"]').first();
        this.shippingInfo = page.locator('[class="summary_value_label"]').nth(1);        
        this.priceTotalInfo = page.locator('[class="summary_subtotal_label"]');        
        this.total = page.locator('[class="summary_info_label summary_total_label"]'); 
        this.finishButton = page.locator('[class="btn btn_action btn_medium cart_button"]');
        this.titleThankYouPage = page.locator('[class="complete-header"]');
        this.backButton= page.locator('[class="btn btn_primary btn_small"]');
    }
    public async verifyRedirectedToCheckoutOverviewPage(){
        await this.titleOverviewPage.waitFor();
        await expect(this.titleOverviewPage).toBeVisible();  
    }
    public async verifyProductDetailsOnCheckoutStepTwo(){
        await this.paymentInfo.waitFor();
        await this.shippingInfo.waitFor();
        await this.priceTotalInfo.waitFor();
        await this.total.waitFor();
        await expect(this.paymentInfo).toBeVisible();
        await expect(this.shippingInfo).toBeVisible();
        await expect(this.priceTotalInfo).toBeVisible();
        await expect(this.total).toBeVisible();
        const payment_info=  await this.paymentInfo.innerText();
        const shipping_info=await this.shippingInfo.innerText();
        const price_total_info=await this.priceTotalInfo.innerText();
        const total=await this.total.innerText();
        expect(payment_info).toContain("SauceCard #31337");
        expect(shipping_info).toContain("Free Pony Express Delivery!");
        expect(price_total_info).toContain("29.99");
        expect(total).toContain("32.39");
    }
    public async verifyOrderDetails(){
        await this.invetoryItemName.waitFor();
        await this.invetoryItemDesc.waitFor();
        await this.inventoryItemPrice.waitFor();
        await expect(this.invetoryItemName).toBeVisible();
        await expect(this.invetoryItemDesc).toBeVisible();
        await expect(this.inventoryItemPrice).toBeVisible(); 
    }
    public async clickFinishButton(){
        await this.finishButton.waitFor();
        await this.finishButton.click();
    }
    public async verifyThankYouPage(){
        await this.titleThankYouPage.waitFor();
        await expect(this.titleThankYouPage).toBeVisible();
    }
    public async clickBackToHomeButton(){
       await this.backButton.waitFor();
       await this.backButton.click();
    }

}