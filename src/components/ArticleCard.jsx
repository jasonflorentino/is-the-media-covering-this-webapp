import { useEffect } from 'react'
import { Box, Image, Badge, Button, SlideFade, useDisclosure } from '@chakra-ui/react'
import { FaExternalLinkAlt } from "react-icons/fa"

import { getRelativeDate } from "../lib/dateutils";
import "./ArticleCard.scss";

const getDateColorTheme = (dateString) => {
  return dateString.includes("week") ? "blue" : "teal";
}

const stripWww = (sourceUrl) => {
  return sourceUrl.replace(/^www\./, "")
}

const ArticleCard = ({ img, title, author, source, date, order }) => {
  const { isOpen, onToggle } = useDisclosure();

  const dateString = getRelativeDate(date);
  const colorTheme = getDateColorTheme(dateString);
  const sourceText = stripWww(source);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onToggle();
    }, 50 * order);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, []);
  
  return (
    <SlideFade in={isOpen} offsetY="20px">
    <Box className="ArticleCard" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image 
        w="100%"
        h={56}
        objectFit="cover"
        src={img} 
        alt={title} 
      />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2.5" py="1" colorScheme={colorTheme}>
            {dateString}
          </Badge>
        </Box>

        <Box
          mt={2}
          fontWeight="bold"
          as="h4"
          lineHeight="shorter"
          fontSize="2xl"
        >
          {title}
        </Box>

        <Box as="span" color="gray.600" fontSize="sm">
          {author}
        </Box>

        <Box mt={3}>
          <Button colorScheme={colorTheme} variant="solid" rightIcon={<FaExternalLinkAlt />}>
            {sourceText}
          </Button>
        </Box>

      </Box>
    </Box>
    </SlideFade>
  )
}

export default ArticleCard
