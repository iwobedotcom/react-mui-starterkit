// ** MUI Imports
import { Theme, SxProps } from '@mui/material/styles';

const Snackbar = (theme: Theme): { MuiSnackbarContent?: { styleOverrides?: SxProps<Theme> } } => ({
  MuiSnackbarContent: {
    styleOverrides: {
      root: {
        backgroundColor:
          theme.palette.mode === 'light' ? theme.palette.grey[900] : theme.palette.grey[100]
      }
    }
  }
});

export default Snackbar;
