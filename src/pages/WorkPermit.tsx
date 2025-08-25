import React, { useState } from 'react';
import './WorkPermit.css';
import dataService from '../services/dataService';
import { FaPassport, FaRegCopy } from 'react-icons/fa';

const LABEL_WIDTH = 120;
const VALUE_MARGIN = 8;

const WorkPermit: React.FC = () => {
  const workPermit = dataService.getWorkPermit();
  const mainInfo = dataService.getMainInfo();
  const [copied, setCopied] = useState(false);

  if (!workPermit) return <div>No work permit information found.</div>;

  const handleCopy = () => {
    navigator.clipboard.writeText(workPermit.visaStatus);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="work-permit-container">
      <div className="work-permit-card">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 16 }}>
          <FaPassport size={48} color="#e50914" style={{ marginBottom: 8 }} />
          <h2 className="work-permit-headline">Work Permit</h2>
        </div>
        <div style={{ marginBottom: 18 }}>
          <div style={{ display: 'flex', marginBottom: 12 }}>
            <span style={{ fontWeight: 600, color: '#e50914', fontSize: '1.1rem', width: LABEL_WIDTH, minWidth: LABEL_WIDTH, textAlign: 'right' }}>Visa Status:</span>
            <span style={{ marginLeft: VALUE_MARGIN, fontSize: '1.1rem', fontWeight: 500, background: '#eee', padding: '2px 6px', borderRadius: 4 }}>{workPermit.visaStatus}</span>
            <button
              onClick={handleCopy}
              style={{
                marginLeft: 8,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: copied ? '#16c082' : '#e50914',
                fontSize: 18,
                verticalAlign: 'middle',
                outline: 'none',
                transition: 'color 0.2s',
              }}
              aria-label="Copy visa status"
              title="Copy visa status"
            >
              <FaRegCopy />
            </button>
            {copied && <span style={{ color: '#16c082', marginLeft: 6, fontSize: 14 }}>Copied!</span>}
          </div>
          <div style={{ display: 'flex', marginBottom: 12 }}>
            <span style={{ fontWeight: 600, color: '#e50914', width: LABEL_WIDTH, minWidth: LABEL_WIDTH, textAlign: 'right' }}>Expiry Date:</span>
            <span style={{ marginLeft: VALUE_MARGIN }}>{workPermit.expiryDate}</span>
          </div>
          <div style={{ display: 'flex', marginBottom: 12, alignItems: 'flex-start' }}>
            <span style={{ fontWeight: 600, color: '#e50914', width: LABEL_WIDTH, minWidth: LABEL_WIDTH, textAlign: 'right', marginTop: 0 }}>Summary:</span>
            <span style={{ marginLeft: VALUE_MARGIN, lineHeight: 1.5, textAlign: 'left' }}>{workPermit.summary}</span>
          </div>
          {workPermit.additionalInfo && (
            <div style={{ display: 'flex', marginBottom: 10, alignItems: 'flex-start' }}>
              <span style={{ fontWeight: 600, color: '#e50914', width: LABEL_WIDTH, minWidth: LABEL_WIDTH, textAlign: 'right' }}>Additional Info:</span>
              <span style={{ marginLeft: VALUE_MARGIN, fontStyle: 'italic', textAlign: 'left' }}>{workPermit.additionalInfo}</span>
            </div>
          )}
        </div>
        <div style={{ borderTop: '1px solid #eee', marginTop: 18, paddingTop: 12, textAlign: 'center', color: '#888', fontSize: 15 }}>
          For any additional queries please reach me out on <b>{mainInfo.phone || '+1-XXX-XXX-XXXX'}</b>
        </div>
      </div>
    </div>
  );
};

export default WorkPermit;
