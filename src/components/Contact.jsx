import React from 'react';
import '../css/contact.css';
import Header from './Header';
import Linkedin from '../images/linkedin.png';
import Gmail from '../images/gmail.png';
import Github from '../images/github.png';
const Contact = () => {
  return (
    <div className="contact-page">
      <Header />
      <div className="contact-body">
        {' '}
        <h1>
          <span style={{ color: '#ff4f00' }}> Contact Me</span>
        </h1>
        <p style={{ marginTop: '30px' }}>
          Looking for a<span style={{ color: '#ff4f00' }}> Freelancer?</span>{' '}
          Ready to
          <span style={{ color: '#ff4f00' }}> Collaborate?</span>
        </p>{' '}
        <p>Contact me here, Let's work together💻</p>
        <div className="social-profile-divs">
          <div>
            {' '}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=napraveen03@gmail.com"
              target="/"
              rel="noopener noreferrer"
              aria-label="Link to Gmail Account"
            >
              {' '}
              <div className="social-profile-email">
                <img
                  src={Gmail}
                  alt="gmaillogo"
                  className="social-profile-gmail-logo"
                />
                <p>Gmail</p>
              </div>
            </a>
          </div>

          <div>
            {' '}
            <a
              href="https://www.linkedin.com/in/napraveen"
              target="/"
              rel="noopener noreferrer"
              aria-label="Link to Linkedin Account"
            >
              <div className="social-profile-linkedin">
                <img
                  src={Linkedin}
                  alt="linkedinlogo"
                  className="social-profile-gmail-logo"
                />
                <p>Linkedin</p>
              </div>
            </a>
          </div>

          <div>
            {' '}
            <a
              href="https://github.com/napraveen"
              target="/"
              rel="noopener noreferrer"
              aria-label="Link to Github Account"
            >
              {' '}
              <div className="social-profile-github">
                <img
                  src={Github}
                  alt="githublogo"
                  className="social-profile-gmail-logo"
                />
                <p>Github</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
