import { Box, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { LuCodesandbox } from "react-icons/lu";
import { TbWorld, TbBrandTelegram } from "react-icons/tb";
import { Icon } from "@chakra-ui/react";
// Supports weights 200-900
import "@fontsource-variable/cairo";
const Services = () => {
  return (
    <div>
      <Box>
        <Box>
          <Text fontSize={20}>Our Services</Text>
        </Box>
        <Box>
          <Text fontFamily="heading">
            There are so many feature in our work we provide our customers our
            great service because of that it is our responsibilities of work.
          </Text>
        </Box>
        <Box>
          <Image
            style={{ borderRadius: "100%" }}
            src="https://img.freepik.com/free-photo/business-partners-shaking-hands-agreement_53876-25164.jpg?w=740&t=st=1695138898~exp=1695139498~hmac=d8d3b8b88507d43284095bc2e76ced5027770822d505881f4e18810d010fb190"
            width={300}
            height={300}
            alt="img"
          />
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
                <Text fontWeight="bold" pb={2} fontSize={25}>
                  Brand and Logo Design
                </Text>
                <Text fontWeight="normal" w="50%">
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
                <Text fontSize={25} pb={2} fontWeight="semibold">
                  Web Design
                </Text>
                <Text fontWeight="normal" w="50%">
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
                <Text fontSize={25} pb={2} fontWeight="semibold">
                  Digital Marketing
                </Text>
                <Text fontWeight="normal" w="50%">
                  Digital Marketing, also called online marketing, is the
                  promotion of brands to connect with potential customers using
                  the internet.
                </Text>
              </Box>
            </HStack>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Services;
