import React from 'react';

const VideoBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/images/video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-85"></div>
    </div>
  );
};

export default VideoBackground;