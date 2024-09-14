import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features1-container2 thq-section-max-width">
        <div className="features1-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features1-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features1-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features1-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features1-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features1-tab-horizontal1"
          >
            <div className="features1-divider-container1">
              {activeTab === 0 && <div className="features1-container3"></div>}
            </div>
            <div className="features1-content1">
              <h2 className="thq-heading-2 features1-feature1-title">
                {props.feature1Title}
              </h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features1-tab-horizontal2"
          >
            <div className="features1-divider-container2">
              {activeTab === 1 && <div className="features1-container4"></div>}
            </div>
            <div className="features1-content2">
              <h2 className="thq-heading-2 features1-feature2-title">
                {props.feature2Title}
              </h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features1-tab-horizontal3"
          >
            <div className="features1-divider-container3">
              {activeTab === 2 && <div className="features1-container5"></div>}
            </div>
            <div className="features1-content3">
              <h2 className="thq-heading-2 features1-feature3-title">
                {props.feature3Title}
              </h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature1Description:
    'Protect your data and systems with our advanced cyber security solutions.',
  feature1Title: 'Network Security',
  feature2ImgAlt: 'Web and Mobile App Development Icon',
  feature1ImgAlt: 'Network Security Icon',
  feature2Description:
    'We develop custom web and mobile applications tailored to your specific needs.',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1606606767399-01e271823a2e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGZpcmV3YWxsfGVufDB8fHx8MTcyNjMwNzg0OXww&ixlib=rb-4.0.3&w=1400',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHx3ZWIlMjB8ZW58MHx8fHwxNzI2MzA4MjUwfDA&ixlib=rb-4.0.3&w=1400',
  feature3ImgAlt: 'System Support Icon',
  feature3Title: 'System Support',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxjb21wdXRlciUyMHVzZXJ8ZW58MHx8fHwxNzI2MzA4MzYwfDA&ixlib=rb-4.0.3&w=1400',
  feature3Description:
    'Our team provides 24/7 system support to ensure your operations run smoothly.',
  feature2Title: 'Web and Mobile App Development',
}

Features1.propTypes = {
  feature1Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature3Title: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  feature2Title: PropTypes.string,
}

export default Features1
