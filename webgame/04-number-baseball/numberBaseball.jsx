import React, {useState, useRef} from 'react';
import Attempt from './Attempt';
function getNumbers() {
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i=0; i<4; ++i) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9-i)), 1)[0];
        array.push(chosen);
    }
    return array;
}

const NumberBaseball = () => {
    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    const [answer, setAnswer] = useState(getNumbers());
    const [attempts, setAttempts] = useState([]);

    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(answer);
         
        if (value == answer.join('')) {
            setResult('Homerun');
            setAttempts((prevAttempts) => {
                return [...attempts, {attempt: value, result: 'Homerun!'}]
            });
            alert("Congrats! Restarting the game");
            setValue('');
            setAnswer(getNumbers());
            setAttempts([]);
        } else {
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;

            if (attempts.length >= 9) {
                setResult(`The answer was (${answer.join(', ')})`);
                alert("Restarting the game");
                setValue('');
                setAnswer(getNumbers());
                setAttempts([]);
            } else {
                for (let i=0; i<4; ++i) {
                    if (answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                setValue('');
                setAttempts((prevAttempts) => {
                    return [...attempts, {attempt: value, result: `${strike} strike(s), ${ball} ball(s)`}]
                });
            }
        }
    }

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    return (
        <>
            <h1>{ result }</h1>
            <form onSubmit={onSubmitForm}>
                <input type="number" minLength={4} maxLength={4} value={value} onChange={onChangeInput}/>
                <button type="submit">Hit!</button>
            </form>
            <div>Attempts: {attempts.length}</div>
            <ol>
                {
                    attempts.map((attempt) => {
                        return (
                            <Attempt key={attempt.attempt} value={attempt}/>
                        );
                    })
                }
            </ol>
        </>
    );
};
//module.exports = NumberBaseball; // not necessarily same but for now, they're compatible
export default NumberBaseball;