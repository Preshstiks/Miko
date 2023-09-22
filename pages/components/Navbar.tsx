import { Box, Button, Icon, SimpleGrid, Link, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShow = () => {
    setShowMenu(!showMenu);
  };
  return (
    <Box
      // display={{ md: "flex", base: "block" }}
      display="flex"
      px="10%"
      alignItems="center"
      position="relative"
      pt={10}
      justifyContent="space-between"
    >
      <Box>
        <Text fontWeight={700} fontSize={32}>
          Miko
        </Text>
      </Box>
      <SimpleGrid
        display={{ md: "block", base: "none" }}
        columns={4}
        spacing={2}
      >
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
      <Box onClick={handleShow} display={{ base: "block", md: "none" }}>
        {showMenu ? (
          <Icon
            as={AiOutlinePlus}
            style={{
              transform: "rotate(45deg)",
            }}
            w={7}
            h={7}
          />
        ) : (
          <Icon as={AiOutlineMenu} w={7} h={7} />
        )}
      </Box>
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            style={{
              position: "absolute",
              top: "100px",
              left: "0",
              right: "0",
              bottom: "0",
              marginLeft: "10%",
              marginRight: "10%",
            }}
          >
            <Box
              display={{ md: "none", base: "block" }}
              p={5}
              w="100%"
              bgColor="orange.400"
            >
              <Box px={4} py={3} textAlign="center">
                <Link href="#">Home</Link>
              </Box>
              <Box px={4} py={3} textAlign="center">
                <Link href="#">Services</Link>
              </Box>
              <Box px={4} py={3} textAlign="center">
                <Link href="#">Work</Link>
              </Box>
              <Box px={4} py={3} textAlign="center">
                <Link href="#">About us</Link>
              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
      {/* <Box>
       
      </Box> */}
      <Box display={{ base: "none", md: "block" }}>
        <Button
          _hover={{
            backgroundColor: "orange.300",
          }}
          px={30}
          color="white"
          bgColor="orange.400"
        >
          Contact
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
