//import layout
import HeaderOnly from "../layouts/HeaderOnly";
import HeaderFooterLayout from "../layouts/HeaderFooterLayout";
//import all page
import {
    Home,
    AboutUs,
    Blog,
    Contact,
    MyProfile,
    PageNotFound,
    ResetPassword,
    SignIn,
    SignUp,
    BlogDetails,
    MovieDetails,
    Faq,
    Privacy,
    PricingPlan,
    ComedyMovie,
    ActionMovie
} from "../pages";
export const publicRoutes = [
    { path: "/", component: Home, layout: HeaderFooterLayout },
    { path: "/login", component: SignIn },
    { path: "/register", component: SignUp },
    { path: "/contact", component: Contact },
    { path: "/about-us", component: AboutUs },
    { path: "/reset-password", component: ResetPassword },
    { path: "/blog", component: Blog },
    { path: "/faq", component: Faq },
    { path: "/privacy", component: Privacy },
    { path: "/pricing-plan", component: PricingPlan },
    { path: "/action", component: ActionMovie },
    { path: "/comedy", component: ComedyMovie },
    { path: "/blog-details/:id", component: BlogDetails },
    { path: "/movie-details/:name", component: MovieDetails },
    { path: "*", component: PageNotFound, layout: HeaderFooterLayout },
    { path: "/myprofile", component: MyProfile, layout: HeaderOnly },
];

export const privateRoutes = [];
