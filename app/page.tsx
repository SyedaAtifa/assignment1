import React from 'react'
import AboutPage from './about/page'
import ContactPage from './contacts/page'
import ServicesPage from './services/page'
import Nested from './services/nested/page'
import NewPage from './services/new/page'

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <AboutPage></AboutPage>
      <ContactPage></ContactPage>
      <ServicesPage></ServicesPage>
      <Nested></Nested>
      <NewPage></NewPage>
    </div>
  )
}

export default HomePage