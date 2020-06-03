import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Interface extends Component {

    state = {
        value: ""
    }

    submitHandler = (e) => {

        this.setState({ value : e.target.value})
        console.log(e.target.value)
    }

    render() {

        return (

            <div className="interface">
               <p className="interface_description">
                    do you want to find out interesting facts about countries? <br/>
                    now you are able to search them by name
               </p>
               <form className="interface_form">
                  <input className="interface_form-input" type="text" name="name" 
                         onChange={ (e) => this.submitHandler(e) }
                  />
                  <Link to={{pathname:`/info`, input: this.state.value }} exact="true"> 
                    <input className="interface_form-submit" type="submit" value="go" />
                  </Link>  
               </form>
            </div>

        );
    }
}

export default Interface;