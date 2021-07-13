import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/">
      <Heading
        mb="8"
        p={1}
        fontWeight="extrabold"
        size="3xl"
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
      >
        Is the media covering this?
      </Heading>
    </Link>
  );
};

export default Header;
