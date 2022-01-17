import Head from 'next/head';
import Link from 'next/link';

// mui
import { Container, Box, Typography, Avatar } from '@mui/material';

// components
import Layout from '../../src/components/Layout';

// getPaths

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  const paths = posts.map((post) => ({
    params: { post: `${post.id}` },
  }));

  return {
    paths,
    fallback: false,
  };
}

// getProps

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.post}`
  );
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

export default function Post({ post }) {
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
        <title>{post.title}</title>
      </Head>
      <Container>
        <Box
          key={`${post.userId}-${post.id}`}
          sx={{ padding: '1rem 2rem', marginBottom: '1rem' }}
        >
          <Avatar {...stringAvatar(`UserID: ${post.userId}`)} />
          <Typography variant="h3" sx={{ pb: '.5rem' }}>
            {post.title}
          </Typography>
          <Typography component="p" variant="body" sx={{ pb: '1rem' }}>
            {post.body}
          </Typography>
          <Link href="/blog" passHref>
            <a>go to all posts</a>
          </Link>
        </Box>
      </Container>
    </Layout>
  );
}
