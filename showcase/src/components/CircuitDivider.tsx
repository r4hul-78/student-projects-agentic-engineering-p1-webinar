import React from 'react';

export const CircuitDivider: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        margin: 'var(--space-12) 0',
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 800 24"
        width="100%"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ maxWidth: '800px', opacity: 0.85 }}
      >
        {/* Left line */}
        <path d="M0 12h280l15-8h70l15 8h40" stroke="var(--color-border-strong)" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Central circuit loop with nodes */}
        <circle cx="365" cy="4" r="3" fill="var(--color-brand-600)" />
        <circle cx="400" cy="12" r="4.5" fill="var(--color-brand-900)" stroke="var(--color-brand-500)" strokeWidth="2" />
        <circle cx="435" cy="20" r="3" fill="var(--color-brand-600)" />

        {/* Right line */}
        <path d="M380 12h40l15 8h70l15-8h280" stroke="var(--color-border-strong)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
};
