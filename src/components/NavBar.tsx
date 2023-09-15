import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/gear-logo-icon-vector-29518208.jpg";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>Nav Bar</Text>
    </HStack>
  );
};

export default NavBar;
