import React from 'react';
import parser from 'fast-xml-parser';

const Dictionary = require('./dictionary');

const Shiritori = () => {
    const [prevWord, setPrevWord] = React.useState('유버그');
    const [currWord, setCurrWord] = React.useState('');
    const [result, setResult] = React.useState('');

    const onChangeInput = (e) => {
        setCurrWord(e.target.value);
    };

    const onClickButton = () => {
        setResult('...checking');
        const t = Dictionary.search(currWord);
        t.then((val) => {
            console.dir(val.data);
            let json = parser.parse(val.data);
            console.dir(json);
            const wordTotal = json.channel.total;

            if (wordTotal === 0) {
                setResult('Wrong!');
            } else {
                const item = json.channel.item;
                if (item.sense) {
                    console.log(item.sense.definition);
                } else {
                    item.forEach(element => {
                        console.log(element.sense.definition);
                    });
                }
                console.log('currWord: ' + currWord);
                if (!currWord || currWord === '') {
                    setPrevWord('버그');
                } else {
                    setPrevWord(currWord);
                }
                setCurrWord('');
                setResult('Correct!');
            }
        })
    }

    return (
        <>
            <div>
                <div id="prev">{prevWord}</div>
                <div id="current">
                    <input value={currWord} onChange={onChangeInput}></input>
                    <button onClick={onClickButton}>Check</button>
                </div>
                <div id="result">{result}</div>
            </div>
        </>
    )
};

export default Shiritori;