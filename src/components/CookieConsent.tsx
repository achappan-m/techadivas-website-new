import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      background: 'rgba(24,26,27,0.98)',
      color: '#fff',
      padding: '1rem',
      textAlign: 'center',
      zIndex: 9999,
      boxShadow: '0 -2px 8px rgba(0,0,0,0.08)'
    }}>
      <span>
        This website uses cookies to enhance your experience. By continuing to browse, you accept our <a href="/privacy" style={{ color: '#2d8cff', textDecoration: 'underline' }}>Privacy Policy</a>.
      </span>
      <button onClick={acceptCookies} style={{ marginLeft: 16, background: '#2d8cff', color: '#fff', border: 'none', borderRadius: 4, padding: '0.5rem 1.2rem', cursor: 'pointer' }}>
        Accept
      </button>
    </div>
  );
};

export default CookieConsent; 