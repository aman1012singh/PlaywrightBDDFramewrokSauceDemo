import {expect, Page} from '@playwright/test';
export class InventoryPage{
    private page : Page;
    private invetoryItemName: any;
    private invetoryItemDesc: any;
    private inventoryItemPrice: any;
    private addToCartButton: any;
    private cartIconButton: any;

    public  inventory_item_name: any;
    public inventory_item_desc: any;
    public inventory_item_price: any;
    constructor(page: Page) {
        this.page =page;
        this.invetoryItemName = page.locator('[class="inventory_item_name "]').first();
        this.invetoryItemDesc= page.locator('[class="inventory_item_desc"]').first();
        this.inventoryItemPrice= page.locator('[class="inventory_item_price"]').first();
        this.addToCartButton=page.locator('[class="btn btn_primary btn_small btn_inventory "]').first();
        this.cartIconButton = page.locator('[class="shopping_cart_link"]');
    };
    public async clickAddToCartButton(){
        await this.addToCartButton.waitFor();
        await this.addToCartButton.click(); 
    };
    public async verifyProductDetails(){
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
    public async clickCartIcon(){
        await this.cartIconButton.waitFor();
        await this.cartIconButton.click();
    }

}
