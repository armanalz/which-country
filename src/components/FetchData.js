import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ScaleLoader from "react-spinners/ScaleLoader";

class FetchData extends Component {

    state = {

        loading: true,
        data: [],
        fullData: [],
        per: 5,
        input: null

    };


    async componentDidMount() {

      
            let input

            if ( window.sessionStorage.getItem("last input") ) {
            
                input = window.sessionStorage.getItem("last input")

            } else {

                input = this.props.location.input

            }


            const url = `https://restcountries.eu/rest/v2/name/${input}`;
            const response = await fetch(url);
            const fetchedData = await response.json();
            if( fetchedData.length <= 5 ) {
                this.setState({ data: fetchedData, loading: false });
            } else {
                this.setState({ fullData: fetchedData, data: fetchedData.slice(0, this.state.per), loading: false });
            }
           
            window.sessionStorage.setItem('last input', input);
    }

    loadMore = () => {

        this.setState({ data: [...this.state.data,
                        ...this.state.fullData.slice(this.state.per, this.state.per + 5)],
                        per: this.state.per + 5
         });
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

                {  this.state.data.map((val, index) => 

                  <Link  key={index} to={{pathname:`/final-info`, data:this.state.data[index]}} exact="true"> 
                     <div className="fetchdata_wrapper">
                        <h2 className="fetchdata_wrapper-name content" >{val.name}</h2>
                        <img className="fetchdata_wrapper-img" src={val.flag} alt="flag"/>
                     </div> 
                  </Link> 

                ) }
              {this.state.fullData.length === 0 || this.state.fullData.length === this.state.data.length ? null :
              <div className="fetchdata_button btn" onClick={() => this.loadMore()}>load more</div>
              }  
           </div>
        );
    }
}

export default FetchData;