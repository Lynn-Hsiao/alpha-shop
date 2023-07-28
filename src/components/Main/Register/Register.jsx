import styles from './Register.module.css'
import StepProgress from './StepProgress';
import StepOneAddress from './StepOneAddress'
import StepTwoShipping from './StepTwoShipping'
import StepThreePayment from './StepThreePayment'
import ProgressControl from './ProgressControl'

function Register() {
  return (
    <div className={styles.step}>
      <StepProgress/>
      <section className={styles.formContainer}>
        <StepOneAddress/>
        <StepTwoShipping/>
        <StepThreePayment/>
      </section>
      <ProgressControl/> 
    </div>
  )
}

export default Register