import {Page, expect} from '@playwright/test'
export class CheckoutPage{
    private page : Page;
    private firstNameTextbox : any;
    private lastNameTextbox : any;
    private zipCodeTextbox : any;
    private continueButton: any;
    private titleCheckout: any;
    
    constructor(page:Page) {
        this.page =page;
        this.titleCheckout=page.locator('[class="title"]');
        this.firstNameTextbox=page.getByPlaceholder('First Name');
        this.lastNameTextbox = page.getByPlaceholder('Last Name');
        this.zipCodeTextbox = page.getByPlaceholder('Zip/Postal Code');
        this.continueButton=page.locator('[class="submit-button btn btn_primary cart_button btn_action"]');
    }
    public async verifyRedirectedToCheckoutPage(){
        await this.titleCheckout.waitFor();
        await expect(this.titleCheckout).toBeVisible();
    }
    public async enterFirstName(firstName:string){ 
        await this.firstNameTextbox.waitFor();
        await this.firstNameTextbox.fill(firstName);
    };
    public async enterLastName(lastName:string){ 
        await this.lastNameTextbox.waitFor();
        await this.lastNameTextbox.fill(lastName);

    };
    public async enterPostalCode(zipcode:string){ 
        await this.zipCodeTextbox.waitFor();
        await this.zipCodeTextbox.fill(zipcode);
    };
    public async clickContinueButton(){ 
        await this.continueButton.waitFor();
        await this.continueButton.click();
    };

}