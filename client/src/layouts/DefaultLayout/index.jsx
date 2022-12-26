import Header from "./Header";
import Footer from "./Footer";
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