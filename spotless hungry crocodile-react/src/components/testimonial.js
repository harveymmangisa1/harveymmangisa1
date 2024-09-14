import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  review3:
    "Tech Company's system support team has been a lifesaver for us. Their quick response time and efficient solutions have kept our operations running smoothly.",
  heading1: 'Testimonials',
  author1Alt: 'Image of John Doe, CEO of Tech Solutions Inc.',
  author2Alt: 'Image of Jane Smith, CTO of Data Systems Co.',
  author3Alt: 'Image of Michael Johnson, Head of IT at Security Solutions Ltd.',
  review1:
    'The team at Tech Company has been instrumental in securing our network and providing top-notch cyber security solutions. Their expertise is unmatched.',
  review4:
    'We are extremely satisfied with the mobile app development services provided by Tech Company. The app they created for us has received rave reviews from our users.',
  review2:
    'We engaged Tech Company for our web development project, and they exceeded our expectations with a user-friendly interface and seamless functionality.',
  author3Position: 'Head of IT, Security Solutions Ltd.',
  author2Position: 'CTO, Data Systems Co.',
  author1Src:
    'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjI3NzAyNHw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Name: 'John Doe',
  content1: 'Read what our clients have to say about our services.',
  author2Name: 'Jane Smith',
  author4Position: 'Director, Mobile Innovations Corp.',
  author3Name: 'Michael Johnson',
  author4Name: 'Sarah Lee',
  author1Position: 'CEO, Tech Solutions Inc.',
  author3Src:
    'https://images.unsplash.com/photo-1607804963237-8c3601a8772a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjI3NzAyOXw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Src:
    'https://images.unsplash.com/photo-1519336555923-59661f41bb45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjI3NzAyNXw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Alt: 'Image of Sarah Lee, Director at Mobile Innovations Corp.',
  author2Src:
    'https://images.unsplash.com/photo-1522506209496-4536d9020ec4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjI3NzAyOHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Testimonial.propTypes = {
  review3: PropTypes.string,
  heading1: PropTypes.string,
  author1Alt: PropTypes.string,
  author2Alt: PropTypes.string,
  author3Alt: PropTypes.string,
  review1: PropTypes.string,
  review4: PropTypes.string,
  review2: PropTypes.string,
  author3Position: PropTypes.string,
  author2Position: PropTypes.string,
  author1Src: PropTypes.string,
  author1Name: PropTypes.string,
  content1: PropTypes.string,
  author2Name: PropTypes.string,
  author4Position: PropTypes.string,
  author3Name: PropTypes.string,
  author4Name: PropTypes.string,
  author1Position: PropTypes.string,
  author3Src: PropTypes.string,
  author4Src: PropTypes.string,
  author4Alt: PropTypes.string,
  author2Src: PropTypes.string,
}

export default Testimonial
