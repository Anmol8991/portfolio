import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaBriefcase, FaTools, FaProjectDiagram, FaEnvelope, FaChevronDown } from 'react-icons/fa'; // Import icons
import './Navbar.css';
import dataService from '../services/dataService';
import { useProfile } from '../contexts/ProfileContext';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const imageConfig = dataService.getImageConfig();
  const logo = imageConfig.navbar.logo;
  const defaultProfileImage = imageConfig.navbar.profileDefault;

  // Use the profile context
  const { currentProfile, setCurrentProfile, isProfilePage } = useProfile();
  
  // Get the appropriate profile image based on current profile or default
  const getProfileImage = () => {
    if (currentProfile && imageConfig.browse.profiles[currentProfile]) {
      return imageConfig.browse.profiles[currentProfile].image;
    }
    return defaultProfileImage;
  };
  
  const profileImage = getProfileImage();

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 80);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleProfileSelect = (profileName: 'stalker' | 'recruiter' | 'developer') => {
    setIsProfileDropdownOpen(false);
    setCurrentProfile(profileName);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.profile-dropdown-container')) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="Netflix" />
          </Link>
          <ul className="navbar-links">
            <li>
              {currentProfile ? (
                <Link to={`/profile/${currentProfile}`}>Home</Link>
              ) : (
                <Link to="/browse">Home</Link>
              )}
            </li>
            <li><Link to="/work-experience">Professional</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact-me">Hire Me</Link></li>
          </ul>
        </div>
        <div className="navbar-right">
          {/* Hamburger menu for mobile */}
          <div className="hamburger" onClick={toggleSidebar}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          
          {/* Profile Dropdown Container */}
          <div className="profile-dropdown-container">
            <div className="profile-icon-wrapper" onClick={toggleProfileDropdown}>
              <img src={profileImage} alt="Profile" className="profile-icon" />
              <FaChevronDown className="profile-dropdown-arrow" />
            </div>
            
            {/* Profile Dropdown Menu */}
            {isProfileDropdownOpen && (
              <div className="profile-dropdown">
                {currentProfile !== 'stalker' && (
                  <div className="profile-dropdown-item" onClick={() => handleProfileSelect('stalker')}>
                    <img src={imageConfig.browse.profiles.stalker.image} alt="Stalker" className="profile-dropdown-image" />
                    <span>Stalker</span>
                  </div>
                )}
                {currentProfile !== 'recruiter' && (
                  <div className="profile-dropdown-item" onClick={() => handleProfileSelect('recruiter')}>
                    <img src={imageConfig.browse.profiles.recruiter.image} alt="Recruiter" className="profile-dropdown-image" />
                    <span>Recruiter</span>
                  </div>
                )}
                {currentProfile !== 'developer' && (
                  <div className="profile-dropdown-item" onClick={() => handleProfileSelect('developer')}>
                    <img src={imageConfig.browse.profiles.developer.image} alt="Developer" className="profile-dropdown-image" />
                    <span>Developer</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div className={`sidebar-overlay ${isSidebarOpen ? 'open' : ''}`} onClick={closeSidebar}></div>

      {/* Sidebar (only visible on mobile) */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-logo">
          <img src={logo} alt="Netflix Logo" />
        </div>
        <ul>
          <li>
            {currentProfile ? (
              <Link to={`/profile/${currentProfile}`} onClick={closeSidebar}><FaHome /> Home</Link>
            ) : (
              <Link to="/browse" onClick={closeSidebar}><FaHome /> Home</Link>
            )}
          </li>
          <li><Link to="/work-experience" onClick={closeSidebar}><FaBriefcase /> Professional</Link></li>
          <li><Link to="/skills" onClick={closeSidebar}><FaTools /> Skills</Link></li>
          <li><Link to="/projects" onClick={closeSidebar}><FaProjectDiagram /> Projects</Link></li>
          <li><Link to="/contact-me" onClick={closeSidebar}><FaEnvelope /> Hire Me</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
