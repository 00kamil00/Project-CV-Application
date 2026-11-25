import './App.css'
import { Contact } from './components/Contact'

function App() {
  return (
    <>
      <h1>CV Application</h1>
      <header></header>
      <main>
        <section className='left-column'>
          <Contact />
        </section>
        <section className='right-column'></section>
      </main>
      <footer></footer>
    </>
  )
}

export { App }