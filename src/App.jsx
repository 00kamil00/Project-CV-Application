import './App.css'
import { useState } from 'react'
import { CVPreview } from './components/CVPreview'
import { Contact } from './components/Contact'
import { Summary } from './components/Summary'

function App() {
  const [contactInfo, setContactInfo] = useState({
        fullName: '',
        email: '',
        location: '',
        professionalTitle: '',
        phoneNumber: '',
        website: ''
    })
    const [summary, setSummary] = useState("")

  return (
    <>
      <h1>CV Application</h1>
      <header></header>
      <main>
        <section className='left-column'>
          <Contact contactInfo={contactInfo} setContactInfo={setContactInfo} />
          <Summary summary={summary} setSummary={setSummary} />
        </section>
        <section className='right-column'>
          <CVPreview contactInfo={contactInfo} summary={summary} />
        </section>
      </main>
      <footer></footer>
    </>
  )
}

export { App }