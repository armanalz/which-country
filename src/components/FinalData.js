import React, { Component } from 'react';

class FinalData extends Component {
    render() {
        return (

            <div className="finaldata">

                <div className="finaldata name">{this.props.location.data.name}</div>
                <div className="finaldata domain">{this.props.location.data.topLevelDomain}</div>
                <div className="finaldata code">{this.props.location.data.alpha2Code}</div>
                <img className="finaldata flag" src={this.props.location.data.flag} alt="flag"/>

            </div>

        );
    }
}

export default FinalData;