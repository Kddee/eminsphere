import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ClonedPreview = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const targetUrl = searchParams.get('url');

  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!targetUrl) {
    return <div className="p-10 text-center">No URL provided</div>;
  }

  return (
    <div 
      className="cloned-website-container"
      ref={containerRef}
      style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}
    >
      <iframe 
        src={targetUrl} 
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Cloned External Content"
      />
    </div>
  );
};

export default ClonedPreview;
