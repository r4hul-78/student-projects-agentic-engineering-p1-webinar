import React, { useState, useMemo } from 'react';
import type { ProjectItem, ProjectCategory, SortOption } from '../types/project';
import { ProjectCard } from '../components/ProjectCard';
import { FilterBar } from '../components/FilterBar';
import { EmptyState } from '../components/EmptyState';

interface ExploreViewProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
}

export const ExploreView: React.FC<ExploreViewProps> = ({ projects, onSelectProject }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [selectedTech, setSelectedTech] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('name-asc');

  // Filter and Sort Pipeline
  const filteredProjects = useMemo(() => {
    let result = [...projects];

    // Search query filter (matches name, description, author, technologies, features)
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.author.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.technologies.some((t) => t.toLowerCase().includes(q)) ||
          p.features.some((f) => f.toLowerCase().includes(q))
      );
    }

    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Technology filter
    if (selectedTech !== '') {
      result = result.filter((p) => p.technologies.includes(selectedTech));
    }

    // Sorting
    result.sort((a, b) => {
      switch (sortBy) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'category':
          return a.category.localeCompare(b.category);
        case 'author':
          return a.author.name.localeCompare(b.author.name);
        default:
          return 0;
      }
    });

    return result;
  }, [projects, searchQuery, selectedCategory, selectedTech, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedTech('');
    setSortBy('name-asc');
  };

  return (
    <div style={{ paddingTop: 'var(--space-10)', paddingBottom: 'var(--space-16)' }}>
      <div className="container">
        {/* Page Title Header */}
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <div className="badge badge-brand" style={{ marginBottom: 'var(--space-2)' }}>
            DIRECTORY
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: 'var(--space-2)' }}>
            Explore Student Projects
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', maxWidth: '38rem' }}>
            Filter by technical categories, search real codebases, and view live demos or installation recipes.
          </p>
        </div>

        {/* Filter and Search Bar Component */}
        <FilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedTech={selectedTech}
          onTechChange={setSelectedTech}
          sortBy={sortBy}
          onSortChange={setSortBy}
          onReset={handleResetFilters}
          resultCount={filteredProjects.length}
          totalCount={projects.length}
        />

        {/* Project Cards Grid or Empty State */}
        {filteredProjects.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: 'var(--space-6)',
            }}
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={onSelectProject}
              />
            ))}
          </div>
        ) : (
          <EmptyState onReset={handleResetFilters} query={searchQuery} />
        )}
      </div>
    </div>
  );
};
