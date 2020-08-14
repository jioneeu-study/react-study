const React = require('react');
const ReactDOM = require('react-dom');
const { hot } = require('react-hot-loader/root');

const Shiritori = require('./shiritori');
const Hot = hot(Shiritori)

ReactDOM.render(<Hot />, document.querySelector('#root'))