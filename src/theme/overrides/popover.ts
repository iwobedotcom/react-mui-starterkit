// ** MUI Imports
import { Theme, SxProps } from '@mui/material/styles';

const Popover = (theme: Theme): { MuiPopover?: { styleOverrides?: SxProps<Theme> } } => ({
  MuiPopover: {
    styleOverrides: {
      root: {
        '& .MuiPopover-paper': {
          boxShadow: theme.shadows[6]
        }
      }
    }
  }
});

export default Popover;
