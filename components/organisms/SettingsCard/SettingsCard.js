import CardHeader from '@/components/molecules/CardHeader/CardHeader';

const SettingsCard = ({ 
  variant,
  icon,
  title,
  isDarkMode,
  currentTheme,
  children,
  className = ''
}) => {
  const getCardStyle = () => {
    if (variant === 'highContrast') {
      return isDarkMode 
        ? 'bg-black border-2 border-white' 
        : 'bg-white border-2 border-black';
    }
    return isDarkMode 
      ? 'bg-gray-800/40 backdrop-blur-xl' 
      : 'bg-white/40 backdrop-blur-xl';
  };

  return (
    <div className={`rounded-xl shadow-sm ${getCardStyle()} p-5 ${className}`}>
      <CardHeader
        icon={icon}
        title={title}
        isDarkMode={isDarkMode}
        currentTheme={currentTheme}
      />
      {children}
    </div>
  );
};

export default SettingsCard;
