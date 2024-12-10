console.log('themes:', themes);  // Add at the top of your Home component

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { themes } from '../utils/themes';

// Dynamic import of SettingsLayout with SSR disabled
const SettingsLayout = dynamic(
 () => import('../components/templates/SettingsLayout/SettingsLayout'),
 { ssr: false }
);

// Disable static optimization
export const getInitialProps = () => ({})

export default function Home() {
 const [isDarkMode, setIsDarkMode] = useState(false);
 const [currentTheme, setCurrentTheme] = useState('blue');
 const [isScrolled, setIsScrolled] = useState(false);
 const [accessibilitySettings, setAccessibilitySettings] = useState({
   highContrast: false,
   disableEffects: false
 });

 useEffect(() => {
   if (typeof window !== 'undefined') {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 10);
     };

     window.addEventListener('scroll', handleScroll);
     return () => window.removeEventListener('scroll', handleScroll);
   }
 }, []);

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
   console.log('Get Started clicked');
 };

 return (
   <SettingsLayout
     isDarkMode={isDarkMode}
     isScrolled={isScrolled}
     currentTheme={currentTheme}
     themes={themes}
     accessibilitySettings={accessibilitySettings}
     onDarkModeToggle={handleDarkModeToggle}
     onThemeChange={handleThemeChange}
     onSettingChange={handleSettingChange}
     onGetStarted={handleGetStarted}
   />
 );
}
