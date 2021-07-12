import { SimpleGrid } from "@chakra-ui/react";

import ArticleCard from './ArticleCard/ArticleCard';
import Loading from "./Loading";
import Error from "./Error";
import Empty from "./Empty";

const ArticlesGrid = ({ data, loading, error, errorMessage }) => {

  if (loading) return <Loading />;
  if (error) return <Error message={errorMessage} />;

  const cards = data.articles && 
    data.articles.map((article, i) => {
      const { media, title, author, source, published_on, link } = article;
      return <ArticleCard 
        key={i}
        order={i}
        img={media} 
        title={title} 
        author={author} 
        source={source}
        date={published_on}
        link={link}
      />
    })

  return cards ? (
    <SimpleGrid 
      columns={[1]} 
      spacing={8} 
      maxW={{sm: "100%", md: "90%", lg: "1100px"}}
    >
      {cards}
    </SimpleGrid>
  ) : (
    <Empty />
  )
}

export default ArticlesGrid;
