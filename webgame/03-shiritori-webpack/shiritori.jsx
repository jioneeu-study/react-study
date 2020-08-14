const React = require('react');
const { Component } = React;

class Shiritori extends Component {
    state = {
        word: "Jione",
        value: '',
        result: '',
    };

    onSubmitForm = (e) => {
        e.preventDefault();

        this.state.word = this.state.word.toLowerCase();
        this.state.value = this.state.value.toLowerCase();
        if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
            this.setState({
                result: 'Correct!',
                word: this.state.value[0].toUpperCase() + this.state.value.substr(1),
                value: '',
            })
        } else {
            this.setState({
                result: 'Wrong!',
                word: this.state.word[0].toUpperCase() + this.state.word.substr(1),
                value: '',
            })
        }

        this.input.focus();
    };

    onChangeInput = (e) => {
        this.setState({ value: e.target.value });
    };

    input;
    onRefInput = (c) => {
        this.input = c;
    };

    render() {
        return (
            <>
                <div>{ this.state.word }</div>
                <form onSubmit={this.onSubmitForm}>
                    <input type="text" ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput}/>
                    <button type="submit">Enter!</button>
                </form>
                <div>{ this.state.result }</div>
            </>
        );
    }
} 

module.exports = Shiritori;