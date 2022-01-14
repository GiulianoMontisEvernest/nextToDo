import { Typography, Box } from '@mui/material';
import { StyledGridItem, StyledTextField } from './styled';

export const StyledList = ({ listID, listTitle, tasks }) => {
  return (
    <StyledGridItem item xs={5}>
      <Typography variant="h4" align="center">
        {listTitle}
      </Typography>
      <hr />
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          display: 'flex',
          justifyContent: 'center',
        }}
        noValidate
        autoComplete="off"
      >
        <StyledTextField
          id="standard-basic"
          helperText="Please enter the toDo name"
          label="Add tasks"
          variant="standard"
          sx={{
            flex: '1',
          }}
        />
      </Box>
    </StyledGridItem>
  );
};
