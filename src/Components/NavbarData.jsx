import { SlHome } from 'react-icons/sl';
import { CgProductHunt } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CiLogin } from 'react-icons/ci';

export const NavbarData = [
    {
        title: "Home",
        icon: SlHome,
        link: '/home'
    },
    {
        title: "Products",
        icon: CgProductHunt,
        link: '/Products'
    },
    {
        title: "Cart",
        icon: AiOutlineShoppingCart,
        link: '/Cart'
    },
    {
        title: "Login",
        icon: CiLogin,
        link: '/Login'
    }
]

