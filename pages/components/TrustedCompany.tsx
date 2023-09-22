import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";

const TrustedCompany = () => {
  return (
    <Box px="10%" py="150px">
      <Heading pb={10}>Trusted our company</Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} gap={3}>
        <Box
          p={7}
          style={{
            border: "2px solid #CBD5E0",
          }}
          w="180px"
          h="110px"
          borderRadius={7}
          display="flex"
          alignContent="center"
          justifyItems="center"
        >
          <Heading fontSize="33px" color="gray.400">
            connex
          </Heading>
        </Box>
        <Box
          p={7}
          style={{
            border: "2px solid #CBD5E0",
          }}
          w="180px"
          h="110px"
          borderRadius={7}
          display="flex"
          alignContent="center"
          justifyItems="center"
        >
          <Heading fontSize="33px" color="gray.400">
            FRAP
          </Heading>
        </Box>
        <Box
          p={7}
          style={{
            border: "2px solid #CBD5E0",
          }}
          w="180px"
          h="110px"
          borderRadius={7}
          display="flex"
          alignContent="center"
          justifyItems="center"
        >
          <Heading fontWeight={600} fontSize="30px" color="gray.400">
            logstash
          </Heading>
        </Box>
        <Box
          p={7}
          style={{
            border: "2px solid #CBD5E0",
          }}
          w="180px"
          h="110px"
          borderRadius={7}
          display="flex"
          alignContent="center"
          justifyItems="center"
        >
          <Heading color="gray.400">LOGW</Heading>
        </Box>
        <Box
          p={7}
          style={{
            border: "2px solid #CBD5E0",
          }}
          w="180px"
          h="110px"
          borderRadius={7}
          display="flex"
          alignContent="center"
          justifyItems="center"
        >
          <Heading fontWeight={700} color="gray.400">
            TURK
          </Heading>
        </Box>
        <Box
          p={7}
          style={{
            border: "2px solid #CBD5E0",
          }}
          w="180px"
          h="110px"
          borderRadius={7}
          display="flex"
          alignContent="center"
          justifyItems="center"
        >
          <Heading fontWeight={600} color="gray.400">
            CAREC
          </Heading>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default TrustedCompany;
