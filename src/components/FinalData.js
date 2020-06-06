import React, { Component } from 'react';

class FinalData extends Component {

    state = {

        data: {},
        dataLan: [],
        dataCur: []
    }

    componentDidMount() {
        
            let Data

            if ( window.sessionStorage.getItem("last data") ) {
            
               Data = JSON.parse(window.sessionStorage.getItem("last data")) ;

            } else {

                 Data = this.props.location.data ;              

            }
           
            this.setState({ data: Data, dataLan: Data.languages.map((item => [item.name])),
                            dataCur: Data.currencies.map((item => [item.name]))
                          })
           
            window.sessionStorage.setItem('last data', JSON.stringify(Data));
            
    }

    render() {

        return (

            <div className="finaldata">

                <div className="finaldata_info">
                    <div className="finaldata_info-item-name content">{this.state.data.name}</div>
                    <div className="finaldata_info-item content">
                        <h4>native name</h4>
                        <h4>{this.state.data.nativeName}</h4>
                    </div>
                    <div className="finaldata_info-item content">
                        <h4>capital</h4>
                        <h4>{this.state.data.capital}</h4>
                    </div>
                    <div className="finaldata_info-item content">
                        <h4>currency</h4>
                        <h4>{ this.state.dataCur.toString()}</h4>
                    </div>
                    <div className="finaldata_info-item content">
                        <h4>languages</h4>
                        <h4>{this.state.dataLan.toString()}</h4>
                    </div>
                    <div className="finaldata_info-item content">
                        <h4>population</h4>
                        <h4>{this.state.data.population}</h4>
                    </div>            
                    <div className="finaldata_info-item content">
                        <h4>area</h4>
                        <h4>{this.state.data.area} sqkm</h4>
                    </div>
                    <div className="finaldata_info-item content">
                        <h4>domain</h4>
                        <h4>{this.state.data.topLevelDomain}</h4>
                    </div>
                    <div className="finaldata_info-item content">
                        <h4>code</h4>
                        <h4>{this.state.data.alpha2Code}</h4>
                    </div>              
        
                </div>
                <div className="finaldata_flag">
                    <img className="finaldata_flag-img" src={this.state.data.flag} alt="flag"/>
                </div>

            </div>

        );
    }
}

export default FinalData;