import React from 'react';
import { ArrowRight, Sparkles, Send, ShieldCheck, Terminal, Cpu } from 'lucide-react';
import type { ProjectItem } from '../types/project';
import { ProjectCard } from '../components/ProjectCard';
import { CircuitDivider } from '../components/CircuitDivider';

interface HomeViewProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
  onNavigate: (tab: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  projects,
  onSelectProject,
  onNavigate,
}) => {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          paddingTop: 'var(--space-16)',
          paddingBottom: 'var(--space-12)',
          background: 'linear-gradient(180deg, var(--color-surface-subtle) 0%, var(--color-page) 100%)',
          borderBottom: '1px solid var(--color-border)',
          overflow: 'hidden',
        }}
      >
        {/* Subtle decorative circuit traces in background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '45%',
            height: '100%',
            opacity: 0.15,
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 500 500" width="100%" height="100%" fill="none">
            <path d="M100 0v150l80 80h150l50-50v-80" stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="6 6" />
            <path d="M250 150v180l60 60h190" stroke="var(--color-accent)" strokeWidth="2.5" />
            <circle cx="180" cy="230" r="6" fill="var(--color-brand-600)" />
            <circle cx="330" cy="230" r="8" fill="var(--color-brand-900)" />
            <circle cx="310" cy="390" r="6" fill="var(--color-brand-500)" />
          </svg>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '44rem' }}>
            {/* Eyebrow */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.3rem 0.85rem',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border-strong)',
                boxShadow: 'var(--shadow-card)',
                fontSize: '0.8125rem',
                fontWeight: 700,
                color: 'var(--color-brand-900)',
                marginBottom: 'var(--space-5)',
              }}
            >
              <Cpu size={15} color="var(--color-brand-600)" />
              <span>SILLICO SAPIENS · TECHNICAL CLUB</span>
            </div>

            {/* Main Title */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
                fontWeight: 800,
                color: 'var(--color-text)',
                lineHeight: 1.05,
                letterSpacing: '-0.035em',
                marginBottom: 'var(--space-5)',
              }}
            >
              Student Ideas.{' '}
              <span style={{ color: 'var(--color-brand-600)' }}>
                Real-World Builds.
              </span>
            </h1>

            {/* Tagline & Supporting Copy */}
            <p
              style={{
                fontSize: 'clamp(1.0625rem, 2vw, 1.25rem)',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.55,
                marginBottom: 'var(--space-8)',
              }}
            >
              <strong>Where technology meets humanity.</strong> Explore practical engineering, zero-build micro-tools, and software crafted by university students using modern web foundations and AI coding agents.
            </p>

            {/* Primary CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
              <button
                onClick={() => { onNavigate('projects'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="btn btn-primary btn-lg"
              >
                <span>Explore Projects ({projects.length})</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => { onNavigate('submit'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="btn btn-secondary btn-lg"
              >
                <Send size={18} />
                <span>Submit Your Project</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 'var(--space-4)',
              marginTop: 'var(--space-12)',
            }}
          >
            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-4) var(--space-5)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-brand-600)', fontFamily: 'var(--font-heading)' }}>
                6
              </div>
              <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text)' }}>
                Student Projects
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                Calculators, timers & tools
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-4) var(--space-5)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-brand-600)', fontFamily: 'var(--font-heading)' }}>
                100%
              </div>
              <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text)' }}>
                Client-Side & Offline
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                Zero mandatory server deps
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-4) var(--space-5)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-brand-600)', fontFamily: 'var(--font-heading)' }}>
                6
              </div>
              <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text)' }}>
                Student Authors
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                Full creator attribution
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-4) var(--space-5)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-brand-600)', fontFamily: 'var(--font-heading)' }}>
                MIT
              </div>
              <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text)' }}>
                Open License
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                Public educational access
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section style={{ padding: 'var(--space-16) 0' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: 'var(--space-4)',
              marginBottom: 'var(--space-8)',
            }}
          >
            <div>
              <div className="badge badge-brand" style={{ marginBottom: 'var(--space-2)' }}>
                CURATED WORK
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-text)' }}>
                Featured Student Builds
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9375rem', marginTop: 'var(--space-1)' }}>
                Highlights from our recent Agentic Engineering webinar and practical workshops.
              </p>
            </div>

            <button
              onClick={() => { onNavigate('projects'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="btn btn-secondary btn-sm"
            >
              <span>View Directory</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--space-6)',
            }}
          >
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={onSelectProject}
              />
            ))}
          </div>
        </div>
      </section>

      <CircuitDivider />

      {/* Community Engineering Philosophy */}
      <section style={{ padding: 'var(--space-12) 0', backgroundColor: 'var(--color-surface-subtle)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '38rem', margin: '0 auto var(--space-10)' }}>
            <div className="badge badge-brand" style={{ marginBottom: 'var(--space-2)' }}>
              CORE PRINCIPLES
            </div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-text)' }}>
              How We Build at Sillico Sapiens
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9375rem', marginTop: 'var(--space-2)' }}>
              We believe students learn best by shipping real working software, experimenting with AI coding tools, and sharing code openly.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--space-6)',
            }}
          >
            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-6)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div
                style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-cyan-100)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-4)',
                }}
              >
                <Sparkles size={22} color="var(--color-brand-900)" />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--color-text)' }}>
                AI-Assisted Engineering
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Students leverage tools like Google Antigravity to plan architectures, scaffold interfaces, and iterate rapidly from concept to working prototype.
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-6)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div
                style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-cyan-100)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-4)',
                }}
              >
                <Terminal size={22} color="var(--color-brand-900)" />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--color-text)' }}>
                Zero-Friction Client Builds
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Projects are designed to execute directly in the browser or via simple local static servers—removing deployment hurdles and fragile dependencies.
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-6)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div
                style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-cyan-100)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-4)',
                }}
              >
                <ShieldCheck size={22} color="var(--color-brand-900)" />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--color-text)' }}>
                Protected Authorship
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Every student retains full copyright and credit for their work, with clean attribution, documented READMEs, and open MIT public licensing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Callout Section */}
      <section style={{ padding: 'var(--space-16) 0' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: 'var(--color-brand-900)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-10) var(--space-8)',
              color: '#ffffff',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 'var(--space-6)',
              boxShadow: 'var(--shadow-overlay)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ maxWidth: '34rem' }}>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ffffff', marginBottom: 'var(--space-2)' }}>
                Are you building something exciting?
              </h2>
              <p style={{ color: 'var(--color-cyan-100)', fontSize: '1rem', lineHeight: 1.5 }}>
                Join the Sillico Sapiens community! Submit your project, share your code on GitHub, and get featured on this showcase platform.
              </p>
            </div>

            <button
              onClick={() => { onNavigate('submit'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="btn btn-secondary btn-lg"
              style={{
                backgroundColor: '#ffffff',
                color: 'var(--color-brand-900)',
                fontWeight: 700,
              }}
            >
              <Send size={18} />
              <span>Read Submission Guide</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
