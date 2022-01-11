import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="simple todo app to learn next.js" />
      </Head>
      <header>navigation</header>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
