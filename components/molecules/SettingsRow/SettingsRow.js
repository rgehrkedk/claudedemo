import Switch from '@/components/atoms/Switch/Switch';

const SettingsRow = ({ 
  icon: Icon,
  label, 
  isActive, 
  onChange,
  isDarkMode,
  currentTheme 
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Icon className={`w-4 h-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
        <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {label}
        </span>
      </div>
      <Switch
        isActive={isActive}
        onChange={onChange}
        currentTheme={currentTheme}
        isDarkMode={isDarkMode}
      />
    </div>
  );
};

export default SettingsRow;
