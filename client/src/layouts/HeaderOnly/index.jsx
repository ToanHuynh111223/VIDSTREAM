import Header from "./Header";
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