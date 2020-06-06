import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
               <Link to={{pathname:`/`}} exact="true"> 
                    <h1 className="header_title">which  country</h1>
                  </Link> 
          
        </header>
    );
};

export default Header;