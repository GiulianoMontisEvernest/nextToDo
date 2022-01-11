import { useState, useContext } from 'react';
import { appContext } from '../src/context/context';
import { ADD_LIST } from '../src/context/actions';
import Head from 'next/head';

// mui
import {
  Container,
  Box,
  Grid,
  Typography,
  TextField,
  listItemSecondaryActionClasses,
} from '@mui/material';
// components
import Layout from '../src/components/Layout';

const Dashboard = () => {
  const { appState, dispatch } = useContext(appContext);

  const [listTitle, setListTitle] = useState('');
  const handleChange = (evt) => setListTitle(evt.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({ type: ADD_LIST, payload: listTitle });
    setListTitle('');
  };

  return (
    <>
      <Layout>
        <Head>
          <title>Dashboard</title>
        </Head>
        <Box sx={{ flexGrow: 1, padding: 3, minHeight: '100vh' }}>
          <Grid container>
            <Grid item xs={12} md={4}>
              <Typography variant="h4" align="center">
                Add lists
              </Typography>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  onChange={handleChange}
                  value={listTitle}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={8} sx={{ bgcolor: 'lightgray' }}>
              <Typography variant="h4" align="center">
                Your lists
              </Typography>
              <Grid
                container
                gap={2}
                sx={{ padding: 3, justifyContent: 'center' }}
              >
                {appState.map(({ listID, listTitle, tasks }) => {
                  return (
                    <Grid key={listID} item xs={5} sx={{ bgcolor: 'yellow' }}>
                      <Typography variant="h4" align="center">
                        {listTitle}
                      </Typography>
                      <Box
                        component="form"
                        sx={{
                          '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          id="outlined-basic"
                          label="Outlined"
                          variant="outlined"
                        />
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </>
  );
};

export default Dashboard;
