import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basepage';


export class AddressBookPage extends BasePage {
    private page: Page;
    private newAddressBtn: Locator;
    private firstName: Locator;
    private lastName: Locator;
    private company: Locator;
    private address: Locator;
    private city: Locator;
    private pinCode: Locator;
    private submitAddressBtn: Locator;
    private successAddAddress: Locator;
    // private countryChkBox: Locator;
    private country: Locator;
    private regioChkBox: Locator;

    constructor(page: Page) {
        super();
        this.newAddressBtn = page.locator('//a[text()="New Address"]');
        this.firstName = page.locator('#input-firstname');
        this.lastName = page.locator('#input-lastname');
        this.company = page.locator('#input-company');
        this.address = page.locator('#input-address-1');
        this.city = page.locator('#input-city');
        this.pinCode = page.locator('#input-postcode');
        this.submitAddressBtn = page.locator('//input[@value="Continue"]');
        this.successAddAddress = page.locator('.alert-success');
        this.country = page.locator('//option[@value="10"]');
        // this.countryChkBox = page.locator('#input-country');
        this.regioChkBox = page.locator('#input-zone');
    }

    async clickNewAddress() {
        await this.click(this.newAddressBtn);
    }

    async enterAddressDetails(fname: string, lname: string, company: string, address: string, city: string, pincode: string) {
        await this.fill(this.firstName, fname);
        await this.fill(this.lastName, lname);
        await this.fill(this.company, company);
        await this.fill(this.address, address);
        await this.fill(this.city, city);
        await this.fill(this.pinCode, pincode);
    }
    async clickContinue() {
        await this.click(this.submitAddressBtn);
    }
    async assertAddressAddSuccess() {
        await this.toContainText(this.successAddAddress, "Your address has been successfully added");
    }

    async selectCountryOption() {
        //await this.selectDDOPtionByValue(this.countryChkBox, "10");
        await this.selectDDOptionDom(this.country);
    }
    async selectRegionStateOption() {
        await this.selectDDOPtionByValue(this.regioChkBox, "3520")
    }


}