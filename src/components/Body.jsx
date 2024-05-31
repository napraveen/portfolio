import React from 'react';
import myImg from '../images/myImg.jpg';
import linkedIn from '../images/linkedin.png';
import gitHub from '../images/github.jpg';
const Body = () => {
  return (
    <div>
      <div className="home-body">
        <div className="body-left">
          <div className="body-left-inside">
            {' '}
            <h1>
              Hello, <br></br>
              <span style={{ color: '#ff4f00' }}>I'm Praveen </span>
            </h1>
            <p>
              A passionate Full-Stack Developer with a strong foundation in core
              technologies and a keen interest in exploring emerging frameworks
            </p>
            <a
              href="https://drive.google.com/file/d/1IKqQ1tLb0KSKqehoaOAiH7URIy1SqFou/view?usp=drivesdk"
              target="blank"
            >
              <button className="get-started">Download Resume</button>
            </a>
            <div className="social-profiles">
              <a href="https://www.linkedin.com/in/napraveen" target="blank">
                {' '}
                <img
                  src={linkedIn}
                  alt="Linkedin"
                  style={{ height: '30px', width: '30px' }}
                  className="home-linkedin-img"
                />
              </a>
              <a href="https://www.github.com/napraveen" target="blank">
                {' '}
                <img
                  src={gitHub}
                  alt="Github"
                  style={{ height: '30px', width: '30px' }}
                  className="home-github-img"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="body-right">
          <div className="body-right-img-container">
            {' '}
            <img src={myImg} alt="dashboard" className="dashboard-img" />
          </div>
        </div>
        <div className="body-right"></div>
      </div>
    </div>
  );
};

export default Body;
