import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact-form11.css'

const ContactForm11 = (props) => {
  return (
    <div className="contact-form11-contact11 thq-section-padding">
      <div className="contact-form11-max-width thq-section-max-width">
        <div className="contact-form11-row thq-flex-row thq-card">
          <div className="contact-form11-content1">
            <div className="contact-form11-contact-info1">
              <span>
                {props.email ?? (
                  <Fragment>
                    <span className="contact-form11-text19 thq-body-small">
                      info@octetsystems.com
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact-form11-content2">
            <div className="contact-form11-contact-info2">
              <span>
                {props.phone ?? (
                  <Fragment>
                    <span className="contact-form11-text18 thq-body-small">
                      +265999771155
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact-form11-content3">
            <div className="contact-form11-contact-info3">
              <span>
                {props.address ?? (
                  <Fragment>
                    <span className="contact-form11-text17 thq-body-small">
                      Lilongwe
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="contact-form11-content4">
          <form className="contact-form11-form thq-card">
            <div className="contact-form11-container">
              <div className="contact-form11-input1">
                <label
                  htmlFor="contact-form-11-first-name"
                  className="contact-form11-text10 thq-body-small"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="contact-form-11-first-name"
                  placeholder="First Name"
                  className="thq-input"
                />
              </div>
              <div className="contact-form11-input2">
                <label
                  htmlFor="contact-form-11-last-name"
                  className="contact-form11-text11 thq-body-small"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="contact-form-11-last-name"
                  placeholder="Last Name"
                  className="thq-input"
                />
              </div>
            </div>
            <div className="contact-form11-input3">
              <label
                htmlFor="contact-form-11-email"
                className="thq-body-small contact-form11-text12"
              >
                Email
              </label>
              <input
                type="text"
                id="contact-form-11-email"
                required="true"
                placeholder="Email"
                className="contact-form11-text-input3 thq-input"
              />
            </div>
            <div className="contact-form11-input4">
              <label
                htmlFor="contact-form-11-message"
                className="thq-body-small contact-form11-text13"
              >
                Message
              </label>
              <textarea
                id="contact-form-11-message"
                rows="3"
                placeholder="Enter your message"
                className="thq-input"
              ></textarea>
            </div>
            <button type="submit" className="thq-button-filled">
              <span>
                {props.submitAction ?? (
                  <Fragment>
                    <span className="contact-form11-text14 thq-body-small">
                      <span>Send  A Message to Octet Systems</span>
                      <br></br>
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

ContactForm11.defaultProps = {
  submitAction: undefined,
  address: undefined,
  phone: undefined,
  email: undefined,
}

ContactForm11.propTypes = {
  submitAction: PropTypes.element,
  address: PropTypes.element,
  phone: PropTypes.element,
  email: PropTypes.element,
}

export default ContactForm11
