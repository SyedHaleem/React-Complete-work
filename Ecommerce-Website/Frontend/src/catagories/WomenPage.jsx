import React from 'react'
import WomenCards from '../components/WomenCards'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function WomenPage() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'> 
    <WomenCards/>
    </div>
    <Footer/>
    </>
  )
}

export default WomenPage