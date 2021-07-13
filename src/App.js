import { useEffect } from "react";
import { Heading, VStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

import ArticlesGrid from "./components/ArticlesGrid";
import SearchForm from "./components/SearchForm";
import ScrollToTop from "./components/ScrollToTop";
import TotalArticles from "./components/TotalArticles";
import url from "./lib/url_utils";
import API from "./lib/API";

const App = ({ location, history }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const queries = url.getQueriesFromLocationSearch(location.search);

  const { data, requestData, loading, error, errorMessage } =
    API.useFetchNewArticles();

  useEffect(() => {
    if (queries.q) {
      requestData(queries.q);
    }
    // eslint-disable-next-line
  }, [location])

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
      <SearchForm requestData={requestData} history={history} />
      {queries.q && <TotalArticles loading={loading} total={data.total_articles} query={queries.q} />}
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
