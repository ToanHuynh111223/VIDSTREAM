import HeaderOnly from "../layouts/HeaderOnly"

import Home from "../pages/Home"
import Signin from "../pages/Signin"
import Signup from "../pages/Signup"
import MyProfile from "../pages/MyProfile"
import Contact from "../pages/Contact"
import AboutUs from "../pages/AboutUs"
export const publicRoutes = [
    { path: '/', component: Home, layout: null },
    { path: '/login', component: Signin },
    { path: '/signup', component: Signup },
    { path: '/contact', component: Contact },
    { path: '/about-us', component: AboutUs },
    { path: '/myprofile', component: MyProfile, layout: HeaderOnly }
]

export const privateRoutes = []