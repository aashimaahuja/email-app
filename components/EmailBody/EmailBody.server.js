import emailBody from '../../mockEmailBody'
import emailData from '../../mockEmailData'
import EmailBodyUI from './EmailBodyUI.client'

export default function EmailBody({ id }) {
  if (!id) {
    return <></>
  }

  const { list: emailList } = emailData
  const { from, subject, date } = emailList[id - 1]
  const body = emailBody[id - 1]?.body

  return (
    <EmailBodyUI key={id} name={from.name} subject={subject} date={date}>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </EmailBodyUI>
  )
}
