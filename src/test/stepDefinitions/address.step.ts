import { AddressBookPage } from "./../pages/addressbookpage";
import { When, Then, DataTable } from "@cucumber/cucumber";
import { CustomWorld } from "../world/world";

When('The User Clicks on Address Book', async function (this: CustomWorld) {
    await this.accountPage.clickAddressBookLink();
});

When('The User Clciks on New Adderess In Address Book Page', async function (this: CustomWorld) {
    await this.addressbookPage.clickNewAddress();
});

When('The User Enters Address Details', async function (this: CustomWorld, dataTable: DataTable) {
    const data = dataTable.rowsHash();
    await this.addressbookPage.enterAddressDetails(data.firstName, data.lastName, data.company, data.address, data.city, data.postCode);
});

When('The User Select Country options in DropDown', async function (this: CustomWorld) {
    await this.addressbookPage.selectCountryOption();
});

When('The User SelectRegion\\/state Options in DropDown', async function (this: CustomWorld) {
    await this.addressbookPage.selectRegionStateOption();
});

Then('The User Should See A Success Message', async function (this: CustomWorld) {
    await this.addressbookPage.assertAddressAddSuccess();
});