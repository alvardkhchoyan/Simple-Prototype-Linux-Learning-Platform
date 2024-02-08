// src/components/ExternalWebsite.js
import React from 'react';

const ExternalWebsite = () => {
  const handleReturnClick = () => {
    // Simulate returning to the Linux Learning Platform
    alert('Returning to Linux Learning Platform (simulated)');
  };

  return (
    <div className="external-website">
      <div className="sub-topics-section">
        {/* Display sub-topics here */}
      </div>
      <div className="return-button" onClick={handleReturnClick}>
        Return to Linux Learning Platform
      </div>
    </div>
  );
};

export default ExternalWebsite;
