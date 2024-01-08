// ** React Import
import React from 'react';
// ** ThemeConfig Import
import themeConfig from '@/configs/theme.config';
// ** Types Import
import { SettingsType, SettingsContextValueType } from '@/types';

const initialSettings: SettingsType = {
  themeColor: 'primary',
  mode: themeConfig.mode,
  contentWidth: themeConfig.contentWidth,
};

// ** Create Context
export const SettingsContext = React.createContext<SettingsContextValueType>({
  saveSettings: () => null,
  settings: initialSettings,
});

export const SettingsProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  // ** State
  const [settings, setSettings] = React.useState<SettingsType>({ ...initialSettings });

  const saveSettings = React.useCallback((updatedSettings: SettingsType) => {
    setSettings(updatedSettings);
  }, []); // empty dependency array means this callback won't change

  const memoizedContextValue = React.useMemo(
    () => ({ settings, saveSettings }),
    // eslint-disable-next-line comma-dangle
    [settings, saveSettings]
  );

  return (
    <SettingsContext.Provider value={memoizedContextValue}>{children}</SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;
