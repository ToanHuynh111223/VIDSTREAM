import { Header } from "../../components";
function HeaderOnly({ children }) {
    return (
        <>
            <Header />
            <div className="container">
                {children}
            </div>
        </>
    );
}

export default HeaderOnly;