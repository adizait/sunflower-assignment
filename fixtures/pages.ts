import { Cart } from "../pages/cart.page";
import { NavBar } from "../pages/navbar.page";
import { Products } from "../pages/products.page";
import { RegisterPage } from "../pages/register.page"

export interface IPages {
    RegisterPage: RegisterPage;
    NavBar: NavBar;
    Products: Products;
    Cart: Cart;
};
