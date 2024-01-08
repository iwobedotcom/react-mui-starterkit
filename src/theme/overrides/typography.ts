// ** MUI Imports
import { Theme, SxProps } from '@mui/material/styles';

const Typography = (theme: Theme): { MuiTypography?: { styleOverrides?: SxProps<Theme> } } => ({
  MuiTypography: {
    styleOverrides: {
      gutterBottom: {
        marginBottom: theme.spacing(2)
      }
    }
  }
});

export default Typography;
