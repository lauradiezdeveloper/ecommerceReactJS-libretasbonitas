import CartContainer from "../components/pages/cart/CartContainer";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import ItemDetailContainer from "../components/pages/itemDetail/ItemDetailContainer";
import ItemListContainer from "../components/pages/itemList/ItemListContainer";
import LoginContainer from "../components/pages/login/LoginContainer";

export const routes = [
    {
        id:"home",
        path: "/",
        Element: ItemListContainer
    },
    {
        id:"cart",
        path: "/cart",
        Element: CartContainer
    },
    {
        id:"login",
        path: "/login",
        Element: LoginContainer
    },
    {
        id:"categories",
        path: "/category/:categoryName",
        Element: ItemListContainer
    },
    {
        id:"producto",
        path: "/productos/:id",
        Element: ItemDetailContainer
    },
    {
        id:"checkout",
        path: "/checkout",
        Element: CheckoutContainer
    },
];