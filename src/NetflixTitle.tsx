import React, { useEffect, useState } from 'react';
import './NetflixTitle.css';
import netflixSound from '../public/netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';
import dataService from './services/dataService';

const NetflixTitle = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [audio] = useState(new Audio(netflixSound));
  const navigate = useNavigate();

  const handleClick = () => {
    if (!hasUserInteracted) {
      setHasUserInteracted(true);
    }
    
    if (!isAnimating) {
      setIsAnimating(true);
      // Play sound when animation starts
      audio.currentTime = 0; // Reset audio to beginning
      audio.play().catch(error => console.error("Audio play error:", error));
      
      // Navigate to browse page after animation completes
      setTimeout(() => {
        navigate('/browse');
      }, 4000);
    }
  };

  const imageConfig: any = dataService.getImageConfig();
  const logoImage = imageConfig.netflixTitle.logo;

  return (
    <div className="netflix-container" onClick={handleClick}>
      <img 
        src={logoImage} 
        alt="Custom Logo" 
        className={`netflix-logo ${isAnimating ? 'animate' : ''}`} 
      />
      {!hasUserInteracted && (
        <div className="interaction-hint">
          <p>Click to start</p>
        </div>
      )}
    </div>
  );
};

export default NetflixTitle;
