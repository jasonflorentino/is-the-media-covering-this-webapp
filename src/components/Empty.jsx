import { Badge, Heading, Text, Box } from "@chakra-ui/react";

const Empty = () => {
  return (
    <Box
      boxSize={{ sm: "sm", lg: "lg" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      maxH={{ sm: "60", md: "none" }}
    >
      <Badge
        borderRadius="lg"
        fontSize="md"
        p="6"
        colorScheme={"cyan"}
        textTransform="None"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Heading fontSize="lg">Nothing to show</Heading>
        <Text fontWeight="normal">☝️ Try searching for something.</Text>
      </Badge>
    </Box>
  );
};

export default Empty;
