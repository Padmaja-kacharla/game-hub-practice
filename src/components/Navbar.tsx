import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/image.png";
import ColorSwitchMode from "./ColorSwitchMode";
import SearchInput from "./SearchInput";
interface Props {
  onSearch: (searchText: string) => void;
}
const Navbar = ({ onSearch }: Props) => {
  return (
    <div>
      <HStack justifyContent="space-between" padding="10px">
        <Image src={logo} boxSize="100px" />
        <SearchInput onSearch={onSearch} />
        <ColorSwitchMode />
      </HStack>
    </div>
  );
};

export default Navbar;
