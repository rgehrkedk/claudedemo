import SettingsCard from './SettingsCard';
import SettingsRow from '@/components/molecules/SettingsRow/SettingsRow';
import { Eye, XCircle } from 'lucide-react';

const AccessibilityVariant = ({
  isDarkMode,
  currentTheme,
  settings,
  onSettingChange
}) => {
  const settingsConfig = [
    { key: 'highContrast', icon: Eye, label: 'High Contrast' },
    { key: 'disableEffects', icon: XCircle, label: 'Disable Effects' }
  ];

  return (
    <SettingsCard
      variant="accessibility"
      icon={Eye}
      title="Accessibility"
      isDarkMode={isDarkMode}
      currentTheme={currentTheme}
    >
      <div className="space-y-4">
        {settingsConfig.map(({ key, icon, label }) => (
          <SettingsRow
            key={key}
            icon={icon}
            label={label}
            isActive={settings[key]}
            onChange={() => onSettingChange(key)}
            isDarkMode={isDarkMode}
            currentTheme={currentTheme}
          />
        ))}
      </div>
    </SettingsCard>
  );
};

export default AccessibilityVariant;
