import EmailList from '../components/EmailList/EmailList.server'
import EmailBody from '../components/EmailBody/EmailBody.server'
import styles from '../styles/globals.css'

export default function EmailApp({ children }) {
  return (
    <div className="emailApp">
      <EmailList />
      <section>{children}</section>
    </div>
  )
}
