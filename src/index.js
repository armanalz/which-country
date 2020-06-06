import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/HOC/Layout';
import { Route, HashRouter } from 'react-router-dom';
import './resources/styles/style.css';
import Header from './components/HOC/Header';
import Routes from './Routes';


const App=()=>{

    return(

        <Layout>
            <HashRouter>
                <Header/>
                <Route path="/" component={Routes}/>
                
            </HashRouter>
        </Layout>

    )
}


ReactDOM.render(<App />, document.getElementById('root'));


