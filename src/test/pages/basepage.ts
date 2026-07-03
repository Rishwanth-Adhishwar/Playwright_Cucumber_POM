import { Locator, expect } from '@playwright/test';
export class BasePage {
    async click(locator: Locator) {
        await locator.click();
    }
    async fill(locator: Locator, value: string) {
        await locator.fill(value);
    }
    async getText(locator: Locator) {
        return await locator.textContent();
    }

    async toContainText(locator: Locator, expected: string) {
        const text = await locator.textContent();
        expect(text).toContain(expected);
    }

    async tickCheckBox(locator: Locator) {
        await locator.check();
    }
}