import Header from "./Header";
import Footer from "./Footer";
function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="container">
                {children}
            </div>
            <Footer />
        </>
    );
}

export default DefaultLayout;