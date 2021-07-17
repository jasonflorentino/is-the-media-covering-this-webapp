// External imports
import { useEffect } from "react";
import {
  Box,
  Image,
  Badge,
  SlideFade,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";

// Local imports
import ExternalLinkButton from "../ExternalLinkButton";
import { getRelativeDate } from "../../lib/date_utils";
import "./ArticleCard.scss";
import fallBack from "../../assets/images/fallback.png";

// Helper functions
const getDateColorTheme = (dateString) => {
  return dateString.includes("day") 
    ? "green" 
    : dateString.includes("week") 
    ? "teal" 
    : "blue";
};

const stripWww = (sourceUrl) => {
  return sourceUrl.replace(/^www\./, "");
};

// Component def
const ArticleCard = ({ img, title, author, source, date, link, order }) => {
  const { isOpen, onToggle } = useDisclosure();
  const dateString = getRelativeDate(date);
  const colorTheme = getDateColorTheme(dateString);
  const sourceText = stripWww(source);
  const CLASSES = getClasses();

  // Progressively animate cards
  useEffect(() => {
    const timeout = setTimeout(() => {
      onToggle();
    }, 100 * order);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, []);

  return (
    <SlideFade in={isOpen} offsetY="20px">
      <Box {...CLASSES.articleCard} className="ArticleCard">
        <Flex direction={{ sm: "column", md: "row" }}>
          <Image {...CLASSES.imageBox} src={img} alt={title} fallbackSrc={fallBack} />
          <Flex p="6" direction="column" justifyContent="center" w="100%">
            <Box {...CLASSES.title}>
              {title}
            </Box>
            <Box {...CLASSES.detailsBox} >
              <Badge {...CLASSES.badge} colorScheme={colorTheme}>
                {dateString}
              </Badge>
              <Box {...CLASSES.author}>
                {author}
              </Box>
              <ExternalLinkButton
                text={sourceText}
                href={link}
                colorScheme={colorTheme}
                linkProps={{ ml: { sm: "0", md: "auto" } }}
              />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </SlideFade>
  );
};

export default ArticleCard;

// Object of classes to spread into respective elements
function getClasses() {
  return {
    articleCard: {
      maxW:"100%",
        borderWidth: "1px",
        borderRadius: "lg",
        overflow: "hidden",
    },
    detailsBox: {
      mt: 3,
      d: "flex",
      alignItems: "baseline",
      flexDirection: { sm: "column", "md": "row" }
    },
    author: {
      as: "span",
      ml: { sm: "0", md:"2" }, 
      my: { sm: 2, md: 0 },
      color: "gray.600",
      fontSize: "sm"
    },
    imageBox: {
      w: "30%",
      minW: { sm: "100%", md: "30%" },
      h: "100%",
      minH: { sm: "250px", md: "160", lg: "200", xl: "200" },
      maxH: { sm: "250px", md: "160", lg: "200"},
      objectFit: "cover"
    },
    title: {
      fontWeight: "bold",
      as: "h4",
      lineHeight: { sm: "none", md: "shorter" },
      fontSize: { sm: "2xl", lg: "3xl" },
    },
    badge: {
      borderRadius:"full",
      px:"2.5",
      py:"1",
    },
  }
}
