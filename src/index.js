import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';
import './resources/styles/style.css';
import Routes from './Routes';

const App=()=>{

    return(

        <HashRouter>
            <Route path="/" component={Routes}/>
        </HashRouter>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));


