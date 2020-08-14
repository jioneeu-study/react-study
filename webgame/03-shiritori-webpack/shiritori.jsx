const React = require('react');
const { Component } = React;

class Shiritori extends Component {
    state = {
        text: 'Hello, Webpack!',
    };

    render() {
        return <h1>{this.state.text}</h1>;
    }
} 

module.exports = Shiritori;