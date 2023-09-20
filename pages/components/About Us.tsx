import { Box, Button, Heading, Text } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Box>
      <Box>
        <Box>
          <Heading>Our company is the best all over the world</Heading>
        </Box>
        <Text>
          We are solving a digital problem inside of the websites and apps also
          create a beautiful work project, within a short time we deliver for
          clients.
        </Text>
        <Button
          px={30}
          color="black"
          borderColor="orange.400"
          borderWidth="1.5px"
          borderStyle="solid"
          backgroundColor="white"
          _hover={{
            backgroundColor: "orange.400",
          }}
        >
          About us
        </Button>
      </Box>
      <Box>
        <Box>
          <Heading color="orange.400">10 Years</Heading>
          <Text>Working Experience</Text>
        </Box>
        <Box>
          <Heading color="orange.400">140M+</Heading>
          <Text>Customers all over the world</Text>
        </Box>
        <Box>
          <Heading color="orange.400">300+ Clients</Heading>
          <Text>Completed their works</Text>
        </Box>
        <Box>
          <Heading color="orange.400">1000+</Heading>
          <Text>Satisfied Clients</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
