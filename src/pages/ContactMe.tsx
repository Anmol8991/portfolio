import React from 'react';
import './ContactMe.css';
import { FaEnvelope, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import dataService from '../services/dataService';

const ContactMe: React.FC = () => {
  const contact = dataService.getContact();
  const main = dataService.getMainInfo();
  const socials = dataService.getSocials();

  if (!contact || !main) return <div>Loading...</div>;

  return (
    <div className="contact-hero">
      <div className="contact-content">
        <div className="contact-left">
          <img
            src={main.photo}
            className="contact-avatar-mobile"
            alt={main.name}
          />
          <div className="contact-info">
            <h2 className="contact-role">{main.role}</h2>
            <h1 className="contact-name">{main.name}</h1>
            <p className="contact-description">{main.description}</p>
            
            <div className="contact-location">
              <FaMapMarkerAlt className="location-icon" />
              <span>{main.location}</span>
            </div>

            <div className="contact-actions">
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn primary"
              >
                <FaLinkedin className="btn-icon" />
                LinkedIn
              </a>
              <a
                href={`mailto:${main.email}`}
                className="contact-btn secondary"
              >
                <FaEnvelope className="btn-icon" />
                Email Me
              </a>
              <a
                href={`tel:${main.phone}`}
                className="contact-btn secondary"
              >
                <FaPhoneAlt className="btn-icon" />
                Call Me
              </a>
            </div>

            <div className="contact-message">
              <p>{contact.description}</p>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <img
            className="contact-avatar-desktop"
            src={main.photo}
            alt={main.name}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
