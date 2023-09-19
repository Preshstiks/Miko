import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Head>
        <title>Landing Page</title>
      </Head>
      <main>
        <Box>
          <Navbar />
          <Header />
          <Services />
        </Box>
      </main>
    </>
  );
}