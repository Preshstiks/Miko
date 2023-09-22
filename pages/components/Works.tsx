import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const Works = () => {
  return (
    <Box py="100px" bgColor="orange.50">
      <Box px="10%">
        <Heading fontWeight={600} pb="35px" textAlign="center" fontSize={30}>
          Latest work of agency
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
          <motion.div initial={{ opacity: 1 }} whileTap={{ scale: 0.95 }}>
            <Box
              position="relative"
              overflow="hidden"
              borderRadius="md"
              _hover={{
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 1,
                  opacity: 1,
                  transition: "opacity 0.3s",
                },
              }}
            >
              <Image
                src="https://cdn.dribbble.com/userupload/10204724/file/original-d5b1ba6b056e7f899ceb8f33eae6945e.png?resize=2048x1536"
                w={700}
                alt="img"
              />
              <Box
                className="image-overlay"
                position="absolute"
                w="100%"
                h="100%"
                top="0"
                left="0"
                zIndex="3"
                color="white"
                opacity={0}
                _hover={{
                  opacity: 1,
                }}
                pl={7}
                pt={7}
                transition="opacity 0.3s"
              >
                <Heading as="h3" fontSize="24px" fontWeight="bold" mb="1rem">
                  Project 1
                </Heading>
                <Text>Description for Project 1</Text>
                <Link href="https://unsplash.com/">View</Link>
              </Box>
            </Box>
          </motion.div>
          <motion.div
            // whileHover={{ scale: 1.05 }}
            initial={{ opacity: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Box
              position="relative"
              overflow="hidden"
              borderRadius="md"
              _hover={{
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 1,
                  opacity: 1,
                  transition: "opacity 0.3s",
                },
              }}
            >
              <Image
                src="https://cdn.dribbble.com/userupload/10197479/file/original-0f5cac8c4e668443967ee0e50fdbcac6.png?resize=2048x1536"
                w={700}
                alt="img"
              />
              <Box
                className="image-overlay"
                position="absolute"
                w="100%"
                h="100%"
                top="0"
                left="0"
                zIndex="3"
                color="white"
                opacity={0}
                _hover={{
                  opacity: 1,
                }}
                pl={7}
                pt={7}
                transition="opacity 0.3s"
              >
                <Heading as="h3" fontSize="24px" fontWeight="bold" mb="1rem">
                  Project 2
                </Heading>
                <Text>Description for Project 2</Text>
                <Link href="https://unsplash.com/">View</Link>
              </Box>
            </Box>
          </motion.div>
          <motion.div initial={{ opacity: 1 }} whileTap={{ scale: 0.95 }}>
            <Box
              position="relative"
              overflow="hidden"
              borderRadius="md"
              _hover={{
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 1,
                  opacity: 1,
                  transition: "opacity 0.3s",
                },
              }}
            >
              <Image
                src="https://cdn.dribbble.com/userupload/10172783/file/original-5a358c07634088cc35ce3f1894a88c51.png?resize=2048x1536"
                w={700}
                alt="img"
              />
              <Box
                className="image-overlay"
                position="absolute"
                w="100%"
                h="100%"
                top="0"
                left="0"
                zIndex="3"
                color="white"
                opacity={0}
                _hover={{
                  opacity: 1,
                }}
                pl={7}
                pt={7}
                transition="opacity 0.3s"
              >
                <Heading as="h3" fontSize="24px" fontWeight="bold" mb="1rem">
                  Project 3
                </Heading>
                <Text>Description for Project 3</Text>
                <Link href="https://unsplash.com/">View</Link>
              </Box>
            </Box>
          </motion.div>
          <motion.div initial={{ opacity: 1 }} whileTap={{ scale: 0.95 }}>
            <Box
              position="relative"
              overflow="hidden"
              borderRadius="md"
              _hover={{
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 1,
                  opacity: 1,
                  transition: "opacity 0.3s",
                },
              }}
            >
              <Image
                src="https://cdn.dribbble.com/userupload/10182826/file/original-684ad28563e7e1ddd16b961a815e22db.jpg?resize=2048x1536"
                w={700}
                alt="img"
              />
              <Box
                className="image-overlay"
                position="absolute"
                w="100%"
                h="100%"
                top="0"
                left="0"
                zIndex="3"
                color="white"
                opacity={0}
                _hover={{
                  opacity: 1,
                }}
                pl={7}
                pt={7}
                transition="opacity 0.3s"
              >
                <Heading as="h3" fontSize="24px" fontWeight="bold" mb="1rem">
                  Project 4
                </Heading>
                <Text>Description for Project 4</Text>
                <Link href="https://unsplash.com/">View</Link>
              </Box>
            </Box>
          </motion.div>
        </SimpleGrid>
        <Flex justifyContent="center" pt="50px">
          <Button
            px={30}
            color="black"
            borderColor="orange.400"
            borderWidth="1.5px"
            borderStyle="solid"
            backgroundColor="white"
            _hover={{
              backgroundColor: "gray.100",
            }}
          >
            View more
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Works;
