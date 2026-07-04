import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basepage';


export class AccountSuccessPage extends BasePage {
    private page: Page;
    private accSuccessMsg: Locator;


    constructor(page: Page) {
        super();
        this.page = page;
        this.accSuccessMsg = page.locator('//div[@id="content"]/child::h1');
    }

    async assertRegisterSuccess() {
        await this.toContainText(this.accSuccessMsg, "Your Account Has Been Created!")
    }
}