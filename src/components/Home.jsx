import '../App.css';
import '../components/Header';
import Header from '../components/Header';
import Body from '../components/Body';
import { useState, useEffect } from 'react';
function Home() {
  const [navigateToCertificates, setNavigateToCertificates] = useState(false);

  const handleNavigateToCertificates = () => {
    setNavigateToCertificates(true);
    setTimeout(() => {
      setNavigateToCertificates(false);
    }, 100);
  };
  return (
    <div className="App">
      <div className="home-container">
        <Header onNavigateToCertificates={handleNavigateToCertificates} />
        <Body />
      </div>
    </div>
  );
}

export default Home;
