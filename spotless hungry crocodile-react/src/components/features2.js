import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features2.css'

const Features2 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features2-container2 thq-section-max-width">
        <div className="features2-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features2-tab-horizontal1"
          >
            <div className="features2-divider-container1">
              {activeTab === 0 && <div className="features2-container3"></div>}
            </div>
            <div className="features2-content1">
              <h2 className="thq-heading-2 features2-feature1-title">
                {props.feature1Title}
              </h2>
              <span className="thq-body-small features2-feature1-description">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features2-tab-horizontal2"
          >
            <div className="features2-divider-container2">
              {activeTab === 1 && <div className="features2-container4"></div>}
            </div>
            <div className="features2-content2">
              <h2 className="thq-heading-2 features2-feature2-title">
                {props.feature2Title}
              </h2>
              <span className="thq-body-small features2-feature2-description">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features2-tab-horizontal3"
          >
            <div className="features2-divider-container3">
              {activeTab === 2 && <div className="features2-container5"></div>}
            </div>
            <div className="features2-content3">
              <h2 className="thq-heading-2 features2-feature3-title">
                {props.feature3Title}
              </h2>
              <span className="thq-body-small features2-feature3-description">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
        <div className="features2-image-container">
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features2-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features2-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features2-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features2.defaultProps = {
  feature3Title: 'System Support',
  feature2ImgAlt: 'Cyber Security Image Alt Text',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1601462904263-f2fa0c851cb9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIwfHxjb21wdXRlciUyMG5ldHdvcmtzfGVufDB8fHx8MTcyNjMwNzY4NXww&ixlib=rb-4.0.3&w=1400',
  feature1ImgAlt: 'Network Solutions Image Alt Text',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1539038911962-192865025ef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1NXx8aGFja3xlbnwwfHx8fDE3MjYzMDgwNzR8MA&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: 'Network Solutions',
  feature2Description:
    'Comprehensive cyber security services to protect your data and systems from potential threats and breaches.',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjI3NzAzMHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Description:
    'Expertise in designing and implementing secure and efficient network solutions tailored to your business needs.',
  feature3Description:
    '24/7 system support to ensure smooth operations and quick resolution of any technical issues.',
  feature2Title: 'Cyber Security',
  feature3ImgAlt: 'System Support Image Alt Text',
}

Features2.propTypes = {
  feature3Title: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2Description: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3Description: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
}

export default Features2
