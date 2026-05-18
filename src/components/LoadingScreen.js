import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-spinner"></div>
        <h2 className="loading-text">Loading Portfolio...</h2>
      </div>
    </div>
  );
};

export default LoadingScreen;
