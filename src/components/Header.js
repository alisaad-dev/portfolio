import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import './Header.css';

const THEME_OPTIONS = [
  {
    id: 'light',
    label: 'Light',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M12 3v1.5M12 19.5V21M3 12h1.5M19.5 12H21M5.6 5.6l1.1 1.1M17.3 17.3l1.1 1.1M5.6 18.4l1.1-1.1M17.3 6.7l1.1-1.1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 'dark',
    label: 'Dark',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M20 13.5A8.5 8.5 0 1 1 10.5 4 7 7 0 0 0 20 13.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 'system',
    label: 'System',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect
          x="3.5"
          y="4.5"
          width="17"
          height="12"
          rx="1.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M8 20h8M12 16.5V20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const Header = () => {
  const { preference, setPreference } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrollingProgrammatically, setIsScrollingProgrammatically] = useState(false);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      if (isScrollingProgrammatically) {
        return;
      }

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        const sections = ['hero', 'about', 'projects', 'contact'];
        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 72;
        const triggerPoint = window.scrollY + headerHeight + 160;

        let currentSection = 'hero';

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section && triggerPoint >= section.offsetTop) {
            currentSection = sections[i];
            break;
          }
        }

        setActiveSection(currentSection);
      }, 120);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrollingProgrammatically]);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsScrollingProgrammatically(true);

    const element = document.getElementById(sectionId);
    if (element) {
      const header = document.querySelector('.header');
      const headerHeight = header ? header.offsetHeight : 72;
      const offsetPosition = Math.max(
        0,
        element.getBoundingClientRect().top + window.pageYOffset - headerHeight
      );

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });

      setTimeout(() => {
        setIsScrollingProgrammatically(false);
        setActiveSection(sectionId);
      }, 700);
    } else {
      setIsScrollingProgrammatically(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav" aria-label="Primary">
          <button
            type="button"
            className="logo"
            onClick={() => scrollToSection('hero')}
          >
            Ali Saad
          </button>
          <div className="nav-end">
            <ul className="nav-links">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={activeSection === item.id ? 'active' : ''}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div
              className="theme-toggle"
              role="group"
              aria-label="Color theme"
            >
              {THEME_OPTIONS.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  className={`theme-toggle-btn${
                    preference === option.id ? ' active' : ''
                  }`}
                  aria-label={`${option.label} theme`}
                  aria-pressed={preference === option.id}
                  title={option.label}
                  onClick={() => setPreference(option.id)}
                >
                  {option.icon}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
