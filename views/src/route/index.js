import SignIn from "../pages/auth/SignIn"
import SignUp from "../pages/auth/SignUp";
import {
    Layout as LayoutIcon,
    Sliders as SlidersIcon,
    Users as UsersIcon,
} from "react-feather";

  const authRoutes = {
    path: "/auth",
    name: "Auth",
    icon: UsersIcon,
    badgeColor: "secondary",
    badgeText: "12/24",
    children: [
        {
            path: "/auth/sign-in",
            name: "Sign In",
            component: SignIn
        },
        {
            path: "/auth/sign-up",
            name: "Sign Up",
            component: SignUp
        }
    ]
};

 const pageRoutes = {
    path: "/do-an",
    name: "Đồ Án",
    icon: LayoutIcon,
    children: [
        {
            path: "/do-an/timeline",
            name: "Timeline Page",
            component: null
        },
        {
            path: "/do-an/work",
            name: "List work Page",
            component: null
        }
    ]
};
export const auth = [authRoutes];
export const page = [
    pageRoutes,
];
export default [
    pageRoutes,
    authRoutes,
];