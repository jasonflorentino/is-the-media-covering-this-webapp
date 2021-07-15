import { useState } from "react";
import { Flex, Input, Button, useToast } from "@chakra-ui/react";

const SearchForm = ({ history }) => {
  const toast = useToast();
  const makeToast = () => {
    toast({
      position: "top",
      variant: "left-accent",
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

    history.push(`/?q=${input}`);
    setInput("");
    return;
  };

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <Flex
        w={{ base: "2xl", sm: "sm", md: "xl", lg: "3xl" }}
        p={4}
        direction={{ sm: "column", md: "row" }}
      >
        <Input
          isInvalid={error}
          placeholder="Amazon rainforest"
          size="lg"
          variant="filled"
          value={input}
          onChange={handleChange}
          mb={{ sm: "2", md: "0"}}
          borderRightRadius={{sm: "base", md: "none"}}
        />
        <Button
          leftIcon={<span>🔍</span>}
          size="lg"
          colorScheme="pink"
          px="8"
          type="submit"
          borderLeftRadius={{sm: "base", md: "none"}}
        >
          Search
        </Button>
      </Flex>
    </form>
  );
};

export default SearchForm;
