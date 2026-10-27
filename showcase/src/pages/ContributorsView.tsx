import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { ProjectItem } from '../types/project';
import { GithubIcon } from '../components/GithubIcon';

interface ContributorsViewProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
}

interface ContributorInfo {
  name: string;
  handle?: string;
  program?: string;
  profileUrl?: string;
  projects: ProjectItem[];
}

export const ContributorsView: React.FC<ContributorsViewProps> = ({ projects, onSelectProject }) => {
  // Aggregate contributors from verified project dataset
  const contributorsMap = new Map<string, ContributorInfo>();

  projects.forEach((proj) => {
    const authorName = proj.author.name;
    if (!contributorsMap.has(authorName)) {
      contributorsMap.set(authorName, {
        name: authorName,
        handle: proj.author.handle,
        program: proj.author.program,
        profileUrl: proj.author.profileUrl,
        projects: [proj],
      });
    } else {
      contributorsMap.get(authorName)!.projects.push(proj);
    }
  });

  const contributors = Array.from(contributorsMap.values()).sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div style={{ paddingTop: 'var(--space-10)', paddingBottom: 'var(--space-16)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 'var(--space-10)' }}>
          <div className="badge badge-brand" style={{ marginBottom: 'var(--space-2)' }}>
            COMMUNITY
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: 'var(--space-2)' }}>
            Student Contributors
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', maxWidth: '38rem' }}>
            Meet the students behind the projects. All author details and project attributions are verified directly from repository submissions.
          </p>
        </div>

        {/* Contributors Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 'var(--space-6)',
          }}
        >
          {contributors.map((c) => (
            <div
              key={c.name}
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-6)',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-4)',
              }}
            >
              {/* Contributor Avatar & Name */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                <div
                  style={{
                    width: '3.5rem',
                    height: '3.5rem',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-brand-900)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                  }}
                >
                  {c.name.charAt(0)}
                </div>

                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text)' }}>
                    {c.name}
                  </h3>
                  {c.handle && (
                    <div style={{ fontSize: '0.8125rem', color: 'var(--color-brand-600)', fontWeight: 600 }}>
                      {c.handle}
                    </div>
                  )}
                  {c.program && (
                    <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
                      {c.program}
                    </div>
                  )}
                </div>
              </div>

              {/* Verified Contribution Metric */}
              <div
                style={{
                  padding: 'var(--space-3) var(--space-4)',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-surface-subtle)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
                  Showcase Projects
                </span>
                <span className="badge badge-brand">
                  {c.projects.length} {c.projects.length === 1 ? 'Project' : 'Projects'}
                </span>
              </div>

              {/* Associated Projects */}
              <div>
                <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Submitted Projects:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {c.projects.map((proj) => (
                    <div
                      key={proj.id}
                      style={{
                        padding: 'var(--space-3)',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'var(--color-surface-muted)',
                        border: '1px solid var(--color-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-text)' }}>
                          {proj.name}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>
                          {proj.category}
                        </div>
                      </div>

                      <button
                        onClick={() => onSelectProject(proj)}
                        className="btn btn-sm btn-ghost"
                        style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}
                      >
                        View Details
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Profile Link if available */}
              {c.profileUrl && (
                <div style={{ marginTop: 'auto', paddingTop: 'var(--space-2)' }}>
                  <a
                    href={c.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-secondary"
                    style={{ width: '100%' }}
                  >
                    <GithubIcon size={14} />
                    <span>View GitHub Profile</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
