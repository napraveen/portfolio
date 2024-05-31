import React from 'react';
import '../css/Project.css';
import Header from './Header';
import AMS from '../images/AMS.png';
import ecommerceLogo from '../images/ecommerceLogo.png';
import organdonationLogo from '../images/organdonationLogo.png';
import AiRovImg from '../images/AiRovImg.png';
import lmsLogo from '../images/lmslogo.png';
import gitHub from '../images/github.jpg';
import ARBLogo from '../images/ARBLogo.png';
const projectData = [
  {
    name: 'Attendance Management System',
    description:
      'Considering the whole attendance process of my college and make it paperless through online',
    logo: AMS,
    link: 'https://github.com/napraveen/AMS',
    gitHubLink: 'https://github.com/napraveen/AMS',
  },
  {
    name: 'Ecommerce Website',
    description:
      'Developed webapp to buy and share product with comfort at home',
    logo: ecommerceLogo,
    link: 'https://github.com/napraveen/Ecommerce',
    gitHubLink: 'https://github.com/napraveen/Ecommerce',
  },
  {
    name: 'Organ Donation Website',
    description:
      'Developed a website where donars can donate and user can view the available donars at ease',
    logo: organdonationLogo,
    link: 'https://github.com/napraveen/Organ-Donation-Website.git',
    gitHubLink: 'https://github.com/napraveen/Organ-Donation-Website.git',
  },
  {
    name: 'Library Management System',
    description:
      'Developed a webapp where the process of taking and issuing books made online',
    logo: lmsLogo,
    link: 'https://smn-client.vercel.app/',
    gitHubLink: 'https://github.com/napraveen/smn-client.git',
  },

  {
    name: 'AI based Underwater ROV',
    description:
      'Developed an interactive site that analyses the data and shows on the web',
    logo: AiRovImg,
    link: '/projects',
    gitHubLink: '/projects',
  },
  {
    name: 'Automatic Resume Builder',
    description:
      'Developed a site that helps you prepare Resume in Online with one-click',
    logo: ARBLogo,
    link: '/projects',
    gitHubLink: '/projects',
  },
];

const Projects = () => {
  return (
    <div className="project-page">
      <Header />
      <div className="project-body">
        <h1>
          My
          <span style={{ color: '#ff4f00' }}> Projects</span>
        </h1>
        <div className="all-projects">
          {projectData.map((project, index) => (
            <div className="project-container" key={index}>
              <a href={project.link} target="blank">
                <img
                  src={project.logo}
                  alt="project logo"
                  className="project-logos"
                />
              </a>
              <h4>
                <a href={project.link} target="blank">
                  {project.name}
                </a>
              </h4>
              <p>{project.description}</p>
              <div className="social-profiles">
                <a href={project.gitHubLink} target="blank">
                  {' '}
                  <img
                    src={gitHub}
                    alt="Github"
                    style={{ height: '30px', width: '30px' }}
                    className="project-github-img"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
        (Site still under Development, will upload other Projects soon)
      </div>
    </div>
  );
};

export default Projects;
