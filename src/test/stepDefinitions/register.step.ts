import { When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../world/world";
import { logger } from "../utils/logger";
import { registerData } from "../utils/jsonReader";
import { HomePage } from "../pages/homepage";




When('The User clicks Register In Drop Down', async function (this: CustomWorld) {
    await this.homePage.clickRegister();
});

When('The User Enters Personal Details and Password', async function (this: CustomWorld) {
    await this.registerPage.enterRegisterDetails(registerData.validRegister.firstName, registerData.validRegister.lastName, registerData.validRegister.email, registerData.validRegister.telephone, registerData.validRegister.password, registerData.validRegister.cpassword);
});

When('The User check the privacy policy Checkbox', async function (this: CustomWorld) {
    await this.registerPage.checkPPolicyBox();
});

When('The User Clicks on Continue Button', async function (this: CustomWorld) {
    await this.registerPage.submitRegDetialsForm();
});

Then('The user should be Successfully Registered', async function (this: CustomWorld) {
    await this.accounSuccessPage.assertRegisterSuccess();
});

When('The User Enters Personal Details and Password by laeving one Mandatory Field', async function (this: CustomWorld) {
    await this.registerPage.enterRegisterDetails(registerData.invalidRegister.firstName, registerData.invalidRegister.lastName, registerData.invalidRegister.email, registerData.invalidRegister.telephone, registerData.invalidRegister.password, registerData.invalidRegister.cpassword);
});

Then('The user should be Displayed With Warning Message', async function (this: CustomWorld) {
    await this.registerPage.assertMandatoryWarning();
});