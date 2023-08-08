import styles from './ProgressControl.module.css'
import { ReactComponent as RightArrow} from '../../../icons/right-arrow.svg'
import { ReactComponent as LeftArrow} from '../../../icons/left-arrow.svg'
import { useContext } from 'react'
import FormContext  from '../../Context/FormContext'
import CartContext from '../../Context/CartContext'

function PrevButton() {
  const {setStep, setChecked} = useContext(FormContext)
  return(
    <button className={styles.prev} onClick={() => {
      setStep((currentStep) => currentStep - 1);
      setChecked((currentChecked) => currentChecked - 1)}      
      }>
      <LeftArrow className={styles.leftArrow}/>
      上一步
    </button>
  )
}

function NextButton() {
  const {setStep, setChecked} = useContext(FormContext)
  return(
    <button className={styles.next} onClick={() => {
      setStep((currentStep) => currentStep + 1); 
      setChecked((currentChecked) => currentChecked + 1)}}>
      下一步
      <RightArrow className={styles.rightArrow}/>
    </button> 
  )
}

function ShowButton () {
  const { step, setStep, setChecked, setAddressData, cardData, setCardData } = useContext(FormContext)
  const { totalPrice } = useContext(CartContext)

  if (step === 1) {
    return (
      <section className={styles.buttonGroup} data-phase="address">
        <button className={styles.hiddenPrev}>
        </button>
        <NextButton setStep={setStep} setChecked={setChecked} setAddressData={setAddressData}/> 
      </section>
    )
  } else if (step === 2) {
    return (
      <section className={styles.buttonGroup}>
        <PrevButton setStep={setStep} setChecked={setChecked}/> 
        <NextButton setStep={setStep} setChecked={setChecked}/> 
      </section>
    )
  } else {
    return (
      <section className={styles.buttonGroup} data-phase="credit-card">
        <PrevButton setStep={setStep} setChecked={setChecked}/> 
        <button className={styles.next} setStep={setStep} setChecked={setChecked} setCardData={setCardData} cardData={cardData} onClick={() => {
          setStep((currentStep) => currentStep + 1); 
          setChecked((currentChecked) => currentChecked + 1);
          console.log(`
            請核對以下資訊
            持卡人 :${cardData.cardUserName}
            卡號 :${cardData.cardNumber}
            有效期限 :${cardData.cardExpirationDate}
            CVC / CCV :${cardData.cardCVCCCV}
            總金額 :${totalPrice}
          `)
          alert("Form Submitted!")
        }}>
          確認下單
        </button>
      </section>
    )
  }
}

function ProgressControl () {
  const { step, setStep, setChecked, setAddressData, cardData, setCardData } = useContext(FormContext)
  const { totalPrice } = useContext(CartContext)

  return (
    <section className={styles.progressControlContainer}>
      <ShowButton step={step} setStep={setStep} setChecked={setChecked} setAddressData={setAddressData} cardData={cardData} setCardData={setCardData} totalPrice={totalPrice}/>
    </section>
  )
}

export default ProgressControl;