import { Locator, Page } from "playwright";
import { getRandomNumber } from "../utils/generators";
import { CategoriesEnum } from "../models/product";

export class ProductsToolbar {
    public component: Locator;

    constructor(public page: Page) {
        this.component = page.locator('.header-menu');
    };

    public async goToCategory(category: CategoriesEnum) {
        await this.component.getByText(category.toUpperCase()).first().click();
    };
};

export class Products {
    public productsToolbar: ProductsToolbar;
    public component: Locator;
    public productTitle: Locator;
    public productDetailsSelector: string;
    public addToCartAttribute: string;

    constructor(public page: Page) {
        this.productsToolbar = new ProductsToolbar(page);
        this.component = page.locator('[class="page category-page"]');
        this.productTitle = this.component.locator('.product-title');
        this.productDetailsSelector = '.details';
        this.addToCartAttribute = '[value="Add to cart"]';
    };

    public async addRandomProductToCart(category: CategoriesEnum = CategoriesEnum.digitalDownloads): Promise<string> {
        await this.productsToolbar.goToCategory(category);
        
        await this.productTitle.first().waitFor();
        const allProducts: string[] = await this.productTitle.allInnerTexts();
        const randomProduct: string = allProducts[getRandomNumber(1, allProducts.length)];
        
        await this.component.locator(this.productDetailsSelector, { hasText: randomProduct }).first().locator(this.addToCartAttribute).click();
        
        return randomProduct;
    };
};