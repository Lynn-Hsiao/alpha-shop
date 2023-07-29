import styles from "./StepProgress.module.css"
import  { ReactComponent as PgComplete } from "../../../icons/pg-complete.svg"


function StepProgress ({step, checked}) {
  const registerTitle = <h2 className={styles.registerTitle}>結帳</h2>

  return (
    <div>
      {registerTitle}
      <section className={styles.progressContainer}>
        <span className={(step < 1) ? styles.progressGroup : styles.progressGroupActive} data-phase="address">
          <span className={styles.progressIcon}>
            {((step < 2) && (checked < 1)) && <span className={(step < 1) ? styles.text : styles.textActive}>1</span>}
            {((step > 0) && (checked > 0)) &&<PgComplete className={styles.completeIcon}/>}
          </span>
          <span className={styles.progressLabel}>寄送地址</span>
          <span className={(step < 1) ? styles.progressBar : styles.progressBarActive} data-order="1"></span>
        </span>
        <span className={(step < 2) ? styles.progressGroup : styles.progressGroupActive} data-phase="shipping">
          <span className={styles.progressIcon}>
            {((step < 3) && (checked < 2)) && <span className={(step < 2) ? styles.text : styles.textActive}>2</span>}
            {((step > 1) && (checked > 1)) &&<PgComplete className={styles.completeIcon}/>}
          </span>
          <span className={styles.progressLabel}>運送方式</span>
          <span className={(step < 1) ? styles.progressBar : styles.progressBarActive} data-order="2"></span>
        </span>
        <span className={(step < 3) ? styles.progressGroup : styles.progressGroupActive}data-phase="credit-card">
          <span className={styles.progressIcon}>
            {((step < 4) && (checked < 3)) && <span className={(step < 3) ? styles.text : styles.textActive}>3</span>}
            {((step > 2) && (checked > 2)) &&<PgComplete className={styles.completeIcon}/>}
          </span>
          <span className={styles.progressLabel}>付款資訊</span>
        </span>
      </section>
    </div>
  )
}

export default StepProgress;