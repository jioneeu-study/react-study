const React = require('react');

const {useState} = React

const GuGuDan = () => {
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (value == first * second) {
            setResult(`Yes ${value}. That's correct!`);
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            
            inputRef.current.focus();
        } else {
            setResult(`${first} x ${second} is not ${value}. Wrong`);
            setValue('');
            
            inputRef.current.focus();
        }
    }

    console.log('rendering');
    return (
    <>
    <div>{first} times {second} is ?</div>
    <form onSubmit={onSubmitForm}>
        <input ref={inputRef} onChange={onChangeInput} value={value}/>
        <button>Enter!</button>
    </form>
    <div id="result">{result}</div>
    </>
    )
}


module.exports = GuGuDan;