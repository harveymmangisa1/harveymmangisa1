import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Features1 from '../components/features1'
import CTA from '../components/cta'
import Features2 from '../components/features2'
import Pricing from '../components/pricing'
import Steps from '../components/steps'
import Testimonial from '../components/testimonial'
import Contact from '../components/contact'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Spotless Hungry Crocodile</title>
      </Helmet>
      <Navbar></Navbar>
      <Hero
        text={
          <Fragment>
            <span className="home-text1 thq-body-large">
              <span>
                We specialize in networks, cyber security, system support,
                electronic security systems, and web and mobile app development
                to help you succeed in the digital age.
              </span>
              <br></br>
              <br></br>
            </span>
          </Fragment>
        }
        content1="We specialize in networks, cyber security, system support, electronic security systems, and web and mobile app development to help you succeed in the digital age."
        heading1="Empowering Your Digital World"
        image3Src="https://images.unsplash.com/1/macbook-air-all-faded-and-stuff.jpg?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxjb21wdXRlcnxlbnwwfHx8fDE3MjYyMTA4NDh8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        rootClassName="heroroot-class-name"
      ></Hero>
      <Features1></Features1>
      <CTA></CTA>
      <Features2></Features2>
      <Pricing></Pricing>
      <Steps></Steps>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default Home
