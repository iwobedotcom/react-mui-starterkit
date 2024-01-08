// ** MUI Imports
import { Theme, SxProps } from '@mui/material/styles';

const Tabs = (
  theme: Theme
): {
  MuiTabs?: { styleOverrides?: SxProps<Theme> };
  MuiTab?: { styleOverrides?: SxProps<Theme> };
} => ({
  MuiTabs: {
    styleOverrides: {
      vertical: {
        minWidth: 130,
        marginRight: theme.spacing(4),
        borderRight: `1px solid ${theme.palette.divider}`,
        '& .MuiTab-root': {
          minWidth: 130
        }
      }
    }
  },
  MuiTab: {
    styleOverrides: {
      textColorSecondary: {
        '&.Mui-selected': {
          color: theme.palette.text.secondary
        }
      }
    }
  }
});

export default Tabs;
