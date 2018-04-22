import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter, Switch, BrowserRouter as Router, Route, Link} from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router>
      <App />
  </Router>, document.getElementById('root'));
registerServiceWorker();
