import { Box, Flex, HStack, Heading, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import { LuCodesandbox } from "react-icons/lu";
import { TbWorld, TbBrandTelegram } from "react-icons/tb";
import { Icon } from "@chakra-ui/react";
import { BsArrowUpRightCircle } from "react-icons/bs";
// Supports weights 200-900
import "@fontsource-variable/cairo";
const Services = () => {
  return (
    <Box pt="130px" px="10%">
      <Flex gap={40} flexDirection={{ base: "column", md: "row" }}>
        <Box>
          <Box>
            <Heading pb={4} fontWeight={700} fontSize={30}>
              Our Services
            </Heading>
            <Box w={12} h={1} bgColor="black" borderRadius="full"></Box>
          </Box>
          <Box pt={4}>
            <Text>
              There are so many feature in our work we provide our customers our
              great service because of that it is our responsibilities of work.
            </Text>
          </Box>
          <Flex pt="30px" alignItems="center" gap={4}>
            <Image
              style={{ borderRadius: "100%" }}
              src="https://img.freepik.com/free-photo/business-partners-shaking-hands-agreement_53876-25164.jpg?w=740&t=st=1695138898~exp=1695139498~hmac=d8d3b8b88507d43284095bc2e76ced5027770822d505881f4e18810d010fb190"
              width={150}
              height={150}
              alt="img"
            />
            <Box w="50px" h="200px" bgColor="gray.200" borderRadius="50%"></Box>
            <Box w="50px" h="200px" bgColor="gray.200" borderRadius="50%"></Box>
            <Box
              w="50px"
              h="200px"
              borderColor="gray.200"
              boxShadow="xs"
              borderRadius="50%"
            ></Box>
          </Flex>
        </Box>
        <Box>
          <Box>
            <HStack pb={10} spacing={10}>
              <Box
                display="inline-block"
                p={5}
                bgColor="gray.200"
                borderRadius="full"
              >
                <Icon as={LuCodesandbox} w={8} h={8} color="black" />
              </Box>
              <Box>
                <Heading fontWeight="bold" pb={2} fontSize={25}>
                  Brand and Logo Design
                </Heading>
                <Text fontWeight="normal">
                  A brand is a product, service or concept that is publicly
                  distinguished from other products.
                </Text>
              </Box>
            </HStack>
            <HStack pb={10} spacing={10}>
              <Box
                display="inline-block"
                p={5}
                bgColor="gray.200"
                borderRadius="full"
              >
                <Icon as={TbWorld} w={8} h={8} color="black" />
              </Box>
              <Box>
                <Heading fontSize={25} pb={2} fontWeight="bold">
                  Web Design
                </Heading>
                <Text fontWeight="normal">
                  Web design refers to the design of websites that are displayed
                  on the internet. It usually refers to the user experience
                  aspects of the websites.
                </Text>
              </Box>
            </HStack>
            <HStack pb={10} spacing={10}>
              <Box
                display="inline-block"
                p={5}
                bgColor="gray.200"
                borderRadius="full"
              >
                <Icon as={TbBrandTelegram} w={8} h={8} color="black" />
              </Box>
              <Box>
                <Heading fontSize={25} pb={2} fontWeight="bold">
                  Digital Marketing
                </Heading>
                <Text fontWeight="normal">
                  Digital Marketing, also called online marketing, is the
                  promotion of brands to connect with potential customers using
                  the internet.
                </Text>
              </Box>
            </HStack>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Services;
