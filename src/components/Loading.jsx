import { Box, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Box
      boxSize={{ sm: "sm", lg: "lg" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="pink.500"
        size="xl"
        p={6}
      />
    </Box>
  );
};

export default Loading;
