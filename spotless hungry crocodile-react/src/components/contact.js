import React, { Fragment } from 'react'

import ContactForm11 from './contact-form11'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-contact20 thq-section-padding">
      <ContactForm11
        email={
          <Fragment>
            <span className="contact-text1 thq-body-small">
              info@octetsystems.com
            </span>
          </Fragment>
        }
        phone={
          <Fragment>
            <span className="contact-text2 thq-body-small">+265999771155</span>
          </Fragment>
        }
        address={
          <Fragment>
            <span className="contact-text3 thq-body-small">Lilongwe</span>
          </Fragment>
        }
        submitAction={
          <Fragment>
            <span className="contact-text4 thq-body-small">
              <span>Send  A Message to Octet Systems</span>
              <br></br>
            </span>
          </Fragment>
        }
      ></ContactForm11>
    </div>
  )
}

export default Contact
