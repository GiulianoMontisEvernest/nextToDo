import Head from 'next/head';
import Link from 'next/link';

// mui
import { Container, Box, Typography, Paper, Avatar } from '@mui/material';

// components
import Layout from '../src/components/Layout';

// getStaticProps
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
export default function Blog({ posts }) {
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1]}`,
    };
  }

  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <Container>
        <Typography variant="h1" align="center" p={5}>
          Statically generated Blog
        </Typography>
        <Container sx={{ bgcolor: 'lightblue', padding: '1rem' }}>
          {posts.map(({ userId, id, title, body }) => (
            <Paper
              key={`${userId}-${id}`}
              sx={{ padding: '1rem 2rem', marginBottom: '1rem' }}
            >
              <Avatar {...stringAvatar(`UserID: ${userId}`)} />
              <Typography variant="h3" sx={{ pb: '.5rem' }}>
                {title}
              </Typography>
              <Typography component="p" variant="body" sx={{ pb: '1rem' }}>
                {body}
              </Typography>
              <Link href={`/posts/${encodeURIComponent(id)}`} passHref>
                <a>go to this post</a>
              </Link>
            </Paper>
          ))}
        </Container>
      </Container>
    </Layout>
  );
}
