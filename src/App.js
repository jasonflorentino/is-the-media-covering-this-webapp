import { Heading, VStack, IconButton, useColorMode, Box } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

import ArticlesGrid from "./components/ArticlesGrid";
import SearchForm from "./components/SearchForm";
import ScrollToTop from "./components/ScrollToTop";
import API from "./lib/API";

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { 
    data,
    requestData, 
    loading, 
    error, 
    errorMessage 
  } = API.useFetchNewArticles();

  return (
    <VStack p={4}>
      <ScrollToTop />
      <IconButton
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
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
      <SearchForm requestData={requestData} />
      <Box>
        {data.total_articles}
      </Box>
      <ArticlesGrid
        data={data}
        loading={loading}
        error={error}
        errorMessage={errorMessage}
      />
    </VStack>
  );
};

export default App;
