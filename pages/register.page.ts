import { Locator, Page } from "playwright";
import { User } from "../models/user";
import { th } from "@faker-js/faker/.";
import { test } from "../fixtures/test";

export class RegisterPage {
    public component: Locator;
    public firstNameInput: Locator;
    public lastNameInput: Locator;
    public emailInput: Locator;
    public passwordInput: Locator;
    public confirmPasswordInput: Locator;
    public registerButton: Locator;

    constructor(public page: Page) {
        this.component = page.locator('[class="page registration-page"]');
        this.firstNameInput = this.component.locator('#FirstName');
        this.lastNameInput = this.component.locator('#LastName');
        this.emailInput = this.component.locator('#Email');
        this.passwordInput = this.component.locator('#Password');
        this.confirmPasswordInput = this.component.locator('#ConfirmPassword');
        this.registerButton = this.component.locator('#register-button');
    };

    public async chooseGender(gender: string) {
        await this.component.locator(`#gender-${gender.toLowerCase()}`).click();
    };

    public async fillUserDetails(user: User) {
        if (user.gender) await this.chooseGender(user.gender);

        await this.firstNameInput.fill(user.firstName);
        await this.lastNameInput.fill(user.lastName);
        await this.emailInput.fill(user.email);
    };

    public async fillPassword(user: User) {
        await this.passwordInput.fill(user.password);
        await this.confirmPasswordInput.fill(user.password);
    };

    public async registerUser(user: User) {
        await test.step(`registering user - ${user.email}`, async () => {
            await this.fillUserDetails(user);
            await this.fillPassword(user);
            await this.registerButton.click();
        });
    };
};
