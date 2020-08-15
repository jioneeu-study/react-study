import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root'

import ReactionGame from './reactionGame';

const Hot = hot(ReactionGame);

ReactDOM.render(<Hot />, document.querySelector('#root'));