import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import dataService from '../services/dataService';

type ProfileType = 'recruiter' | 'developer' | 'stalker';

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig = {
  recruiter: [
    { title: "Work Permit", route: "/work-permit" },
    { title: "Skills", route: "/skills" },
    { title: "Experience", route: "/work-experience" },
    { title: "Certifications", route: "/certifications" },
    { title: "Projects", route: "/projects" },
    { title: "Contact Me", route: "/contact-me" }
  ],
  developer: [
    { title: "Skills", route: "/skills" },
    { title: "Projects", route: "/projects" },
    { title: "Certifications", route: "/certifications" },
    { title: "Experience", route: "/work-experience" }
  ],
  stalker: [
    { title: "Blogs", route: "/blogs" },
    { title: "Music", route: "/music" },
    { title: "Reading", route: "/reading" },
    { title: "Contact Me", route: "/contact-me" }
  ]
};

const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const topPicks = topPicksConfig[profile] || [];
  const imageConfig: any = dataService.getImageConfig();
  const picksWithImages = topPicks.map((pick: { title: string; route: string }, index: number) => ({
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
      const cardWidth = 250 + 15; // card width + gap
      scrollContainerRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 250 + 15; // card width + gap
      scrollContainerRef.current.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="top-picks-row">
      <div className="row-title">
        <div className="title-text">Today's Top Picks for {profile}</div>
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
          <div 
            key={index} 
            className="pick-card" 
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
