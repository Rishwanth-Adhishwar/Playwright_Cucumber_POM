import { AddressBookPage } from "./../pages/addressbookpage";
import { Browser, BrowserContext, Page } from "@playwright/test"
import { LoginPage } from "../pages/loginpage";
import { HomePage } from "../pages/homepage";
import { setWorldConstructor, World } from "@cucumber/cucumber";
import { AccountPage } from "../pages/accountpage";
import { RegisterPage } from "../pages/registerpage";
import { AccountSuccessPage } from "../pages/accountSuccesspage";
import { SearchPage } from "../pages/searchpage";
import { ProductPage } from "../pages/productpage";

export class CustomWorld extends World {
    browser!: Browser;
    context!: BrowserContext;
    page!: Page;

    loginPage!: LoginPage;
    homePage!: HomePage;
    accountPage!: AccountPage;
    registerPage!: RegisterPage;
    accounSuccessPage!: AccountSuccessPage;
    searchPage!: SearchPage;
    productPage!: ProductPage;
    addressbookPage!: AddressBookPage;

}
setWorldConstructor(CustomWorld);