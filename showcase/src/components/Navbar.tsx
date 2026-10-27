import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Cpu, FolderGit2, Users, Info, Send } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onNavigate,
  theme,
  onToggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Cpu },
    { id: 'projects', label: 'Explore Projects', icon: FolderGit2 },
    { id: 'contributors', label: 'Contributors', icon: Users },
    { id: 'about', label: 'About', icon: Info },
    { id: 'submit', label: 'Submit Project', icon: Send },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        backgroundColor: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-border)',
        backdropFilter: 'blur(12px)',
        transition: 'background-color var(--motion-normal), border-color var(--motion-normal)',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 'var(--header-height)' }}>
        {/* Brand */}
        <button
          onClick={() => handleNavClick('home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'left',
            padding: '0.25rem',
          }}
          aria-label="Sillico Sapiens Homepage"
        >
          <div
            style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--color-brand-900)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <Cpu size={22} color="var(--color-cyan-200)" />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', lineHeight: 1.1, color: 'var(--color-text)' }}>
              Sillico Sapiens
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-brand-600)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Student Showcase
            </div>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <nav style={{ display: 'none', gap: '0.5rem', alignItems: 'center' }} className="desktop-nav">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`btn btn-sm ${isActive ? 'btn-primary' : 'btn-ghost'}`}
                style={{
                  fontWeight: isActive ? 700 : 500,
                  borderRadius: 'var(--radius-md)',
                }}
              >
                {item.label}
              </button>
            );
          })}

          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className="btn btn-ghost btn-sm"
            style={{
              padding: '0.5rem',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--color-border)',
              marginLeft: '0.5rem',
            }}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? <Moon size={18} color="var(--color-brand-900)" /> : <Sun size={18} color="#bfeff0" />}
          </button>
        </nav>

        {/* Mobile Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="mobile-controls">
          <button
            onClick={onToggleTheme}
            className="btn btn-ghost btn-sm"
            style={{
              padding: '0.45rem',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--color-border)',
            }}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn btn-secondary btn-sm"
            style={{ padding: '0.45rem 0.65rem' }}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            borderTop: '1px solid var(--color-border)',
            backgroundColor: 'var(--color-surface)',
            padding: '1rem',
          }}
          className="mobile-drawer"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--color-border-strong)' : 'transparent',
                    backgroundColor: isActive ? 'var(--color-surface-subtle)' : 'transparent',
                    color: isActive ? 'var(--color-primary)' : 'var(--color-text)',
                    fontWeight: isActive ? 700 : 500,
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontSize: '1rem',
                  }}
                >
                  <Icon size={18} color={isActive ? 'var(--color-accent)' : 'var(--color-text-secondary)'} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-controls {
            display: none !important;
          }
          .mobile-drawer {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
