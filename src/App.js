import { Heading, VStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

import ArticlesGrid from "./components/ArticlesGrid";
import SearchForm from "./components/SearchForm";
import API from "./lib/API";

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { data, requestData, loading, error, errorMessage } =
    API.useFetchNewArticles();

  const handleNewSearch = () => {
    requestData();
  };

  return (
    <VStack p={4}>
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
      <SearchForm handleNewSearch={handleNewSearch} />
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
