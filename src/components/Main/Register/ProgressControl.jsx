import styles from './ProgressControl.module.css'
import { ReactComponent as RightArrow} from '../../../icons/right-arrow.svg'
import { ReactComponent as LeftArrow} from '../../../icons/left-arrow.svg'

function PrevButton({setStep, setChecked}) {
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

function NextButton({setStep, setChecked, setAddressData, setCardData}) {
  return(
    <button className={styles.next} onClick={() => {
      setStep((currentStep) => currentStep + 1); 
      setChecked((currentChecked) => currentChecked + 1)}}>
      下一步
      <RightArrow className={styles.rightArrow}/>
    </button> 
  )
}

function ShowButton ({step, setStep, setChecked, setAddressData, setCardData} ) {
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
        <button className={styles.next} setStep={setStep} setChecked={setChecked} setCardData={setCardData} onClick={() => {
          setStep((currentStep) => currentStep + 1); 
          setChecked((currentChecked) => currentChecked + 1);
          alert("Form Submitted!")
        }}>
          確認下單
        </button>
      </section>
    )
  }
}

function ProgressControl ({step, setStep, setChecked, setAddressData, setCardData}) {
  return (
    <section className={styles.progressControlContainer}>
      <ShowButton step={step} setStep={setStep} setChecked={setChecked} setAddressData={setAddressData} setCardData={setCardData} />
    </section>
  )
}

export default ProgressControl;