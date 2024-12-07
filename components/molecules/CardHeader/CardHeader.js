import Icon from '@/components/atoms/Icon/Icon';

const CardHeader = ({ 
  icon: IconComponent, 
  title, 
  isDarkMode, 
  currentTheme 
}) => {
  return (
    <div className="flex items-center mb-6">
      <Icon isDarkMode={isDarkMode} currentTheme={currentTheme}>
        <IconComponent className="w-5 h-5" />
      </Icon>
      <h2 className={`text-lg font-semibold ml-3 
        ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
    </div>
  );
};

export default CardHeader;
