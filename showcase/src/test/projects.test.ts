import { describe, it, expect } from 'vitest';
import { PROJECTS, CATEGORIES, ALL_TECHNOLOGIES, REPOSITORY_URL } from '../data/projects';

describe('Project Dataset Integrity', () => {
  it('contains all 6 verified student projects from the repository audit', () => {
    expect(PROJECTS.length).toBe(6);
    const expectedIds = [
      'my-calculator',
      'carbon-tracker',
      'hackathon-countdown-hub',
      'msr-cafe',
      'aero-calc',
      'study-pomodoro',
    ];
    const actualIds = PROJECTS.map((p) => p.id);
    expect(actualIds).toEqual(expect.arrayContaining(expectedIds));
  });

  it('guarantees each project has a unique, stable ID', () => {
    const ids = PROJECTS.map((p) => p.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(PROJECTS.length);
  });

  it('verifies required fields exist and are non-empty for all projects', () => {
    PROJECTS.forEach((p) => {
      expect(p.id.trim()).not.toBe('');
      expect(p.name.trim()).not.toBe('');
      expect(p.tagline.trim()).not.toBe('');
      expect(p.description.trim()).not.toBe('');
      expect(p.author.name.trim()).not.toBe('');
      expect(p.category.trim()).not.toBe('');
      expect(p.technologies.length).toBeGreaterThan(0);
      expect(p.sourcePath.trim()).not.toBe('');
      expect(p.sourceUrl.trim()).not.toBe('');
      expect(p.features.length).toBeGreaterThan(0);
      expect(p.license).toBe('MIT License');
      expect(p.status).toBe('Verified Complete');
      expect(p.runInstructions.length).toBeGreaterThan(0);
    });
  });

  it('protects student privacy by excluding student IDs from public author names', () => {
    PROJECTS.forEach((p) => {
      // Numerical IDs like 11262028 should not be part of public author name
      expect(p.author.name).not.toMatch(/\d{5,}/);
      expect(p.author.name).not.toContain('@mmdu.org');
      expect(p.author.name).not.toContain('@gmail.com');
    });
  });

  it('ensures sourceUrls correctly point to repository main tree folders', () => {
    PROJECTS.forEach((p) => {
      expect(p.sourceUrl).toBe(`${REPOSITORY_URL}/tree/main/${p.sourcePath}`);
    });
  });

  it('shows liveUrl only for verified deployed destinations (e.g. Love Panchal)', () => {
    const withLive = PROJECTS.filter((p) => p.liveUrl !== null);
    expect(withLive.length).toBe(1);
    expect(withLive[0].id).toBe('hackathon-countdown-hub');
    expect(withLive[0].liveUrl).toBe(
      'https://lovepanchalhere.github.io/hackathon-countdown-hub/'
    );
  });

  it('validates categories match the approved taxonomy', () => {
    PROJECTS.forEach((p) => {
      expect(CATEGORIES).toContain(p.category);
    });
  });

  it('includes essential web and agentic technologies across projects', () => {
    expect(ALL_TECHNOLOGIES).toContain('HTML5');
    expect(ALL_TECHNOLOGIES).toContain('localStorage');
    expect(ALL_TECHNOLOGIES).toContain('Web Audio API');
  });
});
