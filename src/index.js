import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// todo
import { createStore } from 'redux';
// providder work as a wrapper    
import { Provider } from 'react-redux';
import root_reducer from './service/reducer/root_reducer';
const store = createStore(root_reducer)
console.log("store data",store)
// todo

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider  store={store}>
    <App />
  </Provider>
);


