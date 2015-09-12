import React from 'react';
import ReactDOM from 'react-dom';
import Root from './js/view/Root';
import {data} from './js/db';

ReactDOM.render(<Root {...data} />, document.getElementById('app'));
