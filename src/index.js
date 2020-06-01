import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';
import './resources/styles/style.css';
import Routes from './Routes';
import Layout from './components/HOC/Layout';

const App=()=>{

    return(

        <Layout>
            <HashRouter>

                <Route path="/" component={Routes}/>
                
            </HashRouter>
        </Layout>

    )
}


ReactDOM.render(<App />, document.getElementById('root'));


