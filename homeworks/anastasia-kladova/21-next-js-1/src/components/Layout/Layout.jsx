const { default: Header } = require( "../Header/Header" );

const Layout = ({children}) => {
    return (
        <>
        <Header/>
        {children}
        </>
    )
};

export default Layout;