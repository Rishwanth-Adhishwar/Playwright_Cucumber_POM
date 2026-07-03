import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../world/world";
import { logger } from "../utils/logger";

Given('The user is on Home Page', async function (this: CustomWorld) {
    logger.info("Launching URL")
    await this.homePage.navigate();
});

When('The User Clicks on My account link in Homepage', async function (this: CustomWorld) {
    logger.info("Clicking My Account Link")
    await this.homePage.clickMyaccount();

});

When('The user clicks Login In Drop Down', async function (this: CustomWorld) {
    logger.info("Clicking Login Link in Drop Down")
    await this.homePage.clickLogin();
});

When('The user Enters The valid Email', async function (this: CustomWorld) {
    logger.info("Entering Email");
    await this.loginPage.setUsername("cbheem@gmail.com");
});

When('The User Enters The Valid Password', async function (this: CustomWorld) {
    logger.info("Entering Password")
    await this.loginPage.setPassword("ChottaBheem");
});

When('The User Clicks On Login Button', async function (this: CustomWorld) {
    logger.info("Clicking Login Button")
    await this.loginPage.clickLogin();
});

Then('The User Should be Succesfully Logged In', async function (this: CustomWorld) {
    await this.accountPage.assertLogSuccess();
    logger.info("Login Successful")
});