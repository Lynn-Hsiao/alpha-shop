import React, { useState } from 'react'
import styles from './Register.module.css'
import StepProgress from './StepProgress'
import StepOneAddress from './StepOneAddress'
import StepTwoShipping from './StepTwoShipping'
import StepThreePayment from './StepThreePayment'
import ProgressControl from './ProgressControl'

function Register() {
  const [step, setStep] = useState(1 )
  // const [active, setActive] = useState(true)
  const [checked, setChecked] = useState(0)
  const [addressData, setAddressData] = useState({
    title: "",
    name: "",
    phone: "",
    email: "",
    county: "",
    address: ""
  })
  const [cardData, setCardData] = useState({
    cardUserName: "",
    cardNumber: "",
    cardExpirationDate: "",
    CardCVCCCV: ""
  })

  function DisplayStep({step}) {
    if (step === 1) {
      return <StepOneAddress addressData={addressData}/>
    } else if (step === 2) {
      return <StepTwoShipping checked={checked}/>
    } else {
      return <StepThreePayment cardData={cardData}/>
    }
  }


  return (
    <div >
      <StepProgress step={step} setStep={setStep} checked={checked}/>
      <section className={styles.formContainer}>
        <DisplayStep step={step} addressData={addressData} checked={checked} cardData={cardData}/>
      </section>
      <ProgressControl step={step} setStep={setStep} checked={checked} setChecked={setChecked}/> 
    </div>
  )
}

export default Register