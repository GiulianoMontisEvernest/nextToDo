import { styled, Grid, TextField } from '@mui/material';

export const StyledGridItem = styled(Grid)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  background: theme.palette.info.main,
  borderRadius: '1rem',
  padding: theme.spacing(1),
  // boxShadow: `.3rem .3rem 1.5rem ${theme.palette.info.dark}`,
  boxShadow: theme.shadows[10],
}));

export const StyledTextField = styled(TextField)({
  '& label': {
    color: 'white',
  },
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'pink',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
});
