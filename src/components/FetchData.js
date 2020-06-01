import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FetchData extends Component {

    state = {

        loading: true,
        data: null

    };

    
    async componentDidMount() {

        const url = `https://restcountries.eu/rest/v2/name/${this.props.location.input}`;
        const response = await fetch(url);
        const fetchedData = await response.json();
        this.setState({ data: fetchedData, loading: false });

        console.log(this.props.location.input)
    }

    render() {

        let data = this.state.data;

        if (this.state.loading) {
            return <div>loading...</div>;
        }
      
        if (!this.state.data) {
            return <div>didn't find a country</div>;
        }

        return (
            <div>
                
                { this.state.data.map((val, index) => 

                  <Link  key={index} to={{pathname:`/final-info`, data:data[index]}} exact="true"> 
                     <div style={{display: "flex"}}>
                        <div >{val.name}</div>
                        <img style={{height: "100px", width:"200px"}} src={val.flag} alt="flag"/>
                     </div> 
                  </Link> )
                }
                
           </div>
        );
    }
}

export default FetchData;