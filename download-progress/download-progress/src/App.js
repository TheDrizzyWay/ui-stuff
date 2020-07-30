import React from 'react';
import './App.css';

const App = () => {
  const download = () => { };

  return (
      <div className="progress-button">
          <span className="loading-text">Loading</span>
              <button className="download-button" onClick={download}>
                  <span className="button-text">Download</span>
              </button>
          <span className="percentage">0%</span>
      </div>
  );
};

export default App;
