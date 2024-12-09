'use client';
import HeaderLogo from '@/components/molecules/HeaderLogo/HeaderLogo';

const Header = ({ isDarkMode, isScrolled, currentTheme }) => {
  return (
    <header className={`sticky top-0 z-50 ${isDarkMode ? 'bg-gray-900/80' : 'bg-gray-50/80'} 
      backdrop-blur-lg border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className={`transition-all duration-200 ${isScrolled ? 'py-2' : 'py-3'}`}>
          <HeaderLogo
            isDarkMode={isDarkMode}
            isScrolled={isScrolled}
            currentTheme={currentTheme}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
