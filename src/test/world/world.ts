import { Browser, BrowserContext, Page } from "@playwright/test"
import { LoginPage } from "../pages/loginpage";
import { HomePage } from "../pages/homepage";
import { setWorldConstructor, World } from "@cucumber/cucumber";
import { AccountPage } from "../pages/accountpage";
import { RegisterPage } from "../pages/registerpage";
import { AccountSuccessPage } from "../pages/accountSuccesspage";

export class CustomWorld extends World {
    browser!: Browser;
    context!: BrowserContext;
    page!: Page;

    loginPage!: LoginPage;
    homePage!: HomePage;
    accountPage!: AccountPage;
    registerPage!: RegisterPage;
    accounSuccessPage!: AccountSuccessPage;

}
setWorldConstructor(CustomWorld);