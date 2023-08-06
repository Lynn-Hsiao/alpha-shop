import React, { useContext } from 'react'
import FormContext from '../../Context/FormContext'
import styles from './Register.module.css'
import StepProgress from './StepProgress'
import StepOneAddress from './StepOneAddress'
import StepTwoShipping from './StepTwoShipping'
import StepThreePayment from './StepThreePayment'
import ProgressControl from './ProgressControl'

function Register() {
  const { step, setStep }  = useContext(FormContext)
  const { delivery, setDelivery } = useContext(FormContext)
  const { checked, setChecked } = useContext(FormContext)
  const { addressData, setAddressData } = useContext(FormContext)
  const { cardData, setCardData } = useContext(FormContext)

  // const [step, setStep] = useState(1)
  // const [delivery, setDelivery] = useState('standard')
  // const [checked, setChecked] = useState(0)
  // const [addressData, setAddressData] = useState({
  //   title: "",
  //   name: "",
  //   phone: "",
  //   email: "",
  //   county: "",
  //   address: ""
  // })
  // const [cardData, setCardData] = useState({
  //   cardUserName: "",
  //   cardNumber: "",
  //   cardExpirationDate: "",
  //   CardCVCCCV: ""
  // })

  function DisplayStep({step, addressData, delivery, cardData}) {
    if (step === 1) {
      return <StepOneAddress addressData={addressData}/>
    } else if (step === 2) {
      return <StepTwoShipping delivery={delivery}/>
    } else {
      return <StepThreePayment cardData={cardData}/>
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