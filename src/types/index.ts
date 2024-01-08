/* eslint-disable @typescript-eslint/no-explicit-any */

import { PaletteMode } from '@mui/material';

export type ContentWidthType = 'full' | 'boxed';

export type ThemeColorType = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';

export type SettingsType = {
  mode: PaletteMode;
  themeColor: ThemeColorType;
  contentWidth: ContentWidthType;
};

export type SettingsContextValueType = {
  settings: SettingsType;
  saveSettings: (updatedSettings: SettingsType) => void;
};
