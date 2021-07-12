import { useState } from "react";
import { HStack, Input, Button, useToast } from "@chakra-ui/react";

const SearchForm = ({ requestData }) => {
  const toast = useToast();
  const makeToast = () => {
    toast({
      title: "Nothing to search!",
      description: "Please enter some search terms in the text box.",
      status: "error",
      duration: 2500,
      isClosable: true,
    });
  };

  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    if (error) setError(false);
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input) {
      setError(true);
      return makeToast();
    }

    requestData(input);
    setInput("");
    return;
  };

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <HStack w={{ base: "2xl", sm: "md", md: "xl", lg: "3xl" }} p={4}>
        <Input
          isInvalid={error}
          placeholder="Amazon rainforest"
          size="lg"
          variant="filled"
          value={input}
          onChange={handleChange}
        />
        <Button
          leftIcon={<span>🔍</span>}
          size="lg"
          colorScheme="pink"
          px="8"
          type="submit"
        >
          Search
        </Button>
      </HStack>
    </form>
  );
};

export default SearchForm;
