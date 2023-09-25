 
// components/VideoBackground.tsx
import React from 'react';

const VideoBackground: React.FC = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted playsInline>
        <source src="/intro.mp4" type="public/video" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
