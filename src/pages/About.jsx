import React from 'react'
import AboutHero from '../components/AboutHero'
import MainAbout from '../components/MainAbout'
import Testimonial from '../components/Testimonials'
import Faq from '../components/Faq'
import OurTeam from '../components/OurTeam'
import MoversStats from '../components/MoversStats'
import QuoteForm from '../components/QuoteForm'

const About = () => {
  return (
 <>
 <AboutHero/>
 <MainAbout/>
 <MoversStats/>
 <OurTeam/>
 <Testimonial/>
 <Faq/>
 <QuoteForm/>
 </>
  )
}

export default About