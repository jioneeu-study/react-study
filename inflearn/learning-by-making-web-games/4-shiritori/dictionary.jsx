import axios from 'axios';

const base = 'https://stdict.korean.go.kr/api/search.do?';
const key = 'key=B7F84D10A34D0B2FC7C8A19772619E22';
const url = base + key + '&q=';

function searchResult(word) {
    if (!word || word === '' || word === undefined || word === NaN) {
        word = '버그';
    }
    console.log('checking: ' + word);

    return Promise.resolve(axios.get('https://cors-anywhere.herokuapp.com/' + url + word))
}

export async function search(word) {
    return await searchResult(word);
}
