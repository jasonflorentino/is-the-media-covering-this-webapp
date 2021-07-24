import React from 'react';
import { Button } from "@chakra-ui/react";

const PageButton = ({ page, isCurrentPage, handlePageChange }) => {  
  return (
    <Button 
      isDisabled={isCurrentPage} 
      onClick={() => handlePageChange(page)}
    >
      {page}
    </Button>
  )
}

export default PageButton;
