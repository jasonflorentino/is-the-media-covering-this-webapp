import { useEffect } from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  SlideFade,
  useDisclosure
} from "@chakra-ui/react";

const Error = ({ message = "Please try again later."}) => {
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    const timeout = setTimeout(() => {
      onToggle();
    }, 50);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, []);

  const closeButtonProps = {
    position: {sm: "absolute", lg: ""},
    right: {sm: "8px", lg: ""},
    top: {sm: "8px", lg: ""},
  }

  return (
    <SlideFade in={isOpen} offsetY="20px">
      <Alert
        status="error"
        maxW={{ sm: "sm", lg: "3xl" }}
        flexDirection={{ sm: "column", lg: "row" }}
        px={{sm: 20, lg: 4}}
        py={{sm: 6, lg: 3}}
        rounded={"md"}
      >
        <AlertIcon />
        <AlertTitle mr={{ sm: 0, lg: 2 }}>An error occurred!</AlertTitle>
        <AlertDescription mr={{ sm: 0, lg: 8 }}>
          {message}
        </AlertDescription>
        <CloseButton {...closeButtonProps} onClick={onToggle} />
      </Alert>
    </SlideFade>
  );
};

export default Error;
