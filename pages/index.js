'use client';

import { useState, useEffect } from 'react';
import SettingsLayout from '../components/templates/SettingsLayout/SettingsLayout';
import { mythemes } from '../utils/mythemes';

console.log('mythemes:', mythemes);  // Check if mythemes is imported correctly

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('blue');
  const [isScrolled, setIsScrolled] = useState(false);
  const [accessibilitySettings, setAccessibilitySettings] = useState({
    highContrast: false,
    disableEffects: false
  });

  // Handle scroll effects
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Event handlers
  const handleDarkModeToggle = (value) => {
    setIsDarkMode(value);
  };

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
  };

  const handleSettingChange = (key) => {
    setAccessibilitySettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleGetStarted = () => {
    // Add your navigation or action logic here
    console.log('Get Started clicked');
  };

  return (
    <SettingsLayout
      isDarkMode={isDarkMode}
      isScrolled={isScrolled}
      currentTheme={currentTheme}
      mythemes={mythemes}
      accessibilitySettings={accessibilitySettings}
      onDarkModeToggle={handleDarkModeToggle}
      onThemeChange={handleThemeChange}
      onSettingChange={handleSettingChange}
      onGetStarted={handleGetStarted}
    />
  );
}
