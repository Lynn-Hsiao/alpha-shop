import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './index.module.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header/Header'
import Register from './components/Main/Register/Register'
import Cart from './components/Main/Cart/Cart'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <div className={styles.mainContainer}>
      <Register />
      <Cart />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
