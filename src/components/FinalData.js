import React, { Component } from 'react';

class FinalData extends Component {
    render() {
        return (
            <div>
            <div>{this.props.location.data.name}</div>
            <div>{this.props.location.data.topLevelDomain}</div>
            <div>{this.props.location.data.alpha2Code}</div>
            <img src={this.props.location.data.flag} alt="flag"/>
        </div>
        );
    }
}

export default FinalData;