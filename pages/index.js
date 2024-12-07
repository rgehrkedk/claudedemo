import { useState, useEffect } from 'react';
import { Sun, Moon, Palette, Eye, XCircle } from 'lucide-react';
import Head from 'next/head';

const themes = {
  blue: {
    primary: 'bg-blue-500',
    secondary: 'bg-blue-400',
    accent: 'bg-blue-300',
    subtle: 'bg-blue-500/20',
    hover: 'hover:bg-blue-600'
  },
  purple: {
    primary: 'bg-purple-500',
    secondary: 'bg-purple-400',
    accent: 'bg-purple-300',
    subtle: 'bg-purple-500/20',
    hover: 'hover:bg-purple-600'
  },
  teal: {
    primary: 'bg-teal-500',
    secondary: 'bg-teal-400',
    accent: 'bg-teal-300',
    subtle: 'bg-teal-500/20',
    hover: 'hover:bg-teal-600'
  }
};

const Header = ({ isDarkMode, isScrolled, currentTheme }) => (
  <header className={`sticky top-0 z-50 ${isDarkMode ? 'bg-gray-900/80' : 'bg-gray-50/80'} 
    backdrop-blur-lg border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      <div className={`flex items-center gap-3 transition-all duration-200
        ${isScrolled ? 'py-2' : 'py-3'}`}>
        <div className={`transition-all duration-200
          ${isScrolled ? 'w-8 h-8' : 'w-9 h-9'} 
          rounded-xl ${isDarkMode ? 'bg-white' : 'bg-gray-900'} 
          flex items-center justify-center relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-90 mix-blend-overlay">
            <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-500`}/>
          </div>
          <span className={`text-lg font-bold relative z-10 ${isDarkMode ? 'text-gray-900' : 'text-white'}`}>
            A
          </span>
        </div>
        <span className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Aether
        </span>
      </div>
    </div>
  </header>
);

const IconBackground = ({ children, isDarkMode, currentTheme }) => (
  <div className={`w-10 h-10 rounded-xl flex items-center justify-center
    ${isDarkMode 
      ? `${themes[currentTheme].subtle} text-white` 
      : `${themes[currentTheme].subtle} text-gray-900`}`}>
    {children}
  </div>
);

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

  const getCardStyle = () => {
    if (accessibilitySettings.highContrast) {
      return isDarkMode 
        ? 'bg-black border-2 border-white' 
        : 'bg-white border-2 border-black';
    }
    if (accessibilitySettings.disableEffects) {
      return isDarkMode 
        ? 'bg-gray-800 border border-gray-700' 
        : 'bg-white border border-gray-200';
    }
    return isDarkMode 
      ? 'bg-gray-800/40 backdrop-blur-xl' 
      : 'bg-white/40 backdrop-blur-xl';
  };

  return (
    <>
      <Head>
        <title>Aether Theme Switcher</title>
        <meta name="description" content="Modern theme switcher with accessibility options" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`min-h-screen w-full relative ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} 
        transition-colors duration-500`}>
        
        <Header isDarkMode={isDarkMode} isScrolled={isScrolled} currentTheme={currentTheme} />
        
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

            {/* Settings Cards Container */}
            <div className="grid md:grid-cols-2 gap-3 md:gap-4">
              {/* Display Mode Card */}
              <div className={`rounded-xl shadow-sm ${getCardStyle()} p-5`}>
                <div className="flex items-center mb-6">
                  <IconBackground isDarkMode={isDarkMode} currentTheme={currentTheme}>
                    <Sun className="w-5 h-5" />
                  </IconBackground>
                  <h2 className={`text-lg font-semibold ml-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Display Mode
                  </h2>
                </div>
                
                <div className="flex justify-center">
                  <div className={`flex rounded-xl bg-gray-100/10 p-1 gap-2
                    ${isDarkMode ? 'ring-1 ring-gray-700' : 'ring-1 ring-gray-200'}`}>
                    <button
                      onClick={() => setIsDarkMode(false)}
                      className={`px-5 py-2 rounded-lg flex items-center gap-2 transition-all
                        ${!isDarkMode 
                          ? `${themes[currentTheme].primary} text-white shadow-sm` 
                          : 'text-gray-400 hover:bg-gray-100/10'}`}
                    >
                      <Sun className="w-4 h-4" />
                      Light
                    </button>
                    <button
                      onClick={() => setIsDarkMode(true)}
                      className={`px-5 py-2 rounded-lg flex items-center gap-2 transition-all
                        ${isDarkMode 
                          ? `${themes[currentTheme].primary} text-white shadow-sm` 
                          : 'text-gray-400 hover:bg-gray-100/10'}`}
                    >
                      <Moon className="w-4 h-4" />
                      Dark
                    </button>
                  </div>
                </div>
              </div>

              {/* Accessibility Settings Card */}
              <div className={`rounded-xl shadow-sm ${getCardStyle()} p-5`}>
                <div className="flex items-center mb-6">
                  <IconBackground isDarkMode={isDarkMode} currentTheme={currentTheme}>
                    <Eye className="w-5 h-5" />
                  </IconBackground>
                  <h2 className={`text-lg font-semibold ml-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Accessibility
                  </h2>
                </div>

                <div className="space-y-4">
                  {[
                    { key: 'highContrast', icon: Eye, label: 'High Contrast' },
                    { key: 'disableEffects', icon: XCircle, label: 'Disable Effects' }
                  ].map(({ key, icon: Icon, label }) => (
                    <div key={key} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon className={`w-4 h-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                        <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {label}
                        </span>
                      </div>
                      <button
                        onClick={() => setAccessibilitySettings(prev => ({ ...prev, [key]: !prev[key] }))}
                        className={`w-11 h-6 rounded-full relative transition-all duration-200 
                          ${accessibilitySettings[key] 
                            ? themes[currentTheme].primary
                            : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`}
                      >
                        <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm
                          transition-all duration-200 ${accessibilitySettings[key] ? 'left-6' : 'left-1'}`} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Theme Colors Card */}
              <div className={`rounded-xl shadow-sm ${getCardStyle()} p-5 md:col-span-2`}>
                <div className="flex items-center mb-6">
                  <IconBackground isDarkMode={isDarkMode} currentTheme={currentTheme}>
                    <Palette className="w-5 h-5" />
                  </IconBackground>
                  <h2 className={`text-lg font-semibold ml-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Theme Colors
                  </h2>
                </div>
                
                <div className="flex gap-3 justify-center">
                  {Object.entries(themes).map(([theme, colors]) => (
                    <button
                      key={theme}
                      onClick={() => setCurrentTheme(theme)}
                      className={`group relative w-14 h-14 rounded-lg transition-transform 
                        ${colors.primary} ${currentTheme === theme ? 'scale-110 ring-2 ring-offset-2' : 'hover:scale-105'}`}
                      aria-label={`Select ${theme} theme`}
                    >
                      <div className={`absolute inset-0 rounded-lg ${colors.secondary} opacity-0 
                        group-hover:opacity-50 transition-opacity`} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="mt-8">
              <button 
                className={`w-full py-3 rounded-lg text-white text-base font-semibold
                  ${themes[currentTheme].primary} hover:opacity-90 transition-opacity`}>
                Get Started
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
