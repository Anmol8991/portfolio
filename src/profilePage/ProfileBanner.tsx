import React, { useEffect, useState } from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { ProfileBanner as ProfileBannerType, ProfileType } from '../types';
import dataService from '../services/dataService';

interface ProfileBannerProps {
  profile: ProfileType;
}

const ProfileBanner: React.FC<ProfileBannerProps> = ({ profile }) => {
  const [bannerData, setBannerData] = useState<ProfileBannerType | null>(null);

  useEffect(() => {
    async function fetchData() {
      const main = dataService.getMainInfo();
      const socials = dataService.getSocials();
      const bannerContent = dataService.getProfileBannerContent()[profile];
      const imageConfig = dataService.getImageConfig();
      setBannerData({
        backgroundImage: { url: imageConfig.profilePage.profileBanner.backgroundImage },
        headline: bannerContent.headline,
        profileSummary: bannerContent.profileSummary,
        resumeLink: main.resumeLink,
        linkedinLink: socials.linkedin
      });
    }
    fetchData();
  }, [profile]);

  if (!bannerData) return <div>Loading...</div>;

  const handlePlayClick = () => {
    window.open(bannerData.resumeLink.url, '_blank');
  };

  const handleLinkedinClick = () => { 
    window.open(bannerData.linkedinLink, '_blank');
  }

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id='headline'>{bannerData.headline}</h1>
        <p className="banner-description">
          {bannerData.profileSummary}
        </p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="Linkedin" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
