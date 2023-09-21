import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { BsQuote } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, useAnimation } from "framer-motion";
import { motion } from "framer-motion";
const Testimonials = () => {
  return (
    <Box px="10%">
      <Box>
        <Heading textAlign="center" pb={20}>
          What says people
        </Heading>
        <Flex gap={5}>
          <Box borderColor="gray.600" boxShadow="xs" p="20px">
            <Icon as={BsQuote} w={8} h={8} />
            <Text>
              Miko design agency create outstanding works for his clients. Most
              of their designers are creative, and they are doing very good work
              for any projects delivered.
            </Text>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              pt={5}
            >
              <Box>
                <Heading fontSize={20}>Markus alina</Heading>
                <Text>Content creator</Text>
              </Box>
              <Box>
                <Icon as={AiFillStar} color="orange.300" w={5} h={5} />
                <Icon as={AiFillStar} color="orange.300" w={5} h={5} />
                <Icon as={AiFillStar} color="orange.300" w={5} h={5} />
                <Icon as={AiFillStar} color="orange.300" w={5} h={5} />
                <Icon as={AiFillStar} color="orange.300" w={5} h={5} />
              </Box>
            </Box>
          </Box>
          <Box borderColor="gray.600" boxShadow="xs" p="20px">
            <Icon as={BsQuote} w={8} h={8} />
            <Text>
              Miko design agency create outstanding works for his clients. Most
              of their designers are creative, and they are doing very good work
              for any projects delivered.
            </Text>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              pt={5}
            >
              <Box>
                <Heading fontSize={20}>Amerigo john</Heading>
                <Text>Brand designer</Text>
              </Box>
              <Box>
                <Icon as={AiFillStar} color="orange.300" w={5} h={5} />
                <Icon as={AiFillStar} color="orange.300" w={5} h={5} />
                <Icon as={AiFillStar} color="orange.300" w={5} h={5} />
                <Icon as={AiFillStar} color="orange.300" w={5} h={5} />
                <Icon as={AiFillStar} color="orange.300" w={5} h={5} />
              </Box>
            </Box>
          </Box>
          <Box borderColor="gray.600" boxShadow="xs" p="20px">
            <Icon as={BsQuote} w={8} h={8} />
            <Text>
              Miko design agency create outstanding works for his clients. Most
              of their designers are creative, and they are doing very good work
              for any projects delivered.
            </Text>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              pt={5}
            >
              <Box>
                <Heading fontSize={20}>Phillips anthony</Heading>
                <Text>Content creator</Text>
              </Box>
              <Box>
                <Icon as={AiFillStar} color="orange.300" w={5} h={5} />
                <Icon as={AiFillStar} color="orange.300" w={5} h={5} />
                <Icon as={AiFillStar} color="orange.300" w={5} h={5} />
                <Icon as={AiFillStar} color="orange.300" w={5} h={5} />
                <Icon as={AiFillStar} color="orange.300" w={5} h={5} />
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Testimonials;