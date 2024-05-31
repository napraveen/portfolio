import React from 'react';
import arrow from '../images/arrow.png';
import bestValue from '../images/bestValue.png';
import tick from '../images/tick.png';
import '../css/Achievement.css';
import Header from './Header';
const Achievement = () => {
  return (
    <div className="achievement-container">
      <Header />
      <div className="achievement-body">
        <h2 style={{ marginBottom: '20px', fontSize: '30px' }}>
          {' '}
          My
          <span style={{ color: '#ff4f00' }}> Achievement 🏆</span>
        </h2>
        <div className="sih-container">
          <div className="sih-head">
            <p style={{ fontSize: '30px' }}>
              <span style={{ color: '#ff4f00' }}>
                Smart India Hackathon &nbsp;
              </span>
            </p>
            <h3>
              Finalist<span style={{ color: '#9CA3AF' }}>'23</span>
            </h3>
          </div>
          <div className="sih-details">
            <div className="sih-desc">
              <p style={{ fontSize: '20px' }}>
                AI based underwater ROV for monitoring<br></br>
                Headrace Tunnels
              </p>
            </div>

            <div className="sih-desc">
              <img src={arrow} alt="" />
              <p>Crack Detection</p>
            </div>
            <div className="sih-desc">
              <img src={arrow} alt="" />
              <p>Corrosion Detection</p>
            </div>
            <div className="sih-desc">
              <img src={arrow} alt="" />
              <p>Sedimentation Analysis</p>
            </div>
            <div className="sih-desc">
              <img src={arrow} alt="" />
              <p>Temperature Analysis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
