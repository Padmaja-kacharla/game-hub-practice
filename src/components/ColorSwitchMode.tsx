import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorSwitchMode = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <div>
      <HStack>
        <Switch
          colorScheme="green"
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        />
        <Text whiteSpace="nowrap">DarkMode</Text>
      </HStack>
    </div>
  );
};

export default ColorSwitchMode;
