import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basepage';

export class AccountPage extends BasePage {
    private page: Page;
    private accSuccMsg: Locator;
    private searchBar: Locator;
    private seacrhIcon: Locator;
    private addressBookLink: Locator;


    constructor(page: Page) {
        super();
        this.page = page;
        this.accSuccMsg = page.locator('//h2[text()="My Account"]');
        this.searchBar = page.locator('//input[@name="search"]');
        this.seacrhIcon = page.locator('(//button[@type="button"])[4]');
        this.addressBookLink = page.locator('//a[text()="Address Book"]');
    }

    async assertLogSuccess() {
        await this.toContainText(this.accSuccMsg, "My Account");
    }
    async enterValueSB(productName: string) {
        await this.fill(this.searchBar, productName);
    }

    async clickSearchIcon() {
        await this.click(this.seacrhIcon);
    }
    async clickAddressBookLink() {
        await this.click(this.addressBookLink);
    }

}