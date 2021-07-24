import TotalArticles from "./TotalArticles";
import ArticlesGrid from "./ArticlesGrid";
import Pagination from "./Pagination";

const Results = ({ loading, total, query, data, error, errorMessage }) => {
  return (
    <>
      <TotalArticles
        loading={loading}
        total={total}
        query={query}
      />
      <ArticlesGrid
        data={data}
        loading={loading}
        error={error}
        errorMessage={errorMessage}
      />
      {!loading && total > 0 && <Pagination articleCount={total} />}
    </>
  );
};

export default Results;
