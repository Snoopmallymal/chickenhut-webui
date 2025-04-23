import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const HlsPlayer = ({ streamUrl }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    let hls;

    // Check if the browser supports HLS natively
    if (Hls.isSupported()) {
      // Initialize HLS.js
      hls = new Hls();
      // Attach the HLS stream to the video element
      hls.loadSource(streamUrl);
      hls.attachMedia(videoRef.current);

      // Handle errors (optional)
      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          switch (data.error) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              console.error('A network error occurred.');
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.error('An error occurred while processing the media.');
              break;
            case Hls.ErrorTypes.OTHER_ERROR:
              console.error('An unknown error occurred.');
              break;
            default:
              console.error('Unknown error:', data.error);
          }
        }
      });
    } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      // If the browser supports HLS natively (e.g., Safari)
      videoRef.current.src = streamUrl;
    } else {
      console.error('HLS not supported in this browser.');
    }

    // Clean up HLS.js on unmount
    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [streamUrl]);

  return (
    <div className="hls-player">
      <video
        ref={videoRef}
        controls
        autoPlay
        width="100%" // You can adjust the size as needed
        style={{ maxWidth: '100%' }}
      >
        <p>Your browser does not support HLS video.</p>
      </video>
    </div>
  );
};

export default HlsPlayer;

