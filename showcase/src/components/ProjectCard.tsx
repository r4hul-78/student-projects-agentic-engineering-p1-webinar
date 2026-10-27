import React from 'react';
import { ExternalLink, ArrowRight, User } from 'lucide-react';
import type { ProjectItem } from '../types/project';
import { ProjectPreview } from './ProjectPreview';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <article
      style={{
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-card)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform var(--motion-normal), box-shadow var(--motion-normal), border-color var(--motion-normal)',
      }}
      className="project-card"
    >
      {/* Visual Thumbnail */}
      <ProjectPreview type={project.previewType} title={project.name} />

      {/* Card Content Body */}
      <div style={{ padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Meta Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: 'var(--space-3)' }}>
          <span className="badge badge-brand">{project.category}</span>
          <span className="badge badge-status">✓ {project.status}</span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            marginBottom: 'var(--space-2)',
            color: 'var(--color-text)',
            lineHeight: 1.25,
          }}
        >
          {project.name}
        </h3>

        {/* Short Description */}
        <p
          style={{
            fontSize: '0.875rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.5,
            marginBottom: 'var(--space-4)',
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: 'var(--space-5)' }}>
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="badge badge-tech">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="badge badge-tech">+{project.technologies.length - 4}</span>
          )}
        </div>

        {/* Author & Actions Bar */}
        <div
          style={{
            borderTop: '1px solid var(--color-border)',
            paddingTop: 'var(--space-4)',
            marginTop: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.5rem',
          }}
        >
          {/* Author */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
            <User size={15} color="var(--color-brand-600)" />
            <span style={{ fontWeight: 600 }}>{project.author.name}</span>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-secondary"
                title="Open verified live demo"
                aria-label={`Open live demo for ${project.name}`}
              >
                <span>Live Demo</span>
                <ExternalLink size={13} />
              </a>
            )}

            <button
              onClick={() => onSelect(project)}
              className="btn btn-sm btn-primary"
              aria-label={`View details for ${project.name}`}
            >
              <span>Details</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .project-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-card-hover);
          border-color: var(--color-border-strong);
        }
      `}</style>
    </article>
  );
};
