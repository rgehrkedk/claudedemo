'use client';
import SettingsCard from './SettingsCard';
import DisplaySwitch from '@/components/molecules/DisplaySwitch/DisplaySwitch';
import { Sun } from 'lucide-react';

const DisplayVariant = ({
  isDarkMode,
  onToggle,
  currentTheme,
  themes
}) => {
  return (
    <SettingsCard
      variant="display"
      icon={Sun}
      title="Display Mode"
      isDarkMode={isDarkMode}
      currentTheme={currentTheme}
    >
      <DisplaySwitch
        isDarkMode={isDarkMode}
        onToggle={onToggle}
        currentTheme={currentTheme}
        themes={themes}
      />
    </SettingsCard>
  );
};

export default DisplayVariant;
