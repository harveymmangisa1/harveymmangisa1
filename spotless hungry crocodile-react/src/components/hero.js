import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero.css'

const Hero = (props) => {
  return (
    <div className={`hero-header78 ${props.rootClassName} `}>
      <div className="hero-column thq-section-max-width thq-section-padding">
        <div className="hero-content">
          <h1 className="hero-text1 thq-heading-1">{props.heading1}</h1>
          <p>
            {props.text ?? (
              <Fragment>
                <p className="hero-text5 thq-body-large">
                  <span>
                    We specialize in networks, cyber security, system support,
                    electronic security systems, and web and mobile app
                    development to help you succeed in the digital age.
                  </span>
                </p>
              </Fragment>
            )}
          </p>
        </div>
        <div className="hero-actions">
          <button className="thq-button-filled hero-button1">
            <span className="thq-body-small">{props.action1}</span>
          </button>
          <button className="thq-button-outline hero-button2">
            <span className="thq-body-small">{props.action2}</span>
          </button>
        </div>
      </div>
      <div>
        <div className="hero-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero.defaultProps = {
  imageSrc:
    'https://images.unsplash.com/photo-1463620695885-8a91d87c53d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE5fHxjb21wdXRlcnxlbnwwfHx8fDE3MjYyMTA4NDh8MA&ixlib=rb-4.0.3&q=80&w=700',
  heading1: 'Empowering Your Digital World',
  action2: 'Contact Us',
  action1: 'Explore Our Services',
  rootClassName: '',
  imageSrc1:
    'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fGNvbXB1dGVyfGVufDB8fHx8MTcyNjIxMDg0OHww&ixlib=rb-4.0.3&q=80&w=200',
  text: undefined,
}

Hero.propTypes = {
  imageSrc: PropTypes.string,
  heading1: PropTypes.string,
  action2: PropTypes.string,
  action1: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc1: PropTypes.string,
  text: PropTypes.element,
}

export default Hero
