import React from 'react';
import { Search, X, RotateCcw } from 'lucide-react';
import { CATEGORIES, ALL_TECHNOLOGIES } from '../data/projects';
import type { ProjectCategory, SortOption } from '../types/project';

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: ProjectCategory;
  onCategoryChange: (category: ProjectCategory) => void;
  selectedTech: string;
  onTechChange: (tech: string) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  onReset: () => void;
  resultCount: number;
  totalCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedTech,
  onTechChange,
  sortBy,
  onSortChange,
  onReset,
  resultCount,
  totalCount,
}) => {
  const isFiltered = searchQuery !== '' || selectedCategory !== 'All' || selectedTech !== '';

  return (
    <div
      style={{
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-6)',
        boxShadow: 'var(--shadow-card)',
        marginBottom: 'var(--space-8)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-5)',
      }}
    >
      {/* Search Input Row & Controls */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto auto',
          gap: 'var(--space-3)',
          alignItems: 'center',
        }}
        className="filter-top-row"
      >
        {/* Search Input */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <Search
            size={18}
            color="var(--color-text-muted)"
            style={{ position: 'absolute', left: '1rem', pointerEvents: 'none' }}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by project name, author, tech, or feature..."
            aria-label="Search projects"
            style={{
              width: '100%',
              padding: '0.75rem 2.5rem 0.75rem 2.75rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              backgroundColor: 'var(--color-surface-muted)',
              color: 'var(--color-text)',
              fontSize: '0.9375rem',
              fontFamily: 'var(--font-body)',
              transition: 'border-color var(--motion-fast)',
            }}
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              style={{
                position: 'absolute',
                right: '0.75rem',
                background: 'none',
                border: 'none',
                color: 'var(--color-text-muted)',
                cursor: 'pointer',
                padding: '0.25rem',
              }}
              aria-label="Clear search query"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Tech Selector Dropdown */}
        <div style={{ position: 'relative' }}>
          <select
            value={selectedTech}
            onChange={(e) => onTechChange(e.target.value)}
            aria-label="Filter by technology"
            style={{
              padding: '0.75rem 1rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              backgroundColor: 'var(--color-surface-muted)',
              color: 'var(--color-text)',
              fontSize: '0.875rem',
              fontFamily: 'var(--font-body)',
              cursor: 'pointer',
              fontWeight: 500,
            }}
          >
            <option value="">All Technologies</option>
            {ALL_TECHNOLOGIES.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>

        {/* Sort Dropdown */}
        <div style={{ position: 'relative' }}>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            aria-label="Sort projects"
            style={{
              padding: '0.75rem 1rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              backgroundColor: 'var(--color-surface-muted)',
              color: 'var(--color-text)',
              fontSize: '0.875rem',
              fontFamily: 'var(--font-body)',
              cursor: 'pointer',
              fontWeight: 500,
            }}
          >
            <option value="name-asc">Sort: Name (A – Z)</option>
            <option value="name-desc">Sort: Name (Z – A)</option>
            <option value="category">Sort: Category</option>
            <option value="author">Sort: Author</option>
          </select>
        </div>
      </div>

      {/* Category Pills & Results Info Row */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--space-3)',
          borderTop: '1px solid var(--color-border)',
          paddingTop: 'var(--space-4)',
        }}
      >
        {/* Category Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginRight: '0.25rem' }}>
            Category:
          </span>
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                style={{
                  padding: '0.35rem 0.75rem',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.8125rem',
                  fontWeight: isSelected ? 700 : 500,
                  cursor: 'pointer',
                  border: '1px solid',
                  borderColor: isSelected ? 'var(--color-brand-600)' : 'var(--color-border)',
                  backgroundColor: isSelected ? 'var(--color-brand-900)' : 'var(--color-surface)',
                  color: isSelected ? '#ffffff' : 'var(--color-text-secondary)',
                  transition: 'all var(--motion-fast)',
                }}
                aria-pressed={isSelected}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Results Counter & Reset Action */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
            Showing <strong>{resultCount}</strong> of {totalCount} projects
          </span>

          {isFiltered && (
            <button
              onClick={onReset}
              className="btn btn-sm btn-ghost"
              style={{
                color: 'var(--color-brand-600)',
                padding: '0.3rem 0.6rem',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
              }}
              title="Reset all search filters"
            >
              <RotateCcw size={14} />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .filter-top-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
