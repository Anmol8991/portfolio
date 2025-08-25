import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';
import dataService from '../services/dataService';

type ProfileType = 'recruiter' | 'developer' | 'stalker';

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig = {
  recruiter: [
    { title: "Blogs", route: "/blogs" },
    { title: "Music", route: "/music" },
    { title: "Reading", route: "/reading" },
  ],
  developer: [
    { title: "Blogs", route: "/blogs" },
    { title: "Music", route: "/music" },
    { title: "Reading", route: "/reading" },
    { title: "Contact Me", route: "/contact-me" }
  ],
  stalker: [
    { title: "Projects", route: "/projects" },
    { title: "Experience", route: "/work-experience" },
    { title: "Certifications", route: "/certifications" },
  ]
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const continueWatching = continueWatchingConfig[profile] || [];
  const imageConfig: any = dataService.getImageConfig();
  const picksWithImages = continueWatching.map((pick: { title: string; route: string }) => ({
    ...pick,
    imgSrc: (imageConfig?.profilePage?.details?.[pick.title]) || ''
  }));

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', checkScrollButtons);
      
      return () => {
        scrollContainer.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
      };
    }
  }, [picksWithImages]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 150 + 10; // card width + gap
      scrollContainerRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 150 + 10; // card width + gap
      scrollContainerRef.current.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="continue-watching-row">
      <div className="row-title">
        <div className="title-text">Continue Watching for {profile}</div>
        <div className="title-nav-buttons">
          <button 
            className={`nav-button ${!canScrollLeft ? 'disabled' : ''}`}
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            ‹
          </button>
          <button 
            className={`nav-button ${!canScrollRight ? 'disabled' : ''}`}
            onClick={scrollRight}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            ›
          </button>
        </div>
      </div>
      <div className="card-row" ref={scrollContainerRef}>
        {picksWithImages.map((pick, index) => (
          <Link to={pick.route} key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
