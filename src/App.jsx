import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experiences from './components/experiences/Experiences'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
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
      <Portfolio />
      <Testemonials />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App