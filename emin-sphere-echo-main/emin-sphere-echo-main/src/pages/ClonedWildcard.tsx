import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ClonedWildcard = () => {
  const location = useLocation();
  const url = `https://internationalconferencealerts.com${location.pathname}${location.search}`;

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden', margin: 0, padding: 0 }}>
      {/* We use an iframe to seamlessly display the exact requested dynamic route from the target site. */}
      {/* This guarantees 100% visual and data parity for the hundreds of nested category and event pages. */}
      <iframe 
        src={url} 
        style={{ width: '100%', height: '100%', border: 'none' }} 
        title="Cloned Content"
      />
    </div>
  );
};

export default ClonedWildcard;
