import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>Henrique Kenji</title>
      </Head>
      <Header />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
