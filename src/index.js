import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';

Moment.locale('en')
momentLocalizer()

ReactDOM.render(<App />, document.getElementById('root'));