'use client';
const ThemeButton = ({ 
  theme, 
  colors, 
  isSelected, 
  onClick 
}) => {
  return (
    <button
      onClick={onClick}
      className={`group relative w-14 h-14 rounded-lg transition-transform 
        ${colors.primary} ${isSelected ? 'scale-110 ring-2 ring-offset-2' : 'hover:scale-105'}`}
      aria-label={`Select ${theme} theme`}
    >
      <div className={`absolute inset-0 rounded-lg ${colors.secondary} opacity-0 
        group-hover:opacity-50 transition-opacity`} />
    </button>
  );
};

export default ThemeButton;
