// ** MUI Imports
import { Theme, SxProps } from '@mui/material/styles';

const Rating = (theme: Theme): { MuiRating?: { styleOverrides?: SxProps<Theme> } } => ({
  MuiRating: {
    styleOverrides: {
      root: {
        color: theme.palette.warning.main
      }
    }
  }
});

export default Rating;
