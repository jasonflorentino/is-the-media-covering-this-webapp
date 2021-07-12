import { useEffect } from "react";
import { Button, SlideFade, Box } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

import { useScroll } from "../lib/scrollutils";

const ScrollToTop = () => {
  const { scrolled, attachScroll } = useScroll(250);

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    attachScroll();
    // eslint-disable-next-line
  }, []);

  return (
    <Box position="fixed" bottom="55px" right="45px" zIndex="100">
      <SlideFade offsetY="20px" in={scrolled}>
        <Button
          rightIcon={<FaArrowUp />}
          colorScheme="pink"
          variant="solid"
          rounded="full"
          size={"lg"}
          onClick={handleScroll}
        >
          Top
        </Button>
      </SlideFade>
    </Box>
  );
};

export default ScrollToTop;
