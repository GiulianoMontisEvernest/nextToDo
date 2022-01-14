import { useState, useContext } from 'react';
import Head from 'next/head';
import { appContext } from '../src/context/context';
import { ADD_LIST, REMOVE_LIST } from '../src/context/actions';

// mui
import { Container, Grid, Typography } from '@mui/material';

// components
import Layout from '../src/components/Layout';
import { StyledList } from '../src/components/StyledList/StyledList';
import { AddLists } from '../src/components/AddList/AddLists';

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
        <Container sx={{ flexGrow: 1, padding: 3, minHeight: '100vh' }}>
          <Grid container>
            <AddLists
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              setListTitle={setListTitle}
              listTitle={listTitle}
            />
            <Grid item xs={12} md={8} sx={{ p: 3, justifyContent: 'center' }}>
              <Typography variant="h4" align="center">
                Your lists
              </Typography>
              <Grid
                container
                gap={2}
                sx={{ padding: 3, justifyContent: 'center' }}
              >
                {appState.map((list) => {
                  return <StyledList key={list.listID} {...list} />;
                })}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  );
};

export default Dashboard;
