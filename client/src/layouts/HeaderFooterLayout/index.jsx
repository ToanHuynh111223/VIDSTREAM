import { Header, Footer } from "../../components";
function HeaderFooterLayout({ children }) {
    return (
        <>
            <Header />
            <div >
                {children}
            </div>
            <Footer />
        </>
    );
}

export default HeaderFooterLayout;