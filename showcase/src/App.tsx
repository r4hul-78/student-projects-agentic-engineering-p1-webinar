import React, { useState, useEffect } from 'react';
import { PROJECTS } from './data/projects';
import type { ProjectItem } from './types/project';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { HomeView } from './pages/HomeView';
import { ExploreView } from './pages/ExploreView';
import { ContributorsView } from './pages/ContributorsView';
import { AboutView } from './pages/AboutView';
import { SubmitView } from './pages/SubmitView';

export const App: React.FC = () => {
  // Theme state with localStorage persistence
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('sillico_theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Active tab / route state
  const [currentTab, setCurrentTab] = useState<string>('home');

  // Selected project for modal detail view
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Synchronize theme with document data-theme attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('sillico_theme', theme);
  }, [theme]);

  // Handle URL hash changes for deep linking and back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('project-')) {
        const projId = hash.replace('project-', '');
        const found = PROJECTS.find((p) => p.id === projId);
        if (found) {
          setSelectedProject(found);
          setCurrentTab('projects');
          return;
        }
      }

      if (['home', 'projects', 'contributors', 'about', 'submit'].includes(hash)) {
        setCurrentTab(hash);
      } else if (!hash) {
        setCurrentTab('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (tab: string) => {
    setCurrentTab(tab);
    window.location.hash = tab === 'home' ? '' : tab;
  };

  const handleSelectProject = (project: ProjectItem) => {
    setSelectedProject(project);
    window.location.hash = `project-${project.id}`;
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    if (window.location.hash.startsWith('#project-')) {
      window.location.hash = currentTab === 'home' ? '' : currentTab;
    }
  };

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Global Navigation Header */}
      <Navbar
        currentTab={currentTab}
        onNavigate={handleNavigate}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        {currentTab === 'home' && (
          <HomeView
            projects={PROJECTS}
            onSelectProject={handleSelectProject}
            onNavigate={handleNavigate}
          />
        )}

        {currentTab === 'projects' && (
          <ExploreView
            projects={PROJECTS}
            onSelectProject={handleSelectProject}
          />
        )}

        {currentTab === 'contributors' && (
          <ContributorsView
            projects={PROJECTS}
            onSelectProject={handleSelectProject}
          />
        )}

        {currentTab === 'about' && <AboutView />}

        {currentTab === 'submit' && <SubmitView />}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Detailed Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default App;
