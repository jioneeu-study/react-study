import React from 'react';
const { Component } = React;

/* Hooks */
const Gugudan = () => {
    const [first, setFirst] = React.useState(Math.ceil(Math.random() * 20));
    const [second, setSecond] = React.useState(Math.ceil(Math.random() * 20));
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');

    const onSubmitForm = (e) => {
        e.preventDefault();
        let a = parseInt(first);
        let b = parseInt(second);
        let answer = a * b;

        if (parseInt(value) === answer) {
            setFirst(Math.ceil(Math.random() * 20));
            setSecond(Math.ceil(Math.random() * 20));
            setValue('');
            setResult(<div>CORRECT! <br /> {a} x {b} = {answer} </div>);
        } else {
            setValue('');
            setResult(<div>WRONG! <br /> {a} x {b} is NOT {+value} </div>);
        }
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <>
            <div>{first} times {second} is?</div>
            <form onSubmit={onSubmitForm}>
                <input type="number" value={value} onChange={onChangeInput} />
                <button>Check!</button>
            </form>
            <div>{result}</div>
        </>
    )

};

/* Class */
// class Gugudan extends Component {
//     state = {
//         first: Math.ceil(Math.random() * 20),
//         second: Math.ceil(Math.random() * 20),
//         value: '',
//         result: '',
//     };

//     onSubmit = (e) => {
//         e.preventDefault();
//         let a = parseInt(first);
//         let b = parseInt(second);
//         let answer = a * b;

//         if (parseInt(value) === answer) {
//             this.setState({
//                 first: Math.ceil(Math.random() * 20),
//                 second: Math.ceil(Math.random() * 20),
//                 value: '',
//                 result: <div>CORRECT! <br /> {a} x {b} = {answer} </div>,
//             })
//         } else {
//             this.setState({
//                 value: '',
//                 result: <div>WRONG! <br /> {a} x {b} is NOT {+value} </div>,
//             })
//         }
//     };

//     onChange = (e) => {
//         this.setState({
//             value: e.target.value,
//         })
//     };

//     render() {
//         return (
//             <>
//                 <div>{first} times {second} is?</div>
//                 <form onSubmit={this.onSubmit}>
//                     <input type="number" value={value} onChange={this.onChange} />
//                     <button>Check!</button>
//                 </form>
//                 <div>{result}</div>
//             </>
//         );
//     };
// }

export default Gugudan;