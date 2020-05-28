import React, { Component } from 'react';

class FetchData extends Component {

    state = {

        loading: true,
        data: null

    };

    
    async componentDidMount() {

        const url = `https://restcountries.eu/rest/v2/name/${this.props.location.input}`;
        const response = await fetch(url);
        const fetchedData = await response.json();
        this.setState({ data: fetchedData[0], loading: false });

        console.log(this.props.location.input)
    }

    render() {

        if (this.state.loading) {
            return <div>loading...</div>;
        }
      
        if (!this.state.data) {
            return <div>didn't find a country</div>;
        }

        return (
           <div>
            <div>{this.state.data.name}</div>
            <div>{this.state.data.topLevelDomain}</div>
            <div>{this.state.data.alpha2Code}</div>
            <img src={this.state.data.flag} alt="flag"/>
          </div>
        );
    }
}

export default FetchData;