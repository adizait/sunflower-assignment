import { Locator, Page } from "playwright";

export class NavBar {
    public component: Locator;
    public register: Locator;

    constructor(public page: Page) {
        this.component = page.locator('.header-links');
        this.register = this.component.getByText('Register');
    };
};
