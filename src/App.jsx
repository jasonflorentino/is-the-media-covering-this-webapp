import { useEffect } from "react";
import { VStack } from "@chakra-ui/react";

import DarkModeToggle from "./components/DarkModeToggle";
import SearchForm from "./components/SearchForm";
import ScrollToTop from "./components/ScrollToTop";
import Results from "./components/Results";
import Header from "./components/Header";
import Empty from "./components/Empty";
import url from "./lib/url_utils";
import API from "./lib/API";

const App = ({ location, history }) => {
  const queries = url.getQueriesFromLocationSearch(location.search);

  const { data, requestData, loading, error, errorMessage } =
    API.useFetchNewArticles();

  useEffect(() => {
    if (queries.q) {
      requestData(queries.q);
    }
    // eslint-disable-next-line
  }, [location]);

  return (
    <VStack p={4} overflowX="hidden">
      <ScrollToTop />
      <DarkModeToggle />
      <Header />
      <SearchForm history={history} />
      {queries.q ? (
        <Results
          loading={loading}
          total={data.total_articles}
          query={queries.q}
          data={data}
          error={error}
          errorMessage={errorMessage}
        />
      ) : (
        <Empty />
      )}
    </VStack>
  );
};

export default App;
