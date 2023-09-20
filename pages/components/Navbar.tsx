import { Box, Button, Flex, Link, SimpleGrid, Text } from "@chakra-ui/react";
// import Link from "next/link";

const Navbar = () => {
  return (
    <Flex alignItems="center" pt={10} justifyContent="space-between">
      <Box>
        <Text fontWeight={700} fontSize={32}>
          Miko
        </Text>
      </Box>
      <SimpleGrid columns={4} spacing={2}>
        <Link px={4} py={3} href="#">
          Home
        </Link>
        <Link px={4} py={3} href="#">
          Services
        </Link>
        <Link px={4} py={3} href="#">
          Work
        </Link>
        <Link px={4} py={3} href="#">
          About Us
        </Link>
      </SimpleGrid>
      <Box>
        <Button bgColor="tomato">Contact</Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
