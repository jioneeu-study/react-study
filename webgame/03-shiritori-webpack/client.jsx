const React = require('react');
const ReactDOM = require('react-dom');
const { hot } = require('react-hot-loader/root');

const Shiritori = require('./shiritori');

ReactDOM.render(<Shiritori />, document.querySelector('#root'))

export default hot(Shiritori);