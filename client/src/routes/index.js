import HeaderOnly from "../layouts/HeaderOnly"

import Home from "../pages/Home"
import Signin from "../pages/Signin"
import Signup from "../pages/Signup"
import MyProfile from "../pages/MyProfile"
import Contact from "../pages/Contact"
import AboutUs from "../pages/AboutUs"
import ResetPassword from "../pages/ResetPassword"
export const publicRoutes = [
    { path: '/', component: Home, layout: null },
    { path: '/login', component: Signin },
    { path: '/register', component: Signup },
    { path: '/contact', component: Contact },
    { path: '/about-us', component: AboutUs },
    { path: '/reset-password', component: ResetPassword },
    { path: '/myprofile', component: MyProfile, layout: HeaderOnly }

]

export const privateRoutes = []