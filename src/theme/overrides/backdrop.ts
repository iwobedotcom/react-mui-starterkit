// ** MUI Imports
import { Theme, SxProps } from '@mui/material/styles';

// ** Util Import
import { hexToRGBA } from '@/utils/hex-to-rgba';

const Backdrop = (theme: Theme): { MuiBackdrop?: { styleOverrides?: SxProps<Theme> } } => ({
  MuiBackdrop: {
    styleOverrides: {
      root: {
        backgroundColor:
          theme.palette.mode === 'light'
            ? `rgba(${theme.palette.customColors.main})`
            : hexToRGBA(theme.palette.background.default, 0.7)
      },
      invisible: {
        backgroundColor: 'transparent'
      }
    }
  }
});

export default Backdrop;
