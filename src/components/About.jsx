import React from 'react';
import Header from './Header';
import '../css/About.css';

import { useState } from 'react';
import arrowMark from '../images/arrowmark.png';
import myImg from '../images/myImg.jpg';
import reactjsLogo from '../images/reactjsLogo.png';
import nodejsLogo from '../images/nodejsLogo.png';
import djangoLogo from '../images/djangoLogo.png';
import mongodbLogo from '../images/mongodbLogo.png';
import mysqlLogo from '../images/mysqlLogo.png';
import htmlcssLogo from '../images/htmlcss.jpg';
import jsLogo from '../images/jsLogo.png';
import cLogo from '../images/cLogo.png';
import pythonLogo from '../images/pythonLogo.png';
import javaLogo from '../images/javaLogo.png';
import figmaLogo from '../images/figmaLogo.png';
const About = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const toggleDropdown = (index) => {
    if (dropdownOpen === index) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(index);
    }
  };
  const questionsAndAnswers = [
    {
      question: 'React Js',
      answer:
        '1. Attendance Management System \n 2. Ecommerce Website \n 3.Smart Home Monitoring \n 4.Tesla Home Page \n 5. My Portfolio',
      image: reactjsLogo,
    },
    {
      question: 'Node Js, Express Js',
      answer:
        '1. Attendance Management System \n 2. Ecommerce Website \n 3.Smart Home Monitoring ',
      image: nodejsLogo,
    },
    {
      question: 'Django',
      answer:
        '1. Resume Builder \n 2. Organ Donation Website \n 3.Leave Form Generator \n 4. Blogging site \n 5.IOT Project(in SIH) ',
      image: djangoLogo,
    },
    {
      question: 'Mongo DB',
      answer:
        '1. Attendance Management System \n 2. Ecommerce Website \n 3.Smart Home Monitoring ',
      image: mongodbLogo,
    },
    {
      question: 'SQL',
      answer:
        '1. Resume Builder \n 2. Organ Donation Website \n 3.Leave Form Generator \n 4. Blogging site ',
      image: mysqlLogo,
    },
    {
      question: 'Html and Css',
      answer:
        '1. Resume Builder \n 2. Organ Donation Website \n 3.Leave Form Generator \n 4. Blogging site \n 5. Spotify Home Page \n 6. Calculator \n 7. Calendar \n 7. Unit Convertor \n 8. BMI Calculator \n 9.Tribute Page \n 10. Zomato Home Page ',
      image: htmlcssLogo,
    },
    {
      question: 'Javascript (Vannila.js)',
      answer:
        '1. Resume Builder \n 2. Organ Donation Website \n 3.Leave Form Generator \n 4. Blogging site \n 5. Spotify Home Page \n 6. Calculator \n 7. Calendar \n 8. Unit Convertor \n 9. BMI Calculator',
      image: jsLogo,
    },
    {
      question: 'C',
      answer: 'Solved 150+ problems including SkillRack and CodeChef',
      image: cLogo,
    },
    {
      question: 'Python',
      answer:
        'Solved more than 350+ problems including Skillrack, codechef and leetcode',
      image: pythonLogo,
    },
    {
      question: 'Java',
      answer:
        'Solved more than 150+ problems including Skillrack, codechef, and leetcode',
      image: javaLogo,
    },
    {
      question: 'Figma',
      answer:
        'Had the hands-on experience in figma with components, layouts, frames, layers, and I personally use figma to design before making a website',
      image: figmaLogo,
    },
  ];
  return (
    <div className="about-container">
      <Header />

      <div className="about-body">
        <h2 style={{ marginBottom: '20px', fontSize: '30px' }}>
          {' '}
          About
          <span style={{ color: '#ff4f00' }}> Me & my Skills</span>
        </h2>
        <div className="about-content">
          <div className="about-left">
            <div className="about-profile-container">
              <img src={myImg} alt="" className="my-image" />
              <h1>Praveen N</h1>
              <p>Pre-Final Year Student</p>
              <p className="about-profile-desc">
                Hi, I'm a pre-final year Electronics and Communication
                Engineering student, studying in St.Joseph's College of
                Engineering, Chennai.<br></br>
                <br></br> I'm a passionate full-stack web developer with a deep
                interest in coding. Continuously keeping up with industry trends
                and exploring cutting-edge technologies, currently looking for
                internship in full-stack web domains.
              </p>
            </div>
          </div>

          <div className="about-right">
            <div className="about-dropdown-container">
              {questionsAndAnswers.map((qa, index) => (
                <div className="about-dropdown" key={index}>
                  <div
                    className="about-dropdown-q"
                    onClick={() => toggleDropdown(index)}
                  >
                    <img src={qa.image} alt="" className="about-tech-logos" />
                    <p>{qa.question}</p>

                    <img src={arrowMark} alt="" className="arrowmark" />
                  </div>
                  {dropdownOpen === index && (
                    <p className="about-dropdown-a">
                      {qa.answer.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
