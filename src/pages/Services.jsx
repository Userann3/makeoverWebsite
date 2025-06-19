import React from 'react'
import Navbar from '../components/Navbar'
import NavigationForServices from '../components/NavigationForServices'
import Footer from '../components/Footer'
import AboutSection from '../components/AboutSection'
import MakeupServices from '../components/MakeupServices'

export default function Services() {
  return (
    <>
    <Navbar/>
    <NavigationForServices/>
    <MakeupServices/>
    <Footer/>
    </>
  )
}
