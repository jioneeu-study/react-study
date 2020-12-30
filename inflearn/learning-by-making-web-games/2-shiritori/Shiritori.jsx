import React from 'react';
const { Component } = React;

class Gugudan extends Component {
    state = {
        first: Math.ceil(Math.random() * 20),
        second: Math.ceil(Math.random() * 20),
        value: '',
        result: '',
    };

    onSubmit = (e) => {
        e.preventDefault();
        let a = parseInt(this.state.first);
        let b = parseInt(this.state.second);
        let answer = a * b;

        if (parseInt(this.state.value) === answer) {
            this.setState({
                first: Math.ceil(Math.random() * 20),
                second: Math.ceil(Math.random() * 20),
                value: '',
                result: <div>CORRECT! <br /> {a} x {b} = {answer} </div>,
            })
        } else {
            this.setState({
                value: '',
                result: <div>WRONG! <br /> {a} x {b} is NOT {+this.state.value} </div>,
            })
        }
    };

    onChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    };

    render() {
        return (
            <>
                <div>{this.state.first} times {this.state.second} is?</div>
                <form onSubmit={this.onSubmit}>
                    <input type="number" value={this.state.value} onChange={this.onChange} />
                    <button>Check!</button>
                </form>
                <div>{this.state.result}</div>
            </>
        );
    };
}

export default Gugudan;