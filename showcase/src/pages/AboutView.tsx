import React from 'react';
import { Lightbulb, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { CircuitDivider } from '../components/CircuitDivider';

export const AboutView: React.FC = () => {
  return (
    <div style={{ paddingTop: 'var(--space-10)', paddingBottom: 'var(--space-16)' }}>
      <div className="container" style={{ maxWidth: '52rem' }}>
        {/* Header */}
        <div style={{ marginBottom: 'var(--space-10)' }}>
          <div className="badge badge-brand" style={{ marginBottom: 'var(--space-2)' }}>
            ABOUT THE PLATFORM
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: 'var(--space-3)' }}>
            Sillico Sapiens
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-primary)', fontWeight: 600, lineHeight: 1.4 }}>
            Where technology meets humanity. Ideas to impact.
          </p>
        </div>

        {/* Mission Card */}
        <div
          style={{
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-8)',
            boxShadow: 'var(--shadow-card)',
            marginBottom: 'var(--space-8)',
          }}
        >
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 'var(--space-3)', color: 'var(--color-text)' }}>
            Our Mission
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
            Sillico Sapiens is a university technical community dedicated to bridging the gap between theoretical computing concepts and practical, hands-on software development. We believe that curiosity-driven experimentation, combined with modern development methodologies, unlocks exceptional creative potential in student engineers.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
            This platform archives, highlights, and honors the projects built by our members during workshops, webinars, and self-directed study sprints.
          </p>
        </div>

        {/* Core Pillars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', marginBottom: 'var(--space-10)' }}>
          <div
            style={{
              display: 'flex',
              gap: 'var(--space-4)',
              backgroundColor: 'var(--color-surface-subtle)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-6)',
            }}
          >
            <div
              style={{
                width: '3rem',
                height: '3rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--color-brand-900)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Lightbulb size={24} color="var(--color-cyan-200)" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.25rem' }}>
                Learning by Building
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Nothing replaces the experience of assembling a working software tool from scratch. Whether it is implementing a safe recursive-descent mathematical parser, computing campus carbon emission benchmarks, or architecting a real-time event ticker, our students learn by shipping real code.
              </p>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              gap: 'var(--space-4)',
              backgroundColor: 'var(--color-surface-subtle)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-6)',
            }}
          >
            <div
              style={{
                width: '3rem',
                height: '3rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--color-brand-900)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Sparkles size={24} color="var(--color-cyan-200)" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.25rem' }}>
                AI-Assisted & Agentic Engineering
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Our members explore modern agentic workflows utilizing tools such as Google Antigravity. Rather than passive spectators, students act as system architects—defining specifications, guiding agentic tool chains (Plan ➔ Execute ➔ Browser Verify ➔ Polish), and validating runtime behavior directly in real browser environments.
              </p>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              gap: 'var(--space-4)',
              backgroundColor: 'var(--color-surface-subtle)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-6)',
            }}
          >
            <div
              style={{
                width: '3rem',
                height: '3rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--color-brand-900)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <ShieldCheck size={24} color="var(--color-cyan-200)" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.25rem' }}>
                Open-Source Integrity & Respect
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Every student retains copyright of their original code. Submissions are published under the MIT License for public study, while preserving attribution, clear documentation, and independent ownership.
              </p>
            </div>
          </div>
        </div>

        <CircuitDivider />

        {/* How to Participate */}
        <div
          style={{
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-8)',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 'var(--space-3)', color: 'var(--color-text)' }}>
            How to Get Involved
          </h2>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.9375rem', color: 'var(--color-text)' }}>
              <CheckCircle2 size={18} color="var(--color-brand-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Build:</strong> Create a project addressing a university, community, or practical engineering challenge.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.9375rem', color: 'var(--color-text)' }}>
              <CheckCircle2 size={18} color="var(--color-brand-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Document:</strong> Write a clear README specifying features, technologies, setup instructions, and verified links.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.9375rem', color: 'var(--color-text)' }}>
              <CheckCircle2 size={18} color="var(--color-brand-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Submit:</strong> Open a pull request following the guidelines in CONTRIBUTING.md.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
