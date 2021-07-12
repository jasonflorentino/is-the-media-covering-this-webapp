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
import { getRelativeDate } from "../../lib/dateutils";
import "./ArticleCard.scss";
import fallBack from "../../assets/images/fallback.png";

// Helper functions
const getDateColorTheme = (dateString) => {
  return dateString.includes("week") ? "blue" : "teal";
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
        <Flex direction={{sm: "column", md: "row", lg: "row"}}>
          <Image {...CLASSES.imageBox} src={img} alt={title} fallbackSrc={fallBack} />
          <Flex p="6" direction="column" justifyContent="center" w="100%">
            <Box {...CLASSES.titleBox}>
              {title}
            </Box>
            <Box mt={3} d="flex" alignItems="baseline">
              <Badge {...CLASSES.badge} colorScheme={colorTheme}>
                {dateString}
              </Badge>
              <Box ml={2} as="span" color="gray.600" fontSize="sm">
                {author}
              </Box>
              <ExternalLinkButton
                text={sourceText}
                href={link}
                colorScheme={colorTheme}
                linkProps={{ ml: "auto" }}
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
    imageBox: {
      w: "30%",
      minW: { sm: "100%", md: "30%" },
      h: "100%",
      minH: { sm: "300px", md: "160", lg: "200", xl: "200" },
      maxH: { sm: "300px", md: "160", lg: "200"},
      objectFit: "cover"
    },
    titleBox: {
      fontWeight: "bold",
      as: "h4",
      lineHeight: "shorter",
      fontSize: { sm: "2xl", lg: "3xl" },
    },
    badge: {
      borderRadius:"full",
      px:"2.5",
      py:"1",
    },
  }
}
