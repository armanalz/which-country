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
            <main>
               <form>
                  <input type="text" name="name" onChange={ (e) => this.submitHandler(e) }/>
                  <Link to={{pathname:`/info`, input: this.state.value }} exact> 
                    <input type="submit" value="submit" />
                  </Link>  
               </form>
            </main>
        );
    }
}

export default Interface;