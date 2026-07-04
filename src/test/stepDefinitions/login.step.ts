import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../world/world";
import { logger } from "../utils/logger";
import { LoginReader, readLoginData } from "../utils/csvReader";

const users: LoginReader[] = readLoginData();

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
    for (const ld of users) {
        if (ld.type === "validLogin") {
            await this.loginPage.setUsername(ld.email);
        }
    }
});

When('The User Enters The Valid Password', async function (this: CustomWorld) {
    logger.info("Entering Password")
    for (const ld of users) {
        if (ld.type === "validLogin") {
            await this.loginPage.setPassword(ld.password);
        }
    }
});

When('The User Clicks On Login Button', async function (this: CustomWorld) {
    logger.info("Clicking Login Button")
    await this.loginPage.clickLogin();
});

Then('The User Should be Succesfully Logged In', async function (this: CustomWorld) {
    await this.accountPage.assertLogSuccess();
    logger.info("valid Login Successful")
});
When('The user Enters The invalid Email', async function (this: CustomWorld) {
    for (const ld of users) {
        if (ld.type === "invalidLogin") {
            await this.loginPage.setUsername(ld.email);
        }
    }
});

When('The User Enters The inValid Password', async function (this: CustomWorld) {
    for (const ld of users) {
        if (ld.type === "invalidLogin") {
            await this.loginPage.setPassword(ld.password);
        }
    }
});

Then('The User Should be Displayed with Error Message', async function (this: CustomWorld) {
    await this.loginPage.assertErrorMsg();
    logger.info("invalid Login Successful")
});