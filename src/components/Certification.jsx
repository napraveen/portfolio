import React from 'react';
import ibmLogo from '../images/ibm.png';
import gfgLogo from '../images/gfgLogo.jpg';
import freecodecampLogo from '../images/freecodecampLogo.webp';
import courseraLogo from '../images/courseraLogo.png';
import udemyLogo from '../images/udemyLogo.png';
import googleLogo from '../images/googleLogo.png';
import '../css/Certification.css';
import Header from './Header';

const certificates = [
  {
    logo: ibmLogo,
    altText: 'IBM Certificate logo',
    title: 'IBM Full-stack Developer Professional Certificate',
    link: 'https://www.coursera.org/account/accomplishments/professional-cert/4TF95XNWYM9Q',
    description:
      'This overall course covered both front-end and back-end technologies with cloud fundamentals.',
  },
  {
    logo: gfgLogo,
    altText: 'GeeksforGeeks Certificate logo',
    title: 'DSA self-paced Course',
    link: 'https://media.geeksforgeeks.org/courses/certificates/4a935a2dd1ec0bf980bfb9946337be41.pdf',
    description:
      'Throughout this overall course, I got in-depth knowledge in Arrays, Queues, Stacks, LinkedList, Trees, Graphs.',
  },
  {
    logo: freecodecampLogo,
    altText: 'freeCodeCamp Certificate logo',
    title: 'Responsive Web Design',
    link: 'https://www.freecodecamp.org/certification/napraveen/responsive-web-design',
    description:
      'With full of hands-on with over 300 hours, I got a strong foundation in developing responsive websites.',
  },
  {
    logo: courseraLogo,
    altText: 'Web Development Certificate logo',
    title: 'HTML, CSS, JS for Web Developers',
    link: 'https://www.coursera.org/account/accomplishments/verify/PHRAGXJ4RBRT',
    description:
      'This course provided me valuable knowledge in foundation of Html, Css and Javascript',
  },
  {
    logo: udemyLogo,
    altText: 'Python certificate',
    title: '100 Days of Code: The Complete Python Pro bootcamp',
    link: 'https://www.udemy.com/certificate/UC-d332a67d-7c0f-4347-a731-cd05d70d77cc/',
    description:
      'This course provided me lots of knowlewdge in Python and Development with python',
  },
  {
    logo: googleLogo,
    altText: 'Google Certificate',
    title: 'Google Digital Marketing',
    link: '/certification',
    description:
      'This course gave foundation with digital marketing including SEO and SEM',
  },
];

const Certification = () => {
  return (
    <div className="certification-page">
      <Header />
      <div className="certification-body">
        <h1>
          My
          <span style={{ color: '#ff4f00' }}> Certifications</span>
        </h1>
        <div className="all-certificates">
          {certificates.map((certificate, index) => (
            <div key={index} className="certificate-container">
              <a href={certificate.link} target="blank">
                <img
                  src={certificate.logo}
                  alt={certificate.altText}
                  className="certificate-logos"
                />
              </a>
              <h4>
                <a href={certificate.link} target="blank">
                  {certificate.title}
                </a>
              </h4>
              <p>{certificate.description}</p>
            </div>
          ))}
        </div>
        (site still under development, will upload other certificates soon)
      </div>
    </div>
  );
};

export default Certification;
