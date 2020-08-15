import React, { useState, memo, useRef } from 'react';

const ReactionGame = memo(() => {
    const [state, setState] = useState('waiting');
    const [message, setMessage] = useState('Click to start');
    const [result, setResult] = useState([]);
    const timeOut = useRef(null);
    const startTime = useRef(null);
    const endTime = useRef(null);

    const onClickScreen = () => {
        if (state === 'waiting') {
            setState('ready');
            setMessage('Click when Green!');
            
            timeOut.current = setTimeout(() => {
                setState('now');
                setMessage('Click NOW!');
                startTime.current = new Date();
            }, Math.floor(Math.random() * 1000) + 2000);
        } else if (state === 'ready') {
            clearTimeout(timeOut.current);
            setState('waiting');
            setMessage('Too fast! Click when Green');
        } else if (state === 'now') {
            endTime.current = new Date();
            setState('waiting');
            setMessage('Click to start');
            setResult((prevResult) => {
                return [...prevResult, endTime.current - startTime.current]
            });
        }
    }

    const onReset = () => {
        setResult([]);
    };
        
    const renderAverage = () => {
        return result.length === 0 
        ? null  
        : <>
            <div>
                Average Time: {result.reduce((a, c) => a+c) / result.length}ms
            </div>
            <button onClick={onReset}>Reset</button>
          </>
    };

    return (
        <>
        <div
            id="screen"
            className={state}
            onClick={onClickScreen}
        >
            {message}
        </div>
        {renderAverage()}
        </>
    );
});


export default ReactionGame;