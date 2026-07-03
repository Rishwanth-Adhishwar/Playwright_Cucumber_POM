import { Browser, BrowserContext, Page } from "@playwright/test"
import { LoginPage } from "../pages/loginpage";
import { HomePage } from "../pages/homepage";
import { setWorldConstructor, World } from "@cucumber/cucumber";
import { AccountPage } from "../pages/accountpage";



export class CustomWorld extends World {
    browser!: Browser;
    context!: BrowserContext;
    page!: Page;

    loginPage!: LoginPage;
    homePage!: HomePage;
    accountPage!: AccountPage;

}
setWorldConstructor(CustomWorld);