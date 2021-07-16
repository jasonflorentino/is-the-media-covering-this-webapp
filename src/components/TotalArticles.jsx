import React from "react";
import { Box, Text } from "@chakra-ui/react";

import { formatNumber } from "../lib/string_utils";

const TotalArticles = ({ loading, total, query }) => {
  return (
    <Box p={6}>
      <Text fontSize="3xl" color="blue.400" lineHeight="shorter">
        {`${
          loading
            ? "Seaching for"
            : `Found ${formatNumber(total)} article${
                total === 1 ? "" : "s"
              } for`
        } "${query}"`}
      </Text>
    </Box>
  );
};

export default TotalArticles;
