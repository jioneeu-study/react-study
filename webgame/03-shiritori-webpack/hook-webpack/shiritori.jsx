const React = require('react');
const { useState, useRef } = React;

const Shiritori = () => {
    const [word, setWord] = useState('Jione');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();

        
        if (word[word.length - 1].toLowerCase() === value[0].toLowerCase()) {
            setResult('Correct!');
            setWord(value[0].toUpperCase() + value.substr(1));
            setValue('');
        } else {
            setResult('Wrong!');
            setWord(word[0].toUpperCase() + word.substr(1));
            setValue('');
        }
        inputRef.current.focus();
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <>
            <div>{ word }</div>
            <form onSubmit={onSubmitForm}>
                <input type="text" ref={inputRef} value={value} onChange={onChangeInput}/>
                <button type="submit">Check!</button>
            </form>
            <div>{result }</div>
        </>
    );
} 

module.exports = Shiritori;