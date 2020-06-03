import React from 'react';
import Header from './Header'


const Layout = (props) => {
    return (
        <main className="main_layout">
            <Header/>
            {props.children}
        </main>
    );
};

export default Layout;