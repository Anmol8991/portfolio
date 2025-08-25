import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import dataService from '../services/dataService';
import { useProfile } from '../contexts/ProfileContext';
import './browse.css';

const Browse: React.FC = () => {
  const navigate = useNavigate();
  const { setCurrentProfile } = useProfile();

  const imageConfig = dataService.getImageConfig();
  const profiles = [
    {
      name: "recruiter",
      image: imageConfig.browse.profiles.recruiter.image
    },
    {
      name: "developer",
      image: imageConfig.browse.profiles.developer.image
    },
    {
      name: "stalker",
      image: imageConfig.browse.profiles.stalker.image
    }
  ];

  const handleProfileClick = (profile: { name: string; image: string }) => {
    setCurrentProfile(profile.name as 'stalker' | 'recruiter' | 'developer');
  };

  return (
    <div className="browse-container">
      <p className='who-is-watching'>Who's Watching?</p>
      <div className="profiles">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            image={profile.image}
            onClick={() => handleProfileClick(profile)}
          />
        ))}
      </div>
    </div>
  );
};

export default Browse;
