import { Locator, Page } from "playwright";
import { expect } from "playwright/test";
import { test } from "../fixtures/test";

export class NavBar {
    public component: Locator;
    public register: Locator;
    public account: Locator;
    public logout: Locator;
    public cart: Locator;

    constructor(public page: Page) {
        this.component = page.locator('.header-links');
        this.register = this.component.locator('.ico-register');
        this.account = this.component.locator('.account');
        this.logout = this.component.locator('.ico-logout');
        this.cart = this.component.locator('.ico-cart');
    };

    public async validateLoggedIn(email: string): Promise<void> {
        await test.step(`validating user with email ${email} is logged in`, async () => {
            await expect(this.account).toHaveText(email);
        });
    };

    public async logoutUser(): Promise<void> {
        await test.step(`log out`, async () => {
            await this.logout.click();
        });
    };
};
