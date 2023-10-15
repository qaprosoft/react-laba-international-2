const { default: Header } = require( "../Header/Header" );

const Layout = ({children}) => {
    return (
        <div>
        <Header/>
        {children}
        </div>
    )
};

export default Layout;