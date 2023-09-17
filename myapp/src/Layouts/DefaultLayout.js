import React from 'react'
import { Footer } from './Partials/Footer.comp'
import { Header } from './Partials/Header.comp'
export const 
 DefaultLayout= ({children}) => {
  return (
    <div>
      <div className="default-layout">
        <div className="header">
          <Header></Header>

        </div>
        <div className="main">
        {children}

        </div>
        <div className="footer">
          <Footer/>

        </div>


      </div>
        
        
    </div>
  )
}
