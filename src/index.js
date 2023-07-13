import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './index.module.css';
import reportWebVitals from './reportWebVitals';
import StepProgress from './components/Step/StepProgress/StepProgress';
import StepOneAddress from './components/Step/Step/StepOneAddress'
import StepTwoShipping from './components/Step/Step/StepTwoShipping'
import StepThreePayment from './components/Step/Step/StepThreePayment'
import ProgressControl from './components/Step/ProgressControl/ProgressControl'
import Cart from './components/Cart/Cart'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className={styles.mainContainer}>
      <div className={styles.step}>
        <StepProgress/>
        <section className={styles.formContainer}>
          <StepOneAddress/>
          <StepTwoShipping/>
          <StepThreePayment/>
        </section>
        <ProgressControl/> 
      </div>
      <Cart className={styles.cart} />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
