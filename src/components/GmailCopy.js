import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './GmailCopy.css'; // Ensure this CSS file exists

const GmailCopy = () => {
  const gmailAddress = 'sahilbambarkar007@gmail.com';

  const copyToClipboard = () => {
    // Check if the clipboard API is supported
    if (navigator.clipboard) {
      navigator.clipboard.writeText(gmailAddress)
        .then(() => {
          alert('Gmail address copied to clipboard!');
        })
        .catch(err => {
          console.error('Failed to copy:', err);
          alert('Failed to copy. Please try again.');
        });
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = gmailAddress;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        alert('Gmail address copied to clipboard!');
      } catch (err) {
        console.error('Fallback: Failed to copy:', err);
        alert('Failed to copy. Please try again.');
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="gmail-copy" onClick={copyToClipboard}>
      <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
      <span className="email-text">{gmailAddress}</span>
    </div>
  );
};

export default GmailCopy;
