import { Locator, Page } from "playwright";
import { User } from "../models/user";
import { th } from "@faker-js/faker/.";
import { test } from "../fixtures/test";

export class RegisterPage {
    public registerForm: Locator;
    public registerResult: Locator;
    public firstNameInput: Locator;
    public lastNameInput: Locator;
    public emailInput: Locator;
    public passwordInput: Locator;
    public confirmPasswordInput: Locator;
    public registerButton: Locator;
    public continueButton: Locator;

    constructor(public page: Page) {
        this.registerForm = page.locator('[class="page registration-page"]');
        this.registerResult = page.locator('[class="page registration-result-page"]');
        this.firstNameInput = this.registerForm.locator('#FirstName');
        this.lastNameInput = this.registerForm.locator('#LastName');
        this.emailInput = this.registerForm.locator('#Email');
        this.passwordInput = this.registerForm.locator('#Password');
        this.confirmPasswordInput = this.registerForm.locator('#ConfirmPassword');
        this.registerButton = this.registerForm.locator('#register-button');
        this.continueButton = this.registerResult.locator('[value="Continue"]');
    };

    public async chooseGender(gender: string) {
        await this.registerForm.locator(`#gender-${gender.toLowerCase()}`).click();
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
            await this.continueButton.click();
        });
    };
};
