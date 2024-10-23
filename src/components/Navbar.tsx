import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/image.png";
import ColorSwitchMode from "./ColorSwitchMode";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <div>
      <HStack justifyContent="space-between" padding="10px">
        <Image src={logo} boxSize="100px" />
        <SearchInput />
        <ColorSwitchMode />
      </HStack>
    </div>
  );
};

export default Navbar;
