import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import Works from "./components/Works";
import AboutUs from "./components/About Us";
import Testimonials from "./components/Testimonials";
import TrustedCompany from "./components/TrustedCompany";
export default function Home() {
  return (
    <>
      <Head>
        <title>Landing Page</title>
      </Head>
      <Box>
        <Navbar />
        <Header />
        <Services />
        <Works />
        <AboutUs />
        <Testimonials />
        <TrustedCompany />
      </Box>
    </>
  );
}
