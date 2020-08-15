import React, { Component } from 'react';

class Attempt extends Component {
    render() {
        const { value } = this.props;
        return (
        <li key="{this.props.key}"> {value.attempt}<br/>{value.result}</li>
        )
    }
}

export default Attempt;