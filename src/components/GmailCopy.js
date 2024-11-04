import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
    <div
      className="flex items-center cursor-pointer font-bold text-[#ec6e59] text-lg p-2 rounded transition duration-300 hover:bg-[#ec6e59]/10"
      onClick={copyToClipboard}
    >
      <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
      <span>{gmailAddress}</span>
    </div>
  );
};

export default GmailCopy;
