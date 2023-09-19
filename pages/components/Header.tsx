import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Header = () => {
  return (
    <div>
      <Box>
        <Text fontSize={60}>Creative Design Agency Platorm</Text>
        <Image
          src="https://img.freepik.com/free-photo/aerial-view-businessman-using-computer-laptop_53876-24739.jpg?size=626&ext=jpg&ga=GA1.1.578610237.1691769856&semt=sph"
          alt="img"
          width={450}
          height={450}
        />
      </Box>
      <Box>
        <Image
          src="https://img.freepik.com/free-vector/business-analytics-concept-illustration_114360-4224.jpg?w=996&t=st=1695137748~exp=1695138348~hmac=46432cb923241f1b375df0e1eddf1302a73c9a921a8decd0dee31182a45f9bff"
          width={200}
          height={200}
          alt="img"
        />
        <Text>
          We are solving a digital problem inside of the website and apps also
          create a project.
        </Text>
        <Box>
          <Button>Contact</Button>
          <Flex alignItems="center">
            <Link href="#">Portfolio</Link>
            <BsArrowUpRightCircle />
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default Header;
