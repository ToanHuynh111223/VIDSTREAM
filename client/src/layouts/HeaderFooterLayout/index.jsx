import Header from "./Header";
import Footer from "./Footer";
function HeaderFooterLayout({ children }) {
    return (
        <>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </>
    );
}

export default HeaderFooterLayout;