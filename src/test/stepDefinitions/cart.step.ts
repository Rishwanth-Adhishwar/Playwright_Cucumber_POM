import { When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../world/world";
import { logger } from "../utils/logger";

When('The User Enter the product name in Search Bar', async function (this: CustomWorld) {
    await this.accountPage.enterValueSB("iphone");
});

When('The User Clicks on Search Button', async function (this: CustomWorld) {
    await this.accountPage.clickSearchIcon();
});

When('The user Clicks a Product On Search Results', async function (this: CustomWorld) {
    await this.searchPage.clickFirstProduct();
});

When('The user Clicks On Add to cart Button in Product Description', async function (this: CustomWorld) {
    await this.productPage.clickAddtoCart();
});

Then('The User Should see a Success Message Product Added to Cart', async function (this: CustomWorld) {
    await this.productPage.assertCartAddSuccessMessage();
});