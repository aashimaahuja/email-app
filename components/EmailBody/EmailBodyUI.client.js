import styles from './emailBody.module.css'

export default function EmailBodyUI({ key, name, subject, date, children }) {
  return (
    <div key={key} className={styles.emailContainer}>
      <div className={styles.avatar}>{name[0].toUpperCase()}</div>
      <div className={styles.emailBody}>
        <header>{subject}</header>
        {children}
      </div>
    </div>
  )
}
