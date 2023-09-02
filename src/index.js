import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { store } from './Readux/store';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>

  
);

