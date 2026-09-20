import React, { createContext, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'theme-preference';
const ThemeContext = createContext(null);

const getSystemTheme = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const resolveTheme = (preference) =>
  preference === 'system' ? getSystemTheme() : preference;

const getStoredPreference = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark' || stored === 'system') {
      return stored;
    }
  } catch {
    /* ignore */
  }
  return 'system';
};

export const ThemeProvider = ({ children }) => {
  const [preference, setPreference] = useState(getStoredPreference);
  const [resolved, setResolved] = useState(() => resolveTheme(getStoredPreference()));

  useEffect(() => {
    const next = resolveTheme(preference);
    setResolved(next);
    document.documentElement.setAttribute('data-theme', next);
    document.documentElement.setAttribute('data-theme-preference', preference);

    try {
      localStorage.setItem(STORAGE_KEY, preference);
    } catch {
      /* ignore */
    }

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', next === 'dark' ? '#12181e' : '#152028');
    }
  }, [preference]);

  useEffect(() => {
    if (preference !== 'system') {
      return undefined;
    }

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => {
      const next = getSystemTheme();
      setResolved(next);
      document.documentElement.setAttribute('data-theme', next);
    };

    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [preference]);

  const value = {
    preference,
    resolved,
    setPreference,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
