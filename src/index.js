import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-state';
import { BrowserRouter } from 'react-router-dom';
import StoreContext from './storeContext';

let rerenderEntireTree = (state)=> {
  ReactDOM.render(
		<BrowserRouter>
      <React.StrictMode>
        <StoreContext.Provider value={store}>
        <App />
        </StoreContext.Provider>
      </React.StrictMode>
		</BrowserRouter>,
    document.getElementById('root')
  );
}
rerenderEntireTree(store.getState());

store.subscribe(()=>{
  let state = store.getState();
  rerenderEntireTree(state);
});