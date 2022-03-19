import Head from 'next/head'
import EmailList from '../../components/EmailList/EmailList.server'
import EmailBody from '../../components/EmailBody/EmailBody.server'

export default function EmailBodyPage({ router }) {
  const { query } = router
  const { id } = query
  console.log('router', router?.route)
  return (
    <div className="emailApp">
      <EmailList />
      <EmailBody id={id} />
    </div>
  )
}
