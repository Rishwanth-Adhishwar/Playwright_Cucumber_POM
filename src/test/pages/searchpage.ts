import { Page, Locator } from "@playwright/test";
import { BasePage } from "./basepage";

export class SearchPage extends BasePage {
    private page: Page;
    private searchResult: Locator;

    constructor(page: Page) {
        super();
        this.page = page;
        this.searchResult = page.locator('//div[@class="caption"]/child::h4/a');
    }

    async clickFirstProduct() {
        await this.domClick(this.searchResult);
    }
}