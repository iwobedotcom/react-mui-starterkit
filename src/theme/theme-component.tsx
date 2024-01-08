/* eslint-disable @typescript-eslint/no-explicit-any */
// ** MUI Imports
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';

// ** Type Imports
import { SettingsType } from '@/types';
// ** Theme Config
import themeConfig from '@/configs/theme.config';

// ** Theme Override Imports
import overrides from './overrides';
import typography from './typography';
// ** Theme
import themeOptions from './theme-options';
// ** Global Styles
import GlobalStyling from './globalStyles';

interface Props {
  settings: SettingsType;
  children: React.ReactNode;
}

const ThemeComponent = (props: Props): React.ReactElement => {
  // ** Props
  const { settings, children } = props;

  // ** Merged ThemeOptions of Core and User
  const coreThemeConfig = themeOptions(settings);

  // eslint-disable-next-line max-len
  // ** Pass ThemeOptions to CreateTheme Function to create partial theme without component overrides
  let theme = createTheme(coreThemeConfig);

  // ** Continue theme creation and pass merged component overrides to CreateTheme function
  theme = createTheme(theme, {
    components: { ...overrides(theme) },
    typography: { ...typography(theme) },
  });

  // ** Set responsive font sizes to true
  if (themeConfig.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={() => GlobalStyling(theme) as any} />
      {children}
    </ThemeProvider>
  );
};

export default ThemeComponent;
