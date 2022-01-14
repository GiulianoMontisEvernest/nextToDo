import { Grid, Typography, Box, TextField } from '@mui/material';

export const AddLists = ({ handleSubmit, handleChange, listTitle }) => {
  return (
    <Grid item xs={12} md={4} sx={{ p: 3, justifyContent: 'center' }}>
      <Typography variant="h4" align="center">
        Add lists
      </Typography>
      <Box
        component="form"
        sx={{
          width: '100%',
          p: 3,
          display: 'flex',
          justifyContent: 'center',
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="Add list"
          helperText="Please enter the list name"
          variant="standard"
          color="info"
          fullWidth
          onChange={handleChange}
          value={listTitle}
        />
      </Box>
    </Grid>
  );
};
