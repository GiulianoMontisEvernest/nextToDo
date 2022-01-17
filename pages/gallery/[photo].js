import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

// mui
import { Container, Box, Typography } from '@mui/material';

// components
import Layout from '../../src/components/Layout';

// getStaticPaths
export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  const photos = await res.json();
  const paths = photos
    .splice(0, 10)
    .map((photo) => ({ params: { photo: `${photo.id}` } }));

  return {
    paths,
    fallback: false,
  };
}

// getStaticProps
export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${params.photo}`
  );
  const photo = await res.json();

  return {
    props: {
      photo,
    },
  };
}

export default function Photo({ photo }) {
  return (
    <>
      <Head>
        <title>{`Photo ${photo.id}`}</title>
      </Head>
      <Layout>
        <Container
          sx={{
            p: '1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box>
            <Image
              width={600}
              height={600}
              src={photo.url}
              alt={photo.title}
              layout="intrinsic"
            />
          </Box>
          <Link href={'/gallery'} passHref>
            <a>Back to the gallery</a>
          </Link>
        </Container>
      </Layout>
    </>
  );
}
