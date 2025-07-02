import React from 'react';

const NotFound404: React.FC = () => (
  <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
    <h1 style={{ fontSize: '3rem', color: 'var(--brand-primary)' }}>404</h1>
    <h2 style={{ color: 'var(--neutral-gray)' }}>Page Not Found</h2>
    <p>The page you are looking for does not exist or has been moved.</p>
    <a href="/" className="cta-button primary" style={{ marginTop: '2rem', display: 'inline-block' }}>Go Home</a>
  </div>
);

export default NotFound404; 