'use client';
const Icon = ({ children, isDarkMode, currentTheme, size = 'md' }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  return (
    <div className={`rounded-xl flex items-center justify-center
      ${isDarkMode 
        ? `${mythemes[currentTheme].subtle} text-white` 
        : `${mythemes[currentTheme].subtle} text-gray-900`}
      ${sizes[size]}`}>
      {children}
    </div>
  );
};

export default Icon;
