import React, { useState } from 'react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Replace with your Mailchimp or other provider endpoint
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo, just show success message
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', textAlign: 'center' }}>
      <h3>Subscribe to our Newsletter</h3>
      <p style={{ fontSize: '1rem', color: 'var(--neutral-gray)' }}>Get the latest updates and insights from Tech Adivas.</p>
      {submitted ? (
        <div style={{ color: 'var(--brand-primary)', marginTop: 12 }}>Thank you for subscribing!</div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 12 }}>
          <input
            type="email"
            required
            placeholder="Your email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ padding: '0.5rem', borderRadius: 4, border: '1px solid #ccc', flex: 1 }}
          />
          <button type="submit" className="cta-button primary" style={{ padding: '0.5rem 1.2rem' }}>
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
};

export default NewsletterSignup; 