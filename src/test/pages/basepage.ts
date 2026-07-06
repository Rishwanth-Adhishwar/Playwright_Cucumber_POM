import { Locator, expect } from '@playwright/test';
export class BasePage {
    async click(locator: Locator) {
        await locator.click();
    }

    async domClick(locator: Locator) {
        await locator.evaluate((element: HTMLElement) => element.click());
    }
    async fill(locator: Locator, value: string) {
        await locator.fill(value);
    }
    async getText(locator: Locator) {
        return await locator.textContent();
    }

    async toContainText(locator: Locator, expected: string) {
        const text = await locator.textContent({ timeout: 20000 });
        expect(text).toContain(expected);
    }

    async selectDDOPtionByValue(locator: Locator, option: string) {
        await locator.isEnabled();
        await locator.selectOption({ value: option });
    }

    async selectDDOptionDom(locator: Locator) {
        await locator.evaluate((element: HTMLElement) => element.click())
    }
    async tickCheckBox(locator: Locator) {
        await locator.check();
    }
}