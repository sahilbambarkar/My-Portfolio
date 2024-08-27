import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './GmailCopy.css'; // Create this CSS file for styles

const GmailCopy = () => {
  const gmailAddress = 'sahilbambarkar007@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(gmailAddress)
      .then(() => {
        alert('Gmail address copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy:', err);
      });
  };

  return (
    <div className="gmail-copy" onClick={copyToClipboard}>
      <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
      <span className="email-text">{gmailAddress}</span>
    </div>
  );
};

export default GmailCopy;
