import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/image.png";

const Navbar = () => {
  return (
    <div>
      <HStack>
        <Image src={logo} boxSize="100px" />
        <Text>ClassicSilks emporium</Text>
      </HStack>
    </div>
  );
};

export default Navbar;
