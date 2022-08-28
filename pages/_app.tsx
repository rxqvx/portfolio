import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Router from "next/router";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    Router.events.on("routeChangeComplete", () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  }, []);
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
