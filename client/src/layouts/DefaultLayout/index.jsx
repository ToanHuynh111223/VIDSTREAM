import { Header, Footer } from "../../components";
import PageTitle from "./PageTitle";
function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <PageTitle />
            <div style={{ margin: "100px 0" }}>
                {children}
            </div>
            <Footer />
        </>
    );
}

export default DefaultLayout;