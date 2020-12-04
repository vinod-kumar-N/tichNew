import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@Store';
import App from './App';
import './styles/index.scss';
import Loader from '@Uilib/loader';

const AppWithRouter = () => (
  <Provider store={store}>
    <Router>
      <Loader />
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(<AppWithRouter />, document.getElementById('root'));
