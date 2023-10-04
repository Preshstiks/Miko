import React, { useState } from "react";
import { Box, Text, SimpleGrid, Link, Button, Icon } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlinePlus, AiOutlineMenu } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/router";

const routes = [
  {
    link: "home",
    text: "Home",
  },
  {
    link: "services",
    text: "Services",
  },
  {
    link: "work",
    text: "Work",
  },
  {
    link: "about",
    text: "About Us",
  },
  // You can add more routes here
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useRouter();

  const handleShow = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Box
      display="flex"
      px="10%"
      alignItems="center"
      py={5}
      justifyContent="space-between"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      bgColor="white"
      borderColor="gray.600"
      boxShadow="xs"
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
        {routes.map((item, index) => (
          <ScrollLink
            key={index}
            to={item.link}
            spy={true}
            smooth={true}
            offset={item.link === "jobs" ? -40 : 0}
            duration={500}
            activeClass="active"
            style={{
              paddingLeft: "10px",
              paddingRight: "10px",
              paddingTop: "8px",
              paddingBottom: "10px",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textDecoration = "underline";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textDecoration = "none";
            }}
          >
            {item.text}
          </ScrollLink>
        ))}
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
              {routes.map((item, index) => (
                <Box key={index} px={4} py={3} textAlign="center">
                  <ScrollLink
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={item.link === "jobs" ? -40 : 0}
                    duration={500}
                    activeClass="active"
                    style={{
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "8px",
                      paddingBottom: "10px",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.textDecoration = "underline";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.textDecoration = "none";
                    }}
                  >
                    {item.text}
                  </ScrollLink>
                </Box>
              ))}
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
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
