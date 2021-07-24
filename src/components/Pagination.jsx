import React from "react";
import { withRouter } from "react-router-dom";
import { HStack, ButtonGroup, IconButton } from "@chakra-ui/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import PageButton from "./PageButton";
import utils from "../lib/pagination_utils";
import url from "../lib/url_utils";

const Pagination = ({ location, history, articleCount }) => {
  // Pull current query and current page from location
  // + convert page type to Number
  let { q: currQuery, p: currPage = 1 } = url.getQueriesFromLocationSearch(location.search);
  currPage = Number(currPage);

  const wouldBeTotalPages = Math.ceil(articleCount / 10);
  const pages = utils.makePageNumbersArray(
    currPage,
    utils.PAGES_TO_SHOW_DEFAULT,
    // Max pages should be 10 (Google API doesn't let us do more)
    // But we should handle searches with < 100 Google results
    wouldBeTotalPages > 10 ? 10 : wouldBeTotalPages
  );

  const showPrev = currPage !== pages[0];
  const showNext = currPage !== pages[pages.length - 1];

  const handlePageChange = (page) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    history.push(`/?q=${currQuery}&p=${page}`);
  };

  return (
    <HStack p={8}>
      <ButtonGroup size="lg" variant="ghost">
        {showPrev && (
          <IconButton
            aria-label="Previous page"
            icon={<FaAngleLeft />}
            onClick={() => handlePageChange(currPage - 1)}
          />
        )}
        {pages.map((page, i) => (
          <PageButton 
            key={i} 
            page={page} 
            isCurrentPage={page === currPage} 
            handlePageChange={handlePageChange}   
          />
        ))}
        {showNext && (
          <IconButton
            aria-label="Next page"
            icon={<FaAngleRight />}
            onClick={() => handlePageChange(currPage + 1)}
          />
        )}
      </ButtonGroup>
    </HStack>
  );
};

export default withRouter(Pagination);
