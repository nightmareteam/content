import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import path from 'path';
console.log(path.basename(window.document.URL))
ReactDOM.render(<App id={path.basename(window.document.URL)} />, document.getElementById('content'));