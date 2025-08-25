import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProfilePage.css';
import dataService from '../services/dataService';

import ProfileBanner from './ProfileBanner';
import TopPicksRow from './TopPicksRow';
import ContinueWatching from './ContinueWatching';
type ProfileType = 'recruiter' | 'developer' | 'stalker';

const ProfilePage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { profileName } = useParams<{ profileName: string }>();
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);

  // Handle user interaction to toggle audio
  const handleUserInteraction = () => {
    if (videoRef.current) {
      if (videoRef.current.muted) {
        // Enable audio
        videoRef.current.muted = false;
        setIsAudioEnabled(true);
        // Try to play the video again to ensure audio works
        videoRef.current.play().catch(error => {
          console.log('Failed to enable audio:', error);
          // If enabling audio fails, keep it muted
          videoRef.current!.muted = true;
          setIsAudioEnabled(false);
        });
      } else {
        // Disable audio
        videoRef.current.muted = true;
        setIsAudioEnabled(false);
      }
    }
  };

  // Handle button click specifically
  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event from bubbling up to parent
    handleUserInteraction();
  };

  const profile = ['recruiter', 'developer', 'stalker'].includes(profileName!)
    ? (profileName as ProfileType)
    : 'recruiter';

  // Get the background configuration from the profile content
  const profileContent = dataService.getProfileBannerContent()[profile];
  const backgroundType = profileContent?.backgroundType || 'video';
  const backgroundVideo = profileContent?.backgroundVideo || "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4";
  const backgroundGif = profileContent?.backgroundGif || "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif";
  const backgroundImage = profileContent?.backgroundImage || "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80";

  useEffect(() => {
    // Auto-play the video when component mounts or when video source changes (only for video type)
    if (backgroundType === 'video' && videoRef.current) {
      console.log('Loading video:', backgroundVideo);
      // Start with muted video to ensure it plays
      videoRef.current.muted = true;
      setIsAudioEnabled(false);
      
      // Add event listeners for debugging
      const video = videoRef.current;
      const handleLoadStart = () => console.log('Video load started');
      const handleCanPlay = () => console.log('Video can play');
      const handleError = (e: Event) => console.log('Video error:', e);
      
      video.addEventListener('loadstart', handleLoadStart);
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('error', handleError);
      
      // Load the video source
      video.load();
      
      video.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
      
      // Cleanup event listeners
      return () => {
        video.removeEventListener('loadstart', handleLoadStart);
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('error', handleError);
      };
    }
  }, [backgroundType, backgroundVideo]);

  // Determine the background style based on type
  const getBackgroundStyle = () => {
    switch (backgroundType) {
      case 'gif':
        return { backgroundImage: `url(${backgroundGif})` };
      case 'image':
        return { backgroundImage: `url(${backgroundImage})` };
      default:
        return {};
    }
  };

  return (
    <>
      <div 
        className="profile-page"
        style={getBackgroundStyle()}
        onClick={handleUserInteraction}
      >
        {backgroundType === 'video' && (
          <video
            key={backgroundVideo}
            ref={videoRef}
            className="background-video"
            autoPlay
            loop
            playsInline
            muted
          >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {backgroundType === 'video' && (
          <button 
            className="audio-enable-button"
            onClick={handleButtonClick}
            title={isAudioEnabled ? "Click to disable audio" : "Click to enable audio"}
          >
            {isAudioEnabled ? '🔊' : '🔇'}
          </button>
        )}
        <ProfileBanner profile={profile} />
      </div>
      <TopPicksRow profile={profile} />
      <ContinueWatching profile={profile} />
    </>
  );
};

export default ProfilePage;
