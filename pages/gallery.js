import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// mui
import {
  Container,
  Typography,
  Box,
  ImageList,
  ImageListItem,
} from '@mui/material';

// components
import Layout from '../src/components/Layout';

// getStaticProps
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  const data = await res.json();
  const photos = await data.splice(0, 10);

  return {
    props: {
      photos,
    },
  };
}

const Gallery = ({ photos }) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Gallery</title>
        </Head>
        <Container
          sx={{
            flexGrow: 1,
            padding: 3,
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h1" align="center" pb={3}>
            Statically rendered Gallery
          </Typography>
          <Typography variant="h4" align="center" pb={3}>
            with dynamic paths to redirect to each photo page
          </Typography>
          <Typography variant="h6" align="center" pb={5}>
            Click on any photo below the get redirected to the photo page
          </Typography>
          <Box sx={{ width: '80%', bgcolor: 'white' }}>
            <ImageList variant="masonry" cols={3} gap={8}>
              {photos &&
                photos.map((photo) => (
                  <ImageListItem key={photo.id} sx={{ position: 'relative' }}>
                    <Link href={`/gallery/${photo.id}`} passHref>
                      <a>
                        <Image
                          width={600}
                          height={600}
                          src={photo.url}
                          alt={photo.title}
                        />
                      </a>
                    </Link>
                  </ImageListItem>
                ))}
            </ImageList>

            {/* 
              <Image
                loader={myLoader}
                src={fetchedData.url}
                alt={fetchedData.title}
                layout="fill"
                loading="lazy"
              />
            */}
          </Box>
        </Container>
      </Layout>
    </>
  );
};

export default Gallery;
