import HeaderOnly from "../layouts/HeaderOnly"

import Home from "../pages/Home"
import Signin from "../pages/Signin"
import Signup from "../pages/Signup"
import MyProfile from "../pages/MyProfile"
import Contact from "../pages/Contact"
export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/signin', component: Signin },
    { path: '/signup', component: Signup },
    { path: 'contact', component: Contact },
    { path: '/myprofile', component: MyProfile, layout: HeaderOnly }
]

export const privateRoutes = []