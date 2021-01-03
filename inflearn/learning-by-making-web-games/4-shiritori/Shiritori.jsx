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
        if (currWord[0] != prevWord[prevWord.length - 1]) {
            setResult(`'${prevWord[prevWord.length - 1]}'(으)로 시작하는 단어를 입력해주세요.`);
            return;
        }
        setResult('...확인 중');
        const t = Dictionary.search(currWord);
        t.then((val) => {
            let json = parser.parse(val.data);
            /** @debugstart */
            console.log("json: ");
            console.dir(json);
            /* @debugend */

            const wordTotal = json.channel.total;

            if (wordTotal === 0) {
                setResult(`'${currWord}' - [표준국어대사전]에 기재되어 있지 않습니다.`);
            } else {
                const item = json.channel.item;
                if (item.sense) {
                    setResult(`'${currWord}' - ${item.sense.definition}`);
                } else {
                    let str = `${currWord} -> \n`;
                    item.forEach(element => {
                        str += (element.sense.definition + '\n');
                    });

                    setResult(str);
                }
                const TEMP = prevWord;

                setPrevWord(`${TEMP} -> ${currWord}`);

                setCurrWord('');
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