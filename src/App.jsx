import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experiences from './components/experiences/Experiences'
import Services from './components/services/Services'
import Portifolio from './components/portifolio/Portifolio'
import Testemonials from './components/testemonials/Testemonials'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experiences />
      <Services />
      <Portifolio />
      <Testemonials />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App