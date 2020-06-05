import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ScaleLoader from "react-spinners/ScaleLoader";

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

        console.log(this.state.data)
    }

    render() {


        if (this.state.loading) {
            return( <div className="fetchdata spinner">
                        <ScaleLoader  size={180}
                                      color={"#443402"}
                                      loading={this.state.loading}
                        />
                    </div>
            );
        }
      
        if (this.state.data.length === undefined) {

            return <h1 className="fetchdata_404 description">didn't find a country whith such name</h1>;
            
        }

        return (
            <div className="fetchdata">
                
                { this.state.data.map((val, index) => 

                  <Link  key={index} to={{pathname:`/final-info`, data:this.state.data[index]}} exact="true"> 
                     <div className="fetchdata_wrapper">
                        <h2 className="fetchdata_wrapper-name content" >{val.name}</h2>
                        <img className="fetchdata_wrapper-img" src={val.flag} alt="flag"/>
                     </div> 
                  </Link> 

                )}
                
           </div>
        );
    }
}

export default FetchData;