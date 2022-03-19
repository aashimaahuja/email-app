import styles from './emailCard.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function EmailCard({ id, email, date }) {
  const router = useRouter()
  const { from, subject, short_description } = email
  const initials = from.name[0].toUpperCase()
  const [isImportant, setIsImportant] = useState(false)

  const markFavourite = () => {
    setIsImportant(true)
  }
  return (
    <div
      key={id}
      className={styles.emailCard}
      onClick={() => router.push(`/email/${id}`)}
    >
      <div className={styles.avatar}>{initials}</div>
      <div className={styles.content}>
        <div>
          From:{' '}
          <span>
            <strong>
              {from.name} {`<${from.email}>`}
            </strong>
          </span>
        </div>
        <div>
          Subject:{' '}
          <span>
            <strong>{subject}</strong>
          </span>
        </div>
        <p>{short_description}</p>
        <p>{date}</p>
        {isImportant ? (
          <span>Important</span>
        ) : (
          <button className={styles.markFavouriteBtn} onClick={markFavourite}>
            Mark as important
          </button>
        )}
      </div>
    </div>
  )
}
