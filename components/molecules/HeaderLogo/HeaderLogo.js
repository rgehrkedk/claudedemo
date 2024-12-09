'use client';
import Logo from '@/components/atoms/Logo/Logo';

const HeaderLogo = ({ 
  isDarkMode, 
  isScrolled, 
  currentTheme 
}) => {
  return (
    <div className="flex items-center gap-3">
      <Logo 
        isDarkMode={isDarkMode} 
        isScrolled={isScrolled} 
        currentTheme={currentTheme}
      />
      <span className={`font-bold transition-all duration-200
        ${isScrolled ? 'text-base' : 'text-lg'}
        ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        Aether
      </span>
    </div>
  );
};

export default HeaderLogo;
