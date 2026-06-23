import { addProductToCardUrl } from '../consts/urls';
import { expect, test } from '../fixtures/test';
import { CategoriesEnum } from '../models/product';
import { User } from '../models/user';
import { waitForResponse } from '../utils/requests';

test.describe('Register and Add Product', () => {
  test('SCRUM-T1: registering user and adding a product to cart', async ({ page, Pages }) => {
    const user = new User();
    const addProductToCartResponse = waitForResponse(page, addProductToCardUrl, 'POST');
  
    await Pages.NavBar.register.click();
    await Pages.RegisterPage.registerUser(user);
    await Pages.NavBar.validateLoggedIn(user.email);

    const randomProduct = await Pages.Products.addRandomProductToCart(CategoriesEnum.digitalDownloads);
    expect((await addProductToCartResponse).status()).toBe(200);

    await Pages.NavBar.cart.click();
    await Pages.Cart.validateProductInCart(randomProduct);    
  });
});
