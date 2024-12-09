'use client';
import Header from '../../organisms/Header/Header';
import DisplayVariant from '../../organisms/SettingsCard/DisplayVariant';
import AccessibilityVariant from '../../organisms/SettingsCard/AccessibilityVariant';
import ColorVariant from '../../organisms/SettingsCard/ColorVariant';
import Button from '../../atoms/Button/Button';

const SettingsLayout = ({
  isDarkMode,
  isScrolled,
  currentTheme,
  mythemes,
  accessibilitySettings,
  onDarkModeToggle,
  onThemeChange,
  onSettingChange,
  onGetStarted
}) => {
  return (
    <div className={`min-h-screen w-full relative ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} 
      transition-colors duration-500`}>
      
      <Header 
        isDarkMode={isDarkMode} 
        isScrolled={isScrolled} 
        currentTheme={currentTheme} 
      />
      
      {/* Background Effects */}
      {!accessibilitySettings.disableEffects && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-0 left-0 w-96 h-96 rounded-full 
            ${themes[currentTheme].subtle} blur-3xl -translate-x-1/2 -translate-y-1/2`}/>
          <div className={`absolute top-1/2 right-0 w-96 h-96 rounded-full 
            ${themes[currentTheme].subtle} blur-3xl translate-x-1/2`}/>
          <div className={`absolute bottom-0 left-1/3 w-96 h-96 rounded-full 
            ${themes[currentTheme].subtle} blur-3xl`}/>
        </div>
      )}

      <main className="relative px-4 md:px-8 py-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className={`text-3xl md:text-4xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Make It Your Own
            </h1>
            <p className={`text-base md:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Personalize your experience with custom themes and accessibility options
            </p>
          </div>

          {/* Settings Cards Grid */}
          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            <DisplayVariant
              isDarkMode={isDarkMode}
              onToggle={onDarkModeToggle}
              currentTheme={currentTheme}
              themes={themes}
            />

            <AccessibilityVariant
              isDarkMode={isDarkMode}
              currentTheme={currentTheme}
              settings={accessibilitySettings}
              onSettingChange={onSettingChange}
            />

            <ColorVariant
              isDarkMode={isDarkMode}
              currentTheme={currentTheme}
              themes={themes}
              onThemeChange={onThemeChange}
            />
          </div>

          {/* Action Button */}
          <div className="mt-8">
            <Button
              variant="primary"
              fullWidth
              className={themes[currentTheme].primary}
              onClick={onGetStarted}
            >
              Get Started
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SettingsLayout;
