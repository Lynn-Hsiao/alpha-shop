import React, { useContext } from 'react'
import FormContext from '../../Context/FormContext'
import styles from './Register.module.css'
import StepProgress from './StepProgress'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import ProgressControl from './ProgressControl'

function Register() {
  const { step, setStep }  = useContext(FormContext)
  const { delivery, setDelivery } = useContext(FormContext)
  const { checked, setChecked } = useContext(FormContext)
  const { addressData, setAddressData } = useContext(FormContext)
  const { cardData, setCardData } = useContext(FormContext)

  function DisplayStep( ) {
    if (step === 1) {
      return <Step1 addressData={addressData}/>
    } else if (step === 2) {
      return <Step2 delivery={delivery}/>
    } else {
      return <Step3 cardData={cardData}/>
    }
  }

  return (
    <div >
      <StepProgress step={step} checked={checked}/>
      <section className={styles.formContainer}>
        <DisplayStep step={step} addressData={addressData} checked={checked} delivery={delivery} setDelivery={setDelivery} cardData={cardData}/>
      </section>
      <ProgressControl step={step} setStep={setStep} checked={checked} setChecked={setChecked} setAddressData={setAddressData} setCardData={setCardData}/> 
    </div>
  )
}

export default Register