import { Page, Locator } from "@playwright/test";
import { BasePage } from "./basepage";

export class RegisterPage extends BasePage {
    private page: Page;
    private firstName: Locator;
    private lastName: Locator;
    private email: Locator;
    private telephone: Locator;
    private password: Locator;
    private cpassword: Locator;
    private privacyPolicyCheckbox: Locator;
    private continueReg: Locator;
    private mandatoryFieldWarn: Locator;

    constructor(page: Page) {
        super();
        this.page = page;
        this.firstName = page.locator('#input-firstname');
        this.lastName = page.locator('#input-lastname');
        this.email = page.locator('#input-email');
        this.telephone = page.locator('#input-telephone');
        this.password = page.locator('#input-password');
        this.cpassword = page.locator('#input-confirm');
        this.privacyPolicyCheckbox = page.locator('//input[@type="checkbox"]');
        this.continueReg = page.locator('//input[@type="submit"]');
        this.mandatoryFieldWarn = page.locator('//div[@class="text-danger"]');

    }

    async enterRegisterDetails(firstName: string, lastName: string, email: string, telephone: string, password: string, cpassword: string) {
        await this.fill(this.firstName, firstName);
        await this.fill(this.lastName, lastName);
        await this.fill(this.email, email);
        await this.fill(this.telephone, telephone);
        await this.fill(this.password, password);
        await this.fill(this.cpassword, cpassword);
    }
    async checkPPolicyBox() {
        await this.tickCheckBox(this.privacyPolicyCheckbox);
    }
    async submitRegDetialsForm() {
        await this.click(this.continueReg);
    }
    async assertMandatoryWarning() {
        await this.toContainText(this.mandatoryFieldWarn, "First Name must be between 1 and 32 characters!");
    }
}