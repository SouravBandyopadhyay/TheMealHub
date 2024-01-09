import { Box, Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button when the user scrolls down by 1/3 of the screen
      setShowButton(window.scrollY > window.innerHeight / 3);
    };

    // Attach the event listener to the scroll event
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <Box position="fixed" bottom="4" right="4" zIndex="999">
          <Button
            colorScheme="teal"
            leftIcon={<FaArrowUp />}
            onClick={scrollToTop}
          >
            Scroll to Top
          </Button>
        </Box>
      )}
    </>
  );
};

export default ScrollToTopButton;
