import EmailApp from '../components/EmailApp.server'
import EmailList from '../components/EmailList/EmailList.server'
import EmailBody from '../components/EmailBody/EmailBody.server'
export default function Home({ router }) {
  const { id } = router.query
  return (
    <div className="emailApp">
      <EmailList />
      <EmailBody id={id} />
    </div>
    // <EmailApp>
    //   <EmailBody id={id} />
    // </EmailApp>
  )
}
