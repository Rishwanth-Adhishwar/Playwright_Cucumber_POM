import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basepage';

export class AccountPage extends BasePage {
    private page: Page;
    private accSuccMsg: Locator;

    constructor(page: Page) {
        super();
        this.page = page;
        this.accSuccMsg = page.locator('//h2[text()="My Account"]');
    }

    async assertLogSuccess() {
        await this.toContainText(this.accSuccMsg, "My Account");
    }

}