import { Page, Locator } from '@playwright/test';
import { BasePage } from './basepage';
export class HomePage extends BasePage {
    private page: Page;
    private MyaccountButton: Locator;
    private registerButton: Locator;
    private loginButton: Locator;

    constructor(page: Page) {
        super();
        this.page = page;
        this.MyaccountButton = page.locator("//span[normalize-space()='My Account']");
        this.registerButton = page.locator("//a[normalize-space()='Register']");
        this.loginButton = page.locator("//ul[@class='dropdown-menu dropdown-menu-right']//a[normalize-space()='Login']");
    }
    async navigate() {
        await this.page.goto("https://tutorialsninja.com/demo/");
    }
    async clickMyaccount() {
        await this.click(this.MyaccountButton)
    }
    async clickRegister() {
        await this.click(this.registerButton)
    }
    async clickLogin() {
        await this.click(this.loginButton)
    }

}