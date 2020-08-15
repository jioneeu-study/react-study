import React, {useState, useRef} from 'react';
import Attempt from './Attempt';
function getNumbers() {

}

const NumberBaseball = () => {
    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    const [answer, setAnswer] = useState(getNumbers());
    const [attempts, setAttempts] = useState(['1234','5678']);
    const onSubmitForm = (e) => {

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
            <ul>
                {
                    attempts.map((attempt) => {
                        return (
                            <Attempt value={attempt}/>
                        );
                    })
                }
            </ul>
        </>
    );
};
//module.exports = NumberBaseball; // not necessarily same but for now, they're compatible
export default NumberBaseball;