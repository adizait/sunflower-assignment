import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class NavBar {
    public component: Locator;
    public register: Locator;
    public account: Locator;
    public logout: Locator;

    constructor(public page: Page) {
        this.component = page.locator('.header-links');
        this.register = this.component.locator('.ico-register');
        this.account = this.component.locator('.account');
        this.logout = this.component.locator('.ico-logout');
    };

    public async validateLoggedIn(email: string){
        await expect(this.account).toHaveText(email);
    };

    public async logoutUser() {
        await this.logout.click();
    };
};
