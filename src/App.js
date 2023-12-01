import React, { useState, useEffect } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import './App.css';
// import Hls from 'react-hls';

const videoLinks = [
  'https://api.tfarraj.tv/api/v1/videos/64a1fa034bb997bdf598ef77/video',
  'https://api.tfarraj.tv/api/v1/videos/64a1fee44bb997bdf5991442/video',
  'https://api.tfarraj.tv/api/v1/videos/64a80dcf4bb997bdf59f34e2/video',
  'https://api.tfarraj.tv/api/v1/videos/63f3daf03e12167f51c8fd7c/video',
];

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepChange = (event) => {
    setCurrentStep(event.data);
  };

  useEffect(() => {
   
    const video = document.getElementById('video0');
    video.play();

    for (let i = 1; i < videoLinks.length; i++) {
      const otherVideo = document.getElementById(`video${i}`);
      otherVideo.pause();
    }
  }, []);

  return (
    <div className="app">
      <div className="video-container">
        {videoLinks.map((videoLink, index) => (
          <div
            key={index}
            className={`video ${index === currentStep ? 'active' : ''}`}
          >
            <video
              id={`video${index}`}
              controls
              muted={index !== currentStep}
              autoPlay={index === currentStep}
              loop
            >
              {/* <Hls
              id={`video${index}`}
              url={videoLink}
              autoPlay={index === currentStep}
              controls={false}
            /> */}
              <source src={videoLink} type="video/mp4" />
              
            </video>
          </div>
        ))}
      </div>
      <Scrollama onStepEnter={handleStepChange} offset={0.6}>
        {videoLinks.map((_, index) => (
          <Step key={index} data={index}>
            <div className="step-content">Scroll</div>
          </Step>
        ))}
      </Scrollama>
    </div>
  );
};

export default App;
