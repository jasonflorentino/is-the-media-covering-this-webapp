import { IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
      isRound="true"
      size="lg"
      alignSelf="flex-end"
      onClick={toggleColorMode}
    />
  );
};

export default DarkModeToggle;
