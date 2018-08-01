import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ComplaintForm from './components/complaint-form';
import { Provider } from 'react-redux'
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}><ComplaintForm /></Provider>, document.getElementById('root'));
registerServiceWorker();
