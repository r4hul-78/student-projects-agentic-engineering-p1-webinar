import React, { useEffect } from 'react';
import { X, ExternalLink, Terminal, CheckCircle2, User, Layers, Shield, Sparkles } from 'lucide-react';
import type { ProjectItem } from '../types/project';
import { ProjectPreview } from './ProjectPreview';
import { GithubIcon } from './GithubIcon';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        backgroundColor: 'rgba(16, 54, 61, 0.65)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--space-4)',
        overflowY: 'auto',
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        style={{
          width: '100%',
          maxWidth: '46rem',
          backgroundColor: 'var(--color-surface)',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--color-border-strong)',
          boxShadow: 'var(--shadow-overlay)',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 'var(--space-4) var(--space-6)',
            borderBottom: '1px solid var(--color-border)',
            backgroundColor: 'var(--color-surface-subtle)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="badge badge-brand">{project.category}</span>
            <span className="badge badge-status">✓ {project.status}</span>
          </div>

          <button
            onClick={onClose}
            className="btn btn-ghost btn-sm"
            style={{ padding: '0.4rem', borderRadius: 'var(--radius-pill)' }}
            aria-label="Close project modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div style={{ padding: 'var(--space-6)', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          {/* Visual Preview */}
          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
            <ProjectPreview type={project.previewType} title={project.name} />
          </div>

          {/* Title & Tagline */}
          <div>
            <h2
              id="modal-project-title"
              style={{
                fontSize: '1.75rem',
                fontWeight: 800,
                color: 'var(--color-text)',
                marginBottom: 'var(--space-2)',
              }}
            >
              {project.name}
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-primary)', fontWeight: 600 }}>
              {project.tagline}
            </p>
          </div>

          {/* Author & Folder Metadata */}
          <div
            style={{
              padding: 'var(--space-4)',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--color-surface-muted)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 'var(--space-3)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <User size={18} color="var(--color-brand-600)" />
              <div>
                <span style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--color-text)' }}>
                  {project.author.name}
                </span>
                {project.author.program && (
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', marginLeft: '0.4rem' }}>
                    · {project.author.program}
                  </span>
                )}
              </div>
            </div>

            <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', fontFamily: 'monospace' }}>
              Folder: {project.sourcePath}
            </div>
          </div>

          {/* Action Links Bar */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>Launch Live Demo</span>
                <ExternalLink size={16} />
              </a>
            ) : (
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-surface-muted)',
                  border: '1px solid var(--color-border)',
                  fontSize: '0.875rem',
                  color: 'var(--color-text-secondary)',
                }}
              >
                <span>Zero-Build Application · Runs locally via browser or HTTP server</span>
              </div>
            )}

            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <GithubIcon size={16} />
              <span>View Source Folder</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Problem Statement */}
          {project.problemStatement && (
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--color-text)' }}>
                Problem & Motivation
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                {project.problemStatement}
              </p>
            </div>
          )}

          {/* Implemented Features */}
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 'var(--space-3)', color: 'var(--color-text)' }}>
              Verified Features
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {project.features.map((feature, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.65rem',
                    fontSize: '0.9375rem',
                    color: 'var(--color-text)',
                  }}
                >
                  <CheckCircle2 size={18} color="var(--color-brand-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 'var(--space-3)', color: 'var(--color-text)' }}>
              Technology Stack
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="badge badge-tech"
                  style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
                >
                  <Layers size={14} color="var(--color-brand-700)" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Agentic Workflow Note if present */}
          {project.agenticWorkflowNote && (
            <div
              style={{
                padding: 'var(--space-4)',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--color-cyan-50)',
                border: '1px solid var(--color-cyan-200)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.65rem',
              }}
            >
              <Sparkles size={20} color="var(--color-brand-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ fontSize: '0.875rem', color: 'var(--color-brand-950)' }}>
                  Agentic Engineering Insights:
                </strong>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-ink-700)', marginTop: '0.25rem' }}>
                  {project.agenticWorkflowNote}
                </p>
              </div>
            </div>
          )}

          {/* Run and Setup Instructions */}
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 'var(--space-3)', color: 'var(--color-text)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Terminal size={18} color="var(--color-brand-600)" />
              <span>How to Run Locally</span>
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {project.runInstructions.map((instruction, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--color-surface-muted)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--space-3) var(--space-4)',
                  }}
                >
                  <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-text)', marginBottom: '0.25rem' }}>
                    {instruction.title}
                  </div>
                  <code style={{ fontSize: '0.8125rem', color: 'var(--color-primary)', wordBreak: 'break-all' }}>
                    {instruction.steps}
                  </code>
                </div>
              ))}
            </div>
          </div>

          {/* Licensing & Attribution */}
          <div
            style={{
              borderTop: '1px solid var(--color-border)',
              paddingTop: 'var(--space-4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.8125rem',
              color: 'var(--color-text-muted)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Shield size={15} color="var(--color-brand-600)" />
              <span>License: {project.license}</span>
            </div>
            <div>Attribution verified from repository submission</div>
          </div>
        </div>
      </div>
    </div>
  );
};
