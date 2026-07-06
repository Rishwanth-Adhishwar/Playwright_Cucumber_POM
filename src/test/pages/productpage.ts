import { Page, Locator } from "@playwright/test";
import { BasePage } from "./basepage";

export class ProductPage extends BasePage {
    private page: Page;
    private addToCartBtn: Locator;
    private cartAddSuccessMsg: Locator;

    constructor(page: Page) {
        super();
        this.page = page;
        this.addToCartBtn = page.locator('//button[@id="button-cart"]');
        this.cartAddSuccessMsg = page.locator('//div[@class="alert alert-success alert-dismissible"]');
    }
    async clickAddtoCart() {
        await this.domClick(this.addToCartBtn);
    }
    async assertCartAddSuccessMessage() {
        await this.toContainText(this.cartAddSuccessMsg, "Success: You have added ");
    }
}