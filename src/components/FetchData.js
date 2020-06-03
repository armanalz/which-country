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
            <div className="fetchdata">
                
                { this.state.data.map((val, index) => 

                  <Link  key={index} to={{pathname:`/final-info`, data:data[index]}} exact="true"> 
                     <div className="fetchdata_wrapper">
                        <div className="fetchdata_wrapper name" >{val.name}</div>
                        <img className="fetchdata_wrapper img" src={val.flag} alt="flag"/>
                     </div> 
                  </Link> 

                )}
                
           </div>
        );
    }
}

export default FetchData;