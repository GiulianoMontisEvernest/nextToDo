import Head from 'next/head';
import Image from 'next/image';

// mui
import { Typography } from '@mui/material';

// mui icons

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Typography variant="h1">toDo stuff</Typography>
      </main>
    </div>
  );
}
