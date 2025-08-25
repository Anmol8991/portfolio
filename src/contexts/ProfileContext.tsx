import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type ProfileType = 'stalker' | 'recruiter' | 'developer' | null;

interface ProfileContextType {
  currentProfile: ProfileType;
  setCurrentProfile: (profile: ProfileType) => void;
  isProfilePage: boolean;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

interface ProfileProviderProps {
  children: ReactNode;
}

export const ProfileProvider: React.FC<ProfileProviderProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentProfile, setCurrentProfileState] = useState<ProfileType>(null);

  // Check if current page is a profile page
  const isProfilePage = location.pathname.startsWith('/profile/');

  // Initialize profile from URL when component mounts or URL changes
  useEffect(() => {
    if (isProfilePage) {
      const profileFromUrl = location.pathname.split('/profile/')[1] as ProfileType;
      if (profileFromUrl && ['stalker', 'recruiter', 'developer'].includes(profileFromUrl)) {
        setCurrentProfileState(profileFromUrl);
      }
    }
  }, [location.pathname, isProfilePage]);

  // Set current profile and navigate to profile page
  const setCurrentProfile = (profile: ProfileType) => {
    setCurrentProfileState(profile);
    
    // Always navigate to the selected profile page
    if (profile) {
      navigate(`/profile/${profile}`);
    }
  };

  const value: ProfileContextType = {
    currentProfile,
    setCurrentProfile,
    isProfilePage,
  };

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  );
};

// Custom hook to use the profile context
export const useProfile = (): ProfileContextType => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};
