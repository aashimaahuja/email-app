import emailData from '../../mockEmailData'
import EmailCard from '../EmailCard/EmailCard.client'
import EmailListClient from './EmailList.client'
import { format, isToday } from 'date-fns'
import styles from './emailList.module.css'

export default function EmailList() {
  const { list: emailList } = emailData
  return (
    <EmailListClient>
      {emailList.map(email => (
        <EmailCard
          id={email.id}
          email={email}
          date={format(email.date, 'd/M/yy h:mm bb')}
        />
      ))}
    </EmailListClient>
  )
}
