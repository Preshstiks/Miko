import { Box, Button, Heading, Icon, Text } from "@chakra-ui/react";
import { FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <Box bgColor="blackAlpha.800" px="10%">
      <Box>
        <Box>
          <Box p="25px"></Box>
          <Box bgColor="gray.200" p="60px" borderRadius="lg">
            <Heading textAlign="center" fontSize={40}>
              Let's build &#38; create
            </Heading>
            <Heading textAlign="center" fontSize={40}>
              your projects with us.
            </Heading>
            <Box display="flex" justifyContent="center" pt={10}>
              <Button
                _hover={{
                  backgroundColor: "orange.300",
                }}
                fontWeight={700}
                px={30}
                color="white"
                bgColor="orange.400"
              >
                Contact
              </Button>
            </Box>
          </Box>
          <Box py="100px" display="flex" justifyContent="space-between">
            <Box>
              <Heading color="gray.200">Miko</Heading>
              <Text color="gray.200" w="60%">
                We are solving a digital problem inside of the website and apps
                also create a project.
              </Text>

              <Box display="flex" gap={1} pt={8}>
                <Box
                  style={{
                    border: "1px solid #E2E8F0",
                  }}
                  display="flex"
                  borderRadius="100%"
                  w="40px"
                  h="40px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Icon as={FiTwitter} color="gray.200" w={4} h={4} />
                </Box>
                <Box
                  style={{
                    border: "1px solid #E2E8F0",
                  }}
                  display="flex"
                  borderRadius="100%"
                  w="40px"
                  h="40px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Icon as={FiFacebook} color="gray.200" w={4} h={4} />
                </Box>
                <Box
                  style={{
                    border: "1px solid #E2E8F0",
                  }}
                  display="flex"
                  borderRadius="100%"
                  w="40px"
                  h="40px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Icon as={FiInstagram} color="gray.200" w={4} h={4} />
                </Box>
                <Box
                  style={{
                    border: "1px solid #E2E8F0",
                  }}
                  display="flex"
                  borderRadius="100%"
                  w="40px"
                  h="40px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Icon as={FiLinkedin} color="gray.200" w={4} h={4} />
                </Box>
              </Box>
            </Box>
            <Box color="gray.200">
              <Text>Home</Text>
              <Text>About us</Text>
              <Text>Services</Text>
              <Text>Project</Text>
              <Text>Blogs</Text>
              <Text>Product</Text>
            </Box>
            <Box color="gray.200">
              <Text>Graphic design</Text>
              <Text>Developments</Text>
              <Text>Marketing</Text>
              <Text>Web design</Text>
              <Text>Branding</Text>
              <Text>UX research</Text>
            </Box>
            <Box color="gray.200">
              <Text>Logo design</Text>
              <Text>Motion graphics</Text>
              <Text>Animation</Text>
              <Text>Feature</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
