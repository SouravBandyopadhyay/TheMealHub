import { Box, Button, HStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const RecipeIndex = ({ alphaIndex }) => {
  const alpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "J",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const itemsPerPage = 5; // Set the number of items to display per page
  const totalPages = Math.ceil(alpha.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedAlpha = alpha.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <HStack spacing={2}>
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          colorScheme="teal"
          fontSize="0.9rem"
          mr={2}
        >
          <FaAngleLeft /> Previous
        </Button>
        {displayedAlpha.map((item, index) => (
          <Box key={index} onClick={() => alphaIndex(item)}>
            <Button colorScheme="gray" fontSize="0.9rem">
              {item}
            </Button>
          </Box>
        ))}
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          colorScheme="teal"
          fontSize="0.9rem"
          ml={2}
        >
          Next <FaAngleRight />
        </Button>
      </HStack>
    </>
  );
};

export default RecipeIndex;
