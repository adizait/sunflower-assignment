import { test as base, expect } from '@playwright/test';
import { IPages } from './pages';
import { NavBar } from '../pages/navbar.page';
import { Products } from '../pages/products.page';
import { Cart } from '../pages/cart.page';
import { RegisterPage } from '../pages/register.page';


interface IFixtures {
    Pages: IPages;
};

export const test = base.extend<IFixtures>({
    Pages: async ({ page }, use) => {
        const pagesObj: IPages = {
            RegisterPage: new RegisterPage(page),
            NavBar: new NavBar(page),
            Products: new Products(page),
            Cart: new Cart(page)
        };

        await use(pagesObj);
    }
});

export { expect };