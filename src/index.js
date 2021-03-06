import React from 'react';
import ReactDOM from 'react-dom';
import { applyPolyfills, defineCustomElements } from 'h8k-components/loader';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

applyPolyfills().then(() => {
    defineCustomElements(window);
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
