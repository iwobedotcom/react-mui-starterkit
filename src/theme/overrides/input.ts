// ** MUI Imports
import { Theme, SxProps } from '@mui/material/styles';

const input = (
  theme: Theme
): {
  MuiInputLabel?: { styleOverrides?: SxProps<Theme> };
  MuiInput?: { styleOverrides?: SxProps<Theme> };
  MuiFilledInput?: { styleOverrides?: SxProps<Theme> };
  MuiOutlinedInput?: { styleOverrides?: SxProps<Theme> };
} => ({
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: theme.palette.text.secondary
      }
    }
  },
  MuiInput: {
    styleOverrides: {
      root: {
        '&:before': {
          borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.22)`
        },
        '&:hover:not(.Mui-disabled):before': {
          borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.32)`
        },
        '&.Mui-disabled:before': {
          borderBottom: `1px solid ${theme.palette.text.disabled}`
        }
      }
    }
  },
  MuiFilledInput: {
    styleOverrides: {
      root: {
        backgroundColor: `rgba(${theme.palette.customColors.main}, 0.04)`,
        '&:hover:not(.Mui-disabled)': {
          backgroundColor: `rgba(${theme.palette.customColors.main}, 0.08)`
        },
        '&:before': {
          borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.22)`
        },
        '&:hover:not(.Mui-disabled):before': {
          borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.32)`
        }
      }
    }
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        '&:hover:not(.Mui-focused) .MuiOutlinedInput-notchedOutline': {
          borderColor: `rgba(${theme.palette.customColors.main}, 0.32)`
        },
        '&:hover.Mui-error .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.error.main
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`
        },
        '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.text.disabled
        }
      }
    }
  }
});

export default input;
