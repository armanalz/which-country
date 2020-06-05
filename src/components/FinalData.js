import React, { Component } from 'react';

class FinalData extends Component {
    render() {
        return (

            <div className="finaldata">

                <div className="finaldata_info">
                    <div className="finaldata_info-item-name content">{this.props.location.data.name}</div>
                    <div className="finaldata_info-item content">
                        <h4>native name</h4>
                        <h4>{this.props.location.data.nativeName}</h4>
                    </div>
                    <div className="finaldata_info-item content">
                        <h4>capital</h4>
                        <h4>{this.props.location.data.capital}</h4>
                    </div>
                    <div className="finaldata_info-item content">
                        <h4>currency</h4>
                        <h4>{this.props.location.data.currencies[0].name}</h4>
                    </div>
                    <div className="finaldata_info-item content">
                        <h4>languages</h4>
                        <h4>{this.props.location.data.languages[0].name}</h4>
                    </div>
                    <div className="finaldata_info-item content">
                        <h4>population</h4>
                        <h4>{this.props.location.data.population}</h4>
                    </div>            
                    <div className="finaldata_info-item content">
                        <h4>area</h4>
                        <h4>{this.props.location.data.area} sqkm</h4>
                    </div>
                    <div className="finaldata_info-item content">
                        <h4>domain</h4>
                        <h4>{this.props.location.data.topLevelDomain}</h4>
                    </div>
                    <div className="finaldata_info-item content">
                        <h4>code</h4>
                        <h4>{this.props.location.data.alpha2Code}</h4>
                    </div>
                    
                   
        
                </div>
                <div className="finaldata_flag">
                    <img className="finaldata_flag-img" src={this.props.location.data.flag} alt="flag"/>
                </div>

            </div>

        );
    }
}

export default FinalData;