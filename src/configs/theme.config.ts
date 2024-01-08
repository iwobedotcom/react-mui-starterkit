import { PaletteMode } from '@mui/material';

import { metadata } from './metadata.config';

type ContentWidthProps = 'full' | 'boxed';

interface ThemeConfigProps {
  mode: PaletteMode;
  applicationName: string;
  routingLoader: boolean;
  disableRipple: boolean;
  navigationSize: number;
  menuTextTruncate: boolean;
  contentWidth: ContentWidthProps;
  responsiveFontSizes: boolean;
}

const themeConfig: ThemeConfigProps = {
  // ** Layout Configs
  applicationName: metadata.applicationName,
  mode: 'light' /* light | dark */,
  contentWidth: 'boxed' /* full | boxed */,

  // ** Routing Configs
  routingLoader: true,

  // ** Navigation (Menu) Configs
  menuTextTruncate: true /* true | false */,
  // eslint-disable-next-line max-len
  navigationSize: 260 /* Number in PX(Pixels) /*! Note: This is for Vertical navigation menu only */,

  // ** Other Configs
  responsiveFontSizes: true /* true | false */,
  disableRipple: false /* true | false */,
};

export default themeConfig;
