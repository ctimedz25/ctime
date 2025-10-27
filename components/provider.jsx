'use client'
import Header from "./Header"
import Footer from "./Footer"

export default function Provider({children}) {
  
    return (
      <>
        <Header/>

            {children}
        <Footer/>
      </>
    )
  }