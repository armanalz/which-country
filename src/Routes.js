import React, { Component }  from 'react';
import { Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import Interface from './components/Interface';
import FetchData from './components/FetchData';
import FinalData from './components/FinalData';



class Routes extends Component {

   render() {

      return(

         <Route render={({location}) => (
            <TransitionGroup>

               <CSSTransition classNames="fade" 
                              timeout={1200} 
                              key={location.pathname}            
               >
            
                  <Switch location={location}>
                        <Route   exact component={Interface} path="/"/>
                        <Route  component={FetchData} path="/info"/>
                        <Route  component={FinalData} path="/final-info"/>
                  </Switch>

               </CSSTransition>
               
            </TransitionGroup>
         )}/>
      
      );
   }
}

export default Routes;
