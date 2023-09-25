// components/VideoBackground.tsx
import React from 'react';

const VideoBackground: React.FC = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted playsInline className="fixed top-0 left-0 w-full h-full z-[-1]">
        <source src="../video/Intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
