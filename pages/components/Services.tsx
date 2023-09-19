import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

const Services = () => {
  return (
    <div>
      <Box>
        <Box>
          <Text fontSize={20}>Our Services</Text>
        </Box>
        <Box>
          <Text>
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
      </Box>
    </div>
  );
};

export default Services;
