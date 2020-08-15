import React, { Component } from 'react';

class ReactionGame extends Component {
    state =  {
        state: 'waiting',
        message: 'Click to start',
        result: [],
    };

    timeout;
    startTime;
    endTime; 

    onClickScreen = () => {
        const { state, message, result } = this.state;
        if (state === 'waiting') {
            this.setState({
                state: 'ready',
                message: 'Click when Green!'
            });
            this.timeout = setTimeout(() => {
                this.setState({
                    state: 'now',
                    message: 'Click NOW!'
                })
                this.startTime = new Date();
            }, Math.floor(Math.random() * 1000) + 2000);
        } else if (state === 'ready') {
            clearTimeout(this.timeout);
                this.setState({
                    state: 'waiting',
                    message: 'Too fast! Click when Green',
                })

        } else if (state === 'now') {
            this.endTime = new Date();
            this.setState((prevState) => {
                return{
                    state: 'waiting',
                    message: 'Click to start',
                    result: [...prevState.result, this.endTime - this.startTime],
                }
            })
        }
    };

    onReset = () => {
        this.setState({
            result: [],
        })
    }

    renderAverage = () => {
        const { result } = this.state;
        return result.length === 0 
        ? null  
        : <>
            <div>
                Average Time: {result.reduce((a, c) => a+c) / result.length}ms
            </div>
            <button onClick={this.onReset}>Reset</button>
          </>
    };
    render() {
    return (
            <>
            <div
                id="screen"
                className={this.state.state}
                onClick={this.onClickScreen}
            >
                {this.state.message}
            </div>
            {this.renderAverage()}
            </>
        )
    }
}

export default ReactionGame;