import React from 'react';
import './Certifications.css';
import dataService from '../services/dataService';
import { SiAzuredevops, SiGooglecloud } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const getCloudLogo = (title: string, issuer: string) => {
  const lower = (title + ' ' + issuer).toLowerCase();
  if (lower.includes('azure')) return <SiAzuredevops className="certification-icon" />;
  if (lower.includes('aws') || lower.includes('amazon')) return <FaAws className="certification-icon" />;
  if (lower.includes('gcp') || lower.includes('google')) return <SiGooglecloud className="certification-icon" />;
  return null;
};

const Certifications: React.FC = () => {
  const certifications = dataService.getCertifications();

  if (!certifications || certifications.length === 0) return <div>No certifications found.</div>;

  return (
    <div className="certifications-container">
      <h2 className="certifications-title">Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert: any, idx: number) => {
          const logo = getCloudLogo(cert.title, cert.issuer);
          return (
            <div key={idx} className="certification-card" style={{ '--delay': `${idx * 0.1}s` } as React.CSSProperties}>
              {logo}
              <div className="certification-content">
                <h3>{cert.title}</h3>
                <span>{cert.issuer}</span>
                <span className="issued-date">{cert.date}</span>
                {cert.link && (
                  <a className="certification-link" href={cert.link} target="_blank" rel="noopener noreferrer">View Certificate</a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certifications;
