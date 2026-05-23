import React from 'react';

const CTAButtons = ({ onGetStarted, className = "" }) => {
  const handleGetStarted = () => {
    if (onGetStarted) {
      onGetStarted();
    } else {
      window.dispatchEvent(new CustomEvent('open-enquiry-modal', { detail: { service: 'General Enquiry' } }));
    }
  };

  return (
    <div className={`hero-actions ${className}`}>
      <a href="tel:+918171871902" className="btn-whatsapp" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
        </svg>
        <span>
          <span style={{ display: 'block', fontSize: 11, fontWeight: 600, opacity: 0.85, letterSpacing: '0.05em', textTransform: 'uppercase', lineHeight: 1 }}>Call Us Now</span>
          <span style={{ display: 'block', fontSize: 17, fontWeight: 800, letterSpacing: '-0.01em', lineHeight: 1.3 }}>+91 81718 71902</span>
        </span>
      </a>
      <button onClick={handleGetStarted} className="btn-ghost" style={{ border: '1.5px solid rgba(255,255,255,0.3)', cursor: 'pointer', fontWeight: '700' }}>Get Started</button>
      
      <style jsx>{`
        .btn-whatsapp {
          background: var(--blue, #1a4fc4);
          color: white;
          padding: 10px 20px;
          border-radius: 12px;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-whatsapp:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(26, 79, 196, 0.3);
          color: white;
        }
        .btn-ghost {
          display: inline-flex;
          align-items: center;
          padding: 12px 24px;
          background: rgba(255, 255, 255, 0.05);
          color: white;
          border-radius: 12px;
          font-size: 15px;
          transition: all 0.2s;
        }
        .btn-ghost:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: white !important;
        }
        @media (max-width: 640px) {
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .btn-whatsapp, .btn-ghost {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default CTAButtons;
