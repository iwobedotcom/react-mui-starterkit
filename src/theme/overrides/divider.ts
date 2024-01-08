// ** MUI Imports
import { Theme, SxProps } from '@mui/material/styles';

const Divider = (theme: Theme): { MuiDivider?: { styleOverrides?: SxProps<Theme> } } => ({
  MuiDivider: {
    styleOverrides: {
      root: {
        margin: `${theme.spacing(2)} 0`
      }
    }
  }
});

export default Divider;
