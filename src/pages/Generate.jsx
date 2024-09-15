import React from 'react'
import CertificateGenerator from '../components/CertificateGenerator'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Generate() {
  return (
    <div>
    <Navbar/>
      <CertificateGenerator/>
      <Footer/>
    </div>
  )
}
