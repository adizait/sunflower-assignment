import { test } from '../fixtures/test';
import { User } from '../models/user';

test.describe('Register and Add Product', () => {
  test('SCRUM-T1: registering user and adding a product to cart', async ({ page, Pages }) => {
    const user = new User();
    await page.goto('/');
  
    await Pages.NavBar.register.click();
    await Pages.RegisterPage.registerUser(user);
  });

});
