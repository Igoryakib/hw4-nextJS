import Head from "next/head";
import Header from "./Header";
const MainContainer = ({ children }) => {
  return (
    <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Search-movies-nextJS</title>
    </Head>
    <Header />
    {children}
    </>
  );
};

export default MainContainer;
