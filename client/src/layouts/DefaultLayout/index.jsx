import { Header, Footer } from "../../components";
import PageTitle from "./PageTitle";
function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <PageTitle />
            <div>
                {children}
            </div>
            <Footer />
        </>
    );
}

export default DefaultLayout;