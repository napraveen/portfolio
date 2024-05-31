import React, { useEffect } from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
const Header = () => {
  useEffect(() => {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const toggleMenu = () => {
      mobileMenu.classList.toggle('show');
    };
    hamburger.addEventListener('click', toggleMenu);
    return () => {
      hamburger.removeEventListener('click', toggleMenu);
    };
  }, []);

  return (
    <div>
      <header>
        <div className="header-left">
          {' '}
          <img
            src={logo}
            alt="Logo"
            className="my-logo"
            style={{ height: '20px' }}
          />
          &nbsp;
        </div>
        <div className="header-middle">
          <button className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className="mobile-menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/achievement">Achievement</Link>
              </li>
              <li>
                <Link to="/certification">Certifications</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-right">
          <a
            href="https://drive.google.com/file/d/1IKqQ1tLb0KSKqehoaOAiH7URIy1SqFou/view?usp=drivesdk"
            target="blank"
          >
            <button className="get-started">Download Resume</button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
