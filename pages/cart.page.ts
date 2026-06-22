import { Locator, Page } from "playwright";
import { expect } from "playwright/test";
import { test } from "../fixtures/test";

export class Cart {
    public component: Locator;
    public productRow: Locator;
    public productNameSelector: string;

    constructor(public page: Page) {
        this.component = page.locator('.cart');
        this.productRow = this.component.locator('.cart-item-row');
        this.productNameSelector = '.product-name';
    };

    public async validateProductInCart(productName: string): Promise<void> {
        await test.step(`validating ${productName} is the only product in cart`, async () => {
            await expect(this.productRow).toHaveCount(1);
            await expect(this.productRow.locator(this.productNameSelector, { hasText: productName })).toBeVisible();
        });
    };
};
