import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Interface extends Component {

    state = {
        value: null,
        error: null,
        path: ""
    }

    changeHandler = (e) => {

        if( !e.target.value ) {

            this.setState({ error: "Cannot be empty", value : null, path: ""}) 


        } else if( typeof e.target.value !== "undefined" ) {
            if( !e.target.value.match(/^[a-zA-Z]+$/) ) {

               this.setState({ error: "Only letters", value : null, path: ""})
            } else {

                this.setState({ error: null, path: "info", value : e.target.value})
    
            }       
        } 

    }

    submitHandler = () => {


        if( !this.state.value ) {

            this.setState({ error: "Cannot be empty"})

        } 

    }

    render() {

        return (

            <div className="interface">
               <p className="interface_description description">
                    do you want to find out interesting facts about countries? <br/>
                    now you are able to search them by name
               </p>
               <form className="interface_form">
                  <input className="interface_form-input" type="text" name="name" 
                         onChange={ (e) => this.changeHandler(e) }
                  />
                  <Link to={{pathname:`/${this.state.path}`, input: this.state.value }} exact="true" 
                        onClick={ () => this.submitHandler()}
                  > 
                    <input className="interface_form-submit" type="submit" value="go"  />
                  </Link>  
               </form>
               <h4 className="interface_error description">{this.state.error}</h4>
            </div>

        );
    }
}

export default Interface;