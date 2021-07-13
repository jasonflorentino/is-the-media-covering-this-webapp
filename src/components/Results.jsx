import TotalArticles from "./TotalArticles";
import ArticlesGrid from "./ArticlesGrid";

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
    </>
  );
};

export default Results;
