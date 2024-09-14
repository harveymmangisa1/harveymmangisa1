import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact-form1.css'

const ContactForm1 = (props) => {
  return (
    <div className="contact-form1-contact1 thq-section-padding">
      <div className="contact-form1-max-width thq-section-max-width">
        <div className="contact-form1-container1">
          <div className="contact-form1-section-title thq-card">
            <span>
              {props.content2 ?? (
                <Fragment>
                  <span className="contact-form1-text17 thq-body-small">
                    Get in touch with us today!
                  </span>
                </Fragment>
              )}
            </span>
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="contact-form1-text16 thq-heading-2">
                    Contact us
                  </h2>
                </Fragment>
              )}
            </h2>
            <span>
              {props.content1 ?? (
                <Fragment>
                  <span className="contact-form1-text19 thq-body-small">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <form className="thq-card">
            <div className="contact-form1-container2">
              <div className="contact-form1-input1 thq-flex-row">
                <label htmlFor="contact-form-1-name" className="thq-body-small">
                  Name
                </label>
                <input
                  type="text"
                  id="contact-form-1-name"
                  placeholder="Name"
                  className="contact-form1-text-input1 thq-input"
                />
              </div>
              <div className="contact-form1-input2 thq-flex-row">
                <label
                  htmlFor="contact-form-1-email"
                  className="thq-body-small"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="contact-form-1-email"
                  required="true"
                  placeholder="Email"
                  className="contact-form1-text-input2 thq-input"
                />
              </div>
            </div>
            <div className="contact-form1-checkbox1 thq-flex-row">
              <input
                type="checkbox"
                id="contact-form-1-check"
                checked="true"
                required="true"
                className="thq-checkbox"
              />
              <label htmlFor="contact-form-1-check" className="thq-body-small">
                I accept the Terms
              </label>
            </div>
            <button
              type="submit"
              className="contact-form1-button thq-button-filled"
            >
              <span>
                {props.action ?? (
                  <Fragment>
                    <span className="contact-form1-text18 thq-body-small">
                      Submit
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

ContactForm1.defaultProps = {
  heading1: undefined,
  content2: undefined,
  action: undefined,
  content1: undefined,
}

ContactForm1.propTypes = {
  heading1: PropTypes.element,
  content2: PropTypes.element,
  action: PropTypes.element,
  content1: PropTypes.element,
}

export default ContactForm1
