import React from 'react';
import { SearchX, RotateCcw } from 'lucide-react';

interface EmptyStateProps {
  onReset: () => void;
  query?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ onReset, query }) => {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-surface)',
        border: '1px dashed var(--color-border-strong)',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-12) var(--space-6)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '32rem',
        margin: 'var(--space-8) auto',
      }}
    >
      <div
        style={{
          width: '3.5rem',
          height: '3.5rem',
          borderRadius: '50%',
          backgroundColor: 'var(--color-surface-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 'var(--space-4)',
          border: '1px solid var(--color-border)',
        }}
      >
        <SearchX size={28} color="var(--color-brand-600)" />
      </div>

      <h3
        style={{
          fontSize: '1.25rem',
          fontWeight: 700,
          color: 'var(--color-text)',
          marginBottom: 'var(--space-2)',
        }}
      >
        No matching projects found
      </h3>

      <p
        style={{
          fontSize: '0.9375rem',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.5,
          marginBottom: 'var(--space-6)',
        }}
      >
        {query ? (
          <>
            No verified projects matched "<strong>{query}</strong>". Try clearing your search keywords or switching filters.
          </>
        ) : (
          'There are no verified projects currently matching this category and technology combination.'
        )}
      </p>

      <button onClick={onReset} className="btn btn-primary">
        <RotateCcw size={16} />
        <span>Reset all filters</span>
      </button>
    </div>
  );
};
