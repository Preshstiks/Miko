import { Box, Button, Text } from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <Box>
        <Text fontSize={32}>Miko</Text>
      </Box>
      <Box>
        <Link href="#">Home</Link>
        <Link href="#">Services</Link>
        <Link href="#">Work</Link>
        <Link href="#">About Us</Link>
      </Box>
      <Box>
        <Button>Contact</Button>
      </Box>
    </div>
  );
};

export default Navbar;
