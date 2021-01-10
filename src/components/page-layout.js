import React from 'react'

import Footer from './footer'
import Header from './header'

const PageLayout = ({ children }) => {
  return (
    <main className='page-layout' >
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default PageLayout
