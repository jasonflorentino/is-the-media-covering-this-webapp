import { useState } from "react";
import { HStack, Input, Button, useToast } from '@chakra-ui/react';

const SearchForm = ({ handleNewSearch }) => {
  
  const toast = useToast();

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      return toast({
        title: "Nothing to search!",
        description: "Please enter some search terms in the text box.",
        status: "error",
        duration: 2500,
        isClosable: true,
      })
    }
    console.log("Submit!", input);
    handleNewSearch()
    setInput("");
    return;
  }
  
  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <HStack w={{ base: "2xl", sm: "md", md: "xl", lg: "3xl" }} p={4}>
        <Input  placeholder="Amazon rainforest" size="lg" variant="filled" value={input} onChange={handleChange} />
        <Button size="lg" colorScheme="pink" px="8" type="submit">Search</Button>
      </HStack>
    </form>
  )
}

export default SearchForm;
