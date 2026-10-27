import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { FilterBar } from '../components/FilterBar';
import { EmptyState } from '../components/EmptyState';
import { PROJECTS } from '../data/projects';

describe('Showcase UI Components', () => {
  const sampleProject = PROJECTS[0]; // MyCalculator

  it('renders ProjectCard with verified information', () => {
    const handleSelect = vi.fn();
    render(<ProjectCard project={sampleProject} onSelect={handleSelect} />);

    expect(screen.getByText('MyCalculator')).toBeInTheDocument();
    expect(screen.getByText('Anjali')).toBeInTheDocument();
    expect(screen.getByText('Utilities')).toBeInTheDocument();
    expect(screen.getByText('✓ Verified Complete')).toBeInTheDocument();

    const detailsBtn = screen.getByRole('button', { name: /view details for mycalculator/i });
    fireEvent.click(detailsBtn);
    expect(handleSelect).toHaveBeenCalledWith(sampleProject);
  });

  it('renders live demo link only when verified (Hackathon Countdown Hub)', () => {
    const countdownProject = PROJECTS.find((p) => p.id === 'hackathon-countdown-hub')!;
    const handleSelect = vi.fn();
    render(<ProjectCard project={countdownProject} onSelect={handleSelect} />);

    const liveLink = screen.getByRole('link', { name: /open live demo for hackathon countdown hub/i });
    expect(liveLink).toBeInTheDocument();
    expect(liveLink).toHaveAttribute('href', countdownProject.liveUrl!);
  });

  it('does NOT render a live demo link when unverified (MyCalculator)', () => {
    const handleSelect = vi.fn();
    render(<ProjectCard project={sampleProject} onSelect={handleSelect} />);

    const liveLink = screen.queryByRole('link', { name: /open live demo for mycalculator/i });
    expect(liveLink).toBeNull();
  });

  it('renders ProjectModal with problem statement, features, and run instructions', () => {
    const handleClose = vi.fn();
    render(<ProjectModal project={sampleProject} onClose={handleClose} />);

    expect(screen.getByText('MyCalculator')).toBeInTheDocument();
    expect(screen.getByText(/Problem & Motivation/i)).toBeInTheDocument();
    expect(screen.getByText(/Verified Features/i)).toBeInTheDocument();
    expect(screen.getByText(/How to Run Locally/i)).toBeInTheDocument();

    const closeBtn = screen.getByLabelText(/close project modal/i);
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalled();
  });

  it('renders EmptyState with reset button callback', () => {
    const handleReset = vi.fn();
    render(<EmptyState onReset={handleReset} query="nonexistentquery" />);

    expect(screen.getByText(/No matching projects found/i)).toBeInTheDocument();
    expect(screen.getByText(/nonexistentquery/i)).toBeInTheDocument();

    const resetBtn = screen.getByRole('button', { name: /reset all filters/i });
    fireEvent.click(resetBtn);
    expect(handleReset).toHaveBeenCalled();
  });

  it('triggers search and category callbacks in FilterBar', () => {
    const handleSearch = vi.fn();
    const handleCategory = vi.fn();
    const handleTech = vi.fn();
    const handleSort = vi.fn();
    const handleReset = vi.fn();

    render(
      <FilterBar
        searchQuery="calc"
        onSearchChange={handleSearch}
        selectedCategory="All"
        onCategoryChange={handleCategory}
        selectedTech=""
        onTechChange={handleTech}
        sortBy="name-asc"
        onSortChange={handleSort}
        onReset={handleReset}
        resultCount={2}
        totalCount={6}
      />
    );

    const input = screen.getByLabelText(/search projects/i);
    expect(input).toHaveValue('calc');

    // Click Category Pill "Sustainability"
    const sustainabilityPill = screen.getByRole('button', { name: /sustainability/i });
    fireEvent.click(sustainabilityPill);
    expect(handleCategory).toHaveBeenCalledWith('Sustainability');

    // Click Reset
    const resetBtn = screen.getByRole('button', { name: /reset/i });
    fireEvent.click(resetBtn);
    expect(handleReset).toHaveBeenCalled();
  });
});
