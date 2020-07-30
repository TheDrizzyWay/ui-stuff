import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [percentage, setPercentage] = useState(0);
  const [progress, setProgress] = useState(null);

  const simulateDownload = (progress) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(progress + 1);
        }, 50);
    }).then(res => res);
  };

  const download = () => { 
    const documentStyles = document.documentElement.style;
    setProgress('in-progress');
    
      (async () => {
          let progress = 0;

          while (progress < 100) {
              progress = await simulateDownload(progress);

              if (progress % 5 === 0) {
                documentStyles.setProperty('--progress', `${progress}%`);
              }
              setPercentage(progress);
          }

          setTimeout(() => setProgress('finished'), 1000);
      })();
  };

  return (
    <div className={`progress-button ${progress}`}>
      <span className="loading-text">Loading</span>
        <button className="download-button" onClick={download}>
          <span className="button-text">{progress === 'finished' ? '🎉 Done' : 'Download'}</span>
        </button>
      <span className="percentage">{percentage}%</span>
    </div>
  );
};

export default App;
