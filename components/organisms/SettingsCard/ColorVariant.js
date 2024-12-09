'use client';
import SettingsCard from './SettingsCard';
import ThemeButton from '@/components/atoms/ThemeButton/ThemeButton';
import { Palette } from 'lucide-react';

const ColorVariant = ({
  isDarkMode,
  currentTheme,
  mythemes,
  onThemeChange
}) => {
  return (
    <SettingsCard
      variant="color"
      icon={Palette}
      title="Theme Colors"
      isDarkMode={isDarkMode}
      currentTheme={currentTheme}
      className="md:col-span-2"
    >
      <div className="flex gap-3 justify-center">
        {Object.entries(mythemes).map(([theme, colors]) => (
          <ThemeButton
            key={theme}
            theme={theme}
            colors={colors}
            isSelected={currentTheme === theme}
            onClick={() => onThemeChange(theme)}
          />
        ))}
      </div>
    </SettingsCard>
  );
};

export default ColorVariant;
