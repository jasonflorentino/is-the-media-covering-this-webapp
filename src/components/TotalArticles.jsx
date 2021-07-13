import React from 'react'
import { Box, Text } from "@chakra-ui/react";

import { formatNumber } from "../lib/string_utils";

const TotalArticles = ({ loading, total, query }) => {
  return (
    <Box p={6}>
      <Text fontSize="3xl" color="blue.400">
        {`${loading ? "Seaching for" : `Found ${formatNumber(total)} articles for`} "${query}"`}
      </Text>
    </Box>
  )
}

export default TotalArticles
