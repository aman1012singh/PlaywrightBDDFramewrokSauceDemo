import {expect, Page} from '@playwright/test';
export class LoginPage {
  private page: Page;
  private usernameTextbox: any;
  private passwordTextbox : any;
  private loginButton: any;
  private errorButton: any;
  
  private titleLogo : any;
  constructor(page: Page){
      this.page= page;
      this.usernameTextbox = page.getByPlaceholder("Username");
      this.passwordTextbox = page.getByPlaceholder("Password");
      this.loginButton = page.locator('[id="login-button"]');
      this.errorButton= page.locator('[class="error-button"]') ;
      this.titleLogo = page.locator('[class="app_logo"]')
  }
  async open() {
    await this.page.goto('https://www.saucedemo.com/');
  }
  async login(username: string, password: string) {
    await this.usernameTextbox.waitFor();
    await this.usernameTextbox.fill(username);
    await this.passwordTextbox.waitFor(); 
    await this.passwordTextbox.fill(password);
  }
  async clickLoginButton() {
    await this.loginButton.waitFor(); 
    await this.loginButton.click();  
  }
  async visibleErrorButton() {
    await this.errorButton.waitFor(); 
    await expect(await this.errorButton).toBeVisible();
  }
  async getSwagLabsTitle() {
    await this.titleLogo.waitFor();
    const titleElement = await this.titleLogo.textContent();
    return titleElement;
  }
  async visibleProblemImg(){
    var src = await this.page.locator("#item_4_img_link>img").getAttribute("src");
    await expect(src).toBe("/static/media/sl-404.168b1cce.jpg");
  }
}
