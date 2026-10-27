import React from 'react';
import { Cpu, ExternalLink, Heart, ShieldCheck } from 'lucide-react';
import { REPOSITORY_URL } from '../data/projects';
import { GithubIcon } from './GithubIcon';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer
      style={{
        marginTop: 'auto',
        backgroundColor: 'var(--color-surface-muted)',
        borderTop: '1px solid var(--color-border)',
        paddingTop: 'var(--space-12)',
        paddingBottom: 'var(--space-8)',
        transition: 'background-color var(--motion-normal)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'var(--space-8)',
            marginBottom: 'var(--space-10)',
          }}
        >
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: 'var(--space-3)' }}>
              <div
                style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--color-brand-900)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Cpu size={18} color="var(--color-cyan-200)" />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.2rem', color: 'var(--color-text)' }}>
                Sillico Sapiens
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)', maxWidth: '20rem' }}>
              <strong>Where technology meets humanity.</strong> A community technical club platform celebrating student creativity, practical engineering, and software built with modern AI coding agents.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
              <ShieldCheck size={16} color="var(--color-success)" />
              <span>Preserving student authorship & open work</span>
            </div>
          </div>

          {/* Navigation Col */}
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: 'var(--space-3)', color: 'var(--color-text)' }}>
              Showcase Discovery
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
              <li>
                <button
                  onClick={() => { onNavigate('projects'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  style={{ background: 'none', border: 'none', color: 'var(--color-text-secondary)', cursor: 'pointer', padding: 0 }}
                  className="hover-underline"
                >
                  Explore All Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('contributors'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  style={{ background: 'none', border: 'none', color: 'var(--color-text-secondary)', cursor: 'pointer', padding: 0 }}
                  className="hover-underline"
                >
                  Meet the Contributors
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  style={{ background: 'none', border: 'none', color: 'var(--color-text-secondary)', cursor: 'pointer', padding: 0 }}
                  className="hover-underline"
                >
                  About Sillico Sapiens
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('submit'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  style={{ background: 'none', border: 'none', color: 'var(--color-text-secondary)', cursor: 'pointer', padding: 0 }}
                  className="hover-underline"
                >
                  Submit a Student Project
                </button>
              </li>
            </ul>
          </div>

          {/* Repository & Open Source Col */}
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: 'var(--space-3)', color: 'var(--color-text)' }}>
              Repository & Code
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
              <li>
                <a
                  href={REPOSITORY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--color-primary)' }}
                >
                  <GithubIcon size={16} />
                  <span>GitHub Repository</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href={`${REPOSITORY_URL}/blob/main/LICENSE`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--color-text-secondary)' }}
                >
                  <span>MIT License Terms</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href={`${REPOSITORY_URL}/blob/main/CONTRIBUTING.md`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--color-text-secondary)' }}
                >
                  <span>Contribution Guidelines</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href={`${REPOSITORY_URL}/blob/main/design.md`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--color-text-secondary)' }}
                >
                  <span>Design System Specification</span>
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid var(--color-border)',
            paddingTop: 'var(--space-6)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-4)',
            fontSize: '0.8125rem',
            color: 'var(--color-text-muted)',
          }}
        >
          <div>
            © {CURRENT_YEAR} Sillico Sapiens Technical Club. All student submissions copyright their respective student authors.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span>Built by students with</span>
            <Heart size={14} color="var(--color-danger)" fill="var(--color-danger)" />
            <span>& AI coding agents</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
