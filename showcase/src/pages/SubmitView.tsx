import React from 'react';
import { FileText, FolderGit2, ExternalLink } from 'lucide-react';
import { REPOSITORY_URL } from '../data/projects';
import { GithubIcon } from '../components/GithubIcon';

export const SubmitView: React.FC = () => {
  return (
    <div style={{ paddingTop: 'var(--space-10)', paddingBottom: 'var(--space-16)' }}>
      <div className="container" style={{ maxWidth: '52rem' }}>
        {/* Header */}
        <div style={{ marginBottom: 'var(--space-10)' }}>
          <div className="badge badge-brand" style={{ marginBottom: 'var(--space-2)' }}>
            CONTRIBUTION GUIDE
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: 'var(--space-3)' }}>
            Submit a Student Project
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
            Have you built an application, tool, or experiment as part of Sillico Sapiens? Follow these verified steps to submit your project via GitHub Pull Request.
          </p>
        </div>

        {/* Important Repository Notice */}
        <div
          style={{
            backgroundColor: 'var(--color-surface-subtle)',
            border: '1px solid var(--color-border-strong)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-6)',
            marginBottom: 'var(--space-8)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <FolderGit2 size={24} color="var(--color-brand-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-brand-950)', marginBottom: '0.25rem' }}>
                Folder Structure Convention
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-ink-700)', lineHeight: 1.6 }}>
                <strong>Important note:</strong> Student submissions are placed directly in their own dedicated subfolder at the root of the repository (e.g. <code>YourName_ProjectName/</code>). Please do not create an extra <code>/projects/</code> directory.
              </p>
            </div>
          </div>
        </div>

        {/* Step-by-Step Submission Workflow */}
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
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 'var(--space-6)', color: 'var(--color-text)' }}>
            4-Step Submission Process
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            {/* Step 1 */}
            <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
              <div
                style={{
                  width: '2.25rem',
                  height: '2.25rem',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-brand-900)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  flexShrink: 0,
                }}
              >
                1
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.25rem' }}>
                  Prepare Your Project Directory
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  Create your dedicated folder named <code>YourName_ProjectName</code>. Include all client-side files (<code>index.html</code>, <code>style.css</code>, <code>app.js</code>, or framework source) and ensure all dependencies run reliably.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
              <div
                style={{
                  width: '2.25rem',
                  height: '2.25rem',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-brand-900)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  flexShrink: 0,
                }}
              >
                2
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.25rem' }}>
                  Write a Comprehensive README.md
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  Your folder must include a <code>README.md</code> describing: Project Name, Problem / Motivation, Implemented Features, Real Tech Stack, Setup & Usage instructions, and Contributor details.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
              <div
                style={{
                  width: '2.25rem',
                  height: '2.25rem',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-brand-900)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  flexShrink: 0,
                }}
              >
                3
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.25rem' }}>
                  Ensure Data Privacy & License Respect
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  Never commit passwords, private API keys, student roll numbers, or personal contact info. Your submission is licensed under the repository’s MIT License, allowing public learning while protecting your copyright.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
              <div
                style={{
                  width: '2.25rem',
                  height: '2.25rem',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-brand-900)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  flexShrink: 0,
                }}
              >
                4
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.25rem' }}>
                  Open a GitHub Pull Request
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  Fork the repository, create a focused branch (e.g. <code>add-myproject</code>), commit your files, and submit a Pull Request to <code>main</code>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Project README Markdown Template */}
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: 'var(--space-3)' }}>
            <FileText size={20} color="var(--color-brand-600)" />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text)' }}>
              Recommended README.md Template
            </h3>
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)' }}>
            Copy this markdown template into your project's <code>README.md</code>:
          </p>

          <pre
            style={{
              backgroundColor: 'var(--color-surface-muted)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--space-4)',
              fontSize: '0.8125rem',
              overflowX: 'auto',
              color: 'var(--color-text)',
              lineHeight: 1.5,
              fontFamily: 'monospace',
            }}
          >
{`# Project Name

A concise, accurate summary of what the project does.

## Problem / Motivation
What problem or need does this application address?

## Features
- Implemented feature 1
- Implemented feature 2
- Implemented feature 3

## Technology Stack
- HTML5, CSS3, JavaScript (ES6+)
- List only technologies actually present in your project

## Setup and Usage
Provide verified run instructions (e.g. VS Code Live Server or python -m http.server).

## Contributors
Your Name (@github-handle)

## License
MIT License`}
          </pre>
        </div>

        {/* GitHub PR Action */}
        <div
          style={{
            backgroundColor: 'var(--color-surface-subtle)',
            border: '1px solid var(--color-border-strong)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-8)',
            textAlign: 'center',
          }}
        >
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: 'var(--space-2)' }}>
            Ready to Submit?
          </h3>
          <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)', maxWidth: '30rem', margin: '0 auto var(--space-6)' }}>
            Submit your project by opening a Pull Request on our GitHub repository. Our maintainers review every submission promptly.
          </p>

          <a
            href={`${REPOSITORY_URL}/pulls`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            <GithubIcon size={20} />
            <span>Open Pull Request on GitHub</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};
