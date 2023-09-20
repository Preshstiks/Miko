import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Header = () => {
  return (
    <Flex alignItems="center" pt="60px">
      <Box>
        <Heading pb={5} fontSize={60}>
          Creative Design Agency Platorm
        </Heading>
        <Image
          src="https://img.freepik.com/free-photo/aerial-view-businessman-using-computer-laptop_53876-24739.jpg?size=626&ext=jpg&ga=GA1.1.578610237.1691769856&semt=sph"
          alt="img"
          w={550}
        />
      </Box>
      <Box>
        <Image
          src="https://img.freepik.com/free-vector/business-analytics-concept-illustration_114360-4224.jpg?w=996&t=st=1695137748~exp=1695138348~hmac=46432cb923241f1b375df0e1eddf1302a73c9a921a8decd0dee31182a45f9bff"
          w={200}
          alt="img"
          pb="50px"
        />
        <Text pb="40px">
          We are solving a digital problem inside of the website and apps also
          create a project.
        </Text>
        <Flex gap={10}>
          <Button px={30} variant="outline" colorScheme="red" size="md">
            Contact
          </Button>
          <Flex alignItems="center">
            <Link fontWeight="semibold" href="#">
              Portfolio
            </Link>
            <Icon as={BsArrowUpRightCircle} ml={2} w={6} h={6} />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
