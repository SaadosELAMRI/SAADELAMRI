import React from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'

const contact = () => {
  return (
    <div>
        <Hero heading='Contact' message='To get in touch with me, kindly fill out the form provided below and submit it!' />
        <Contact />
    </div>
  )
}

export default contact