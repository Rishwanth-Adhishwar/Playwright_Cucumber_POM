import { CustomWorld } from "../world/world";
import { Before, After, BeforeAll, AfterAll, Status } from "@cucumber/cucumber";
import { chromium, Browser, firefox, webkit } from "@playwright/test";
import { LoginPage } from "../pages/loginpage";
import { HomePage } from "../pages/homepage";
import { AccountPage } from "../pages/accountpage";
import { logger } from "../utils/logger";
import { ENV } from "../utils/envReader";

let browser: Browser;
BeforeAll(async () => {
    logger.info("Launching Browser");
    const browserName = ENV.BROWSER;

    const browserType = browserName === "firefox" ? firefox : browserName === "webkit" ? webkit : chromium;

    browser = await browserType.launch({ headless: false });
})
Before(async function (this: CustomWorld) {
    this.browser = browser;
    logger.info("Creating New Context")
    this.context = await browser.newContext();
    logger.info("Creating Page")
    this.page = await this.context.newPage();
    this.loginPage = new LoginPage(this.page);
    this.homePage = new HomePage(this.page);
    this.accountPage = new AccountPage(this.page);
});
After(async function (this: CustomWorld, { pickle, result }) {

    console.log(result?.status);
    if (result?.status === Status.FAILED) {
        const img = await this.page.screenshot({ path: `reports/screenshots${pickle.name}.png`, type: "png" });
        this.attach(img, "image/png");
    }
    logger.info("Closing Page")
    await this.page.close();
    logger.info("Closing Context")
    await this.context.close();

});
AfterAll(async () => {
    logger.info("Closing Browser")
    await browser.close();
})