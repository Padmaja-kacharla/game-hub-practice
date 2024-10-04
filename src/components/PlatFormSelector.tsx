import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import UsePlatform from "../hooks/UsePlatform";
import { PlatForm } from "../hooks/UseGames";

interface Props {
  onselectedPlatform: (platform: PlatForm) => void;
  selectedPlatform: PlatForm | null;
}

const PlatFormSelector = ({ onselectedPlatform, selectedPlatform }: Props) => {
  const { data, error } = UsePlatform();
  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onselectedPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatFormSelector;
