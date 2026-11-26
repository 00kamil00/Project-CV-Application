import './App.css'
import { useState } from 'react'
import { Contact } from './components/Contact'
import { CVPreview } from './components/CVPreview'

function App() {
  const [contactInfo, setContactInfo] = useState({
        fullName: '',
        email: '',
        location: '',
        professionalTitle: '',
        phoneNumber: '',
        website: ''
    })

  return (
    <>
      <h1>CV Application</h1>
      <header></header>
      <main>
        <section className='left-column'>
          <Contact contactInfo={contactInfo} setContactInfo={setContactInfo} />
        </section>
        <section className='right-column'>
          <CVPreview contactInfo={contactInfo} />
        </section>
      </main>
      <footer></footer>
    </>
  )
}

export { App }