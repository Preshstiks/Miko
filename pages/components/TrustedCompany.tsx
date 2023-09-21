import { Box, Heading } from "@chakra-ui/react";

const TrustedCompany = () => {
  return (
    <Box px="10%" py="150px">
      <Heading pb={10}>Trusted our company</Heading>
      <Box display="flex" gap={2}>
        <Box
          p={7}
          style={{
            border: "2px solid #CBD5E0",
          }}
          borderRadius={7}
        >
          <Heading color="gray.400">connex</Heading>
        </Box>
        <Box
          p={7}
          style={{
            border: "2px solid #CBD5E0",
          }}
          borderRadius={7}
        >
          <Heading color="gray.400">FRAP</Heading>
        </Box>
        <Box
          p={7}
          style={{
            border: "2px solid #CBD5E0",
          }}
          borderRadius={7}
        >
          <Heading color="gray.400">logstash</Heading>
        </Box>
        <Box
          p={7}
          style={{
            border: "2px solid #CBD5E0",
          }}
          borderRadius={7}
        >
          <Heading color="gray.400">LOGW</Heading>
        </Box>
        <Box
          p={7}
          style={{
            border: "2px solid #CBD5E0",
          }}
          borderRadius={7}
        >
          <Heading color="gray.400">TURK</Heading>
        </Box>
        <Box
          p={7}
          style={{
            border: "2px solid #CBD5E0",
          }}
          borderRadius={7}
        >
          <Heading color="gray.400">CAREC</Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default TrustedCompany;
