import React from 'react';



const Layout = (props) => {
    return (
        <main className="main_layout">
            {props.children}
        </main>
    );
};

export default Layout;