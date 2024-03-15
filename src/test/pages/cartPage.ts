import {expect, Page} from '@playwright/test';
export class CartPage{
    private page : Page;
    private titleYourCart:any;
    private invetoryItemName: any;
    private invetoryItemDesc: any;
    private inventoryItemPrice: any;
    private checkoutButton: any;


    // public  inventory_item_name: any;
    // public inventory_item_desc: any;
    // public inventory_item_price: any;

    constructor(page: Page) {
        this.page =page;
        this.titleYourCart=this.page.locator('[class="title"]');
        this.invetoryItemName = page.locator('[class="inventory_item_name"]');
        this.invetoryItemDesc= page.locator('[class="inventory_item_desc"]');
        this.inventoryItemPrice= page.locator('[class="inventory_item_price"]');
        this.checkoutButton= page.locator('[class="btn btn_action btn_medium checkout_button "]');  
    }
    public async verifyRedirectedToCartPage(){ 
        await this.titleYourCart.waitFor();
        await expect(this.titleYourCart).toBeVisible();
    };
    public async verifyProductDetailsOnCartPage(){
        await this.invetoryItemName.waitFor();
        await this.invetoryItemDesc.waitFor();
        await this.inventoryItemPrice.waitFor();
        await expect(this.invetoryItemName).toBeVisible();
        await expect(this.invetoryItemDesc).toBeVisible();
        await expect(this.inventoryItemPrice).toBeVisible();
        const inventory_item_name=  await this.invetoryItemName.innerText();
        const inventory_item_desc=await this.invetoryItemDesc.innerText();
        const inventory_item_price=await this.inventoryItemPrice.innerText();
        expect(inventory_item_name).toContain("Sauce Labs Backpack");
        expect(inventory_item_desc).toContain("laptop and tablet protection");
        expect(inventory_item_price).toContain("29.99");
    }
    public async clickCheckoutButton(){
        await this.checkoutButton.waitFor();
        await this.checkoutButton.click();        
    }

    
}