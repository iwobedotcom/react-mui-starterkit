import { Theme } from '@mui/material/styles';

interface TypographyStyles {
  h1: React.CSSProperties;
  h2: React.CSSProperties;
  h3: React.CSSProperties;
  h4: React.CSSProperties;
  h5: React.CSSProperties;
  h6: React.CSSProperties;
  subtitle1: React.CSSProperties;
  subtitle2: React.CSSProperties;
  body1: React.CSSProperties;
  body2: React.CSSProperties;
  button: React.CSSProperties;
  caption: React.CSSProperties;
  overline: React.CSSProperties;
}

const Typography = (theme: Theme): TypographyStyles => ({
  h1: {
    fontWeight: 500,
    letterSpacing: '-1.5px',
    color: theme.palette.text.primary,
  },
  h2: {
    fontWeight: 500,
    letterSpacing: '-0.5px',
    color: theme.palette.text.primary,
  },
  h3: {
    fontWeight: 500,
    letterSpacing: 0,
    color: theme.palette.text.primary,
  },
  h4: {
    fontWeight: 500,
    letterSpacing: '0.25px',
    color: theme.palette.text.primary,
  },
  h5: {
    fontWeight: 500,
    letterSpacing: 0,
    color: theme.palette.text.primary,
  },
  h6: {
    letterSpacing: '0.15px',
    color: theme.palette.text.primary,
  },
  subtitle1: {
    letterSpacing: '0.15px',
    color: theme.palette.text.primary,
  },
  subtitle2: {
    letterSpacing: '0.1px',
    color: theme.palette.text.secondary,
  },
  body1: {
    letterSpacing: '0.15px',
    color: theme.palette.text.primary,
  },
  body2: {
    lineHeight: 1.5,
    letterSpacing: '0.15px',
    color: theme.palette.text.secondary,
  },
  button: {
    letterSpacing: '0.3px',
    color: theme.palette.text.primary,
  },
  caption: {
    letterSpacing: '0.4px',
    color: theme.palette.text.secondary,
  },
  overline: {
    letterSpacing: '1px',
    color: theme.palette.text.secondary,
  },
});

export default Typography;
