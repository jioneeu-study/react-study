const React = require('react');
const { Component } = React;

class GuGuDan extends Component {
    state = {
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        answer: '',
        result: '',
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.answer == this.state.first * this.state.second) {
            this.setState((prevState) => {
                return {
                    first: Math.ceil(Math.random() * 9),
                    second: Math.ceil(Math.random() * 9),
                    answer: '',
                    result: 'Correct!',
                };
            });
        } else {
            this.setState((prevState) => {
                return{
                    answer: '',
                    result: 'Wrong!',
                };
            });
        }
    };

    onChange = (e) => {
        this.setState({ answer: e.target.value })
    };

    render() {
        return (
        <>
            <div id="question">
                { this.state.first } times { this.state.second } is?
            </div>
            <form onSubmit={this.onSubmit}>
                <input type="number" value={this.state.answer} onChange={this.onChange} />
                <button type="submit">Check!</button>
            </form>
            <div id="result">
                { this.state.result }
            </div>
        </>
        )
    }
}

module.exports = GuGuDan;