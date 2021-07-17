import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Button, Link } from "@chakra-ui/react";

const ExternalLinkButton = ({
  text,
  href,
  colorScheme = "gray",
  linkProps = {},
}) => {
  return (
    <Link {...linkProps} _hover="" target="_blank" rel="noreferrer" href={href}>
      <Button
        as="div"
        variant="solid"
        colorScheme={colorScheme}
        rightIcon={<FaExternalLinkAlt />}
      >
        {text}
      </Button>
    </Link>
  );
};

export default ExternalLinkButton;
