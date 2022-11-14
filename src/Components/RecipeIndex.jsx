import { Box, Button } from "@chakra-ui/react";
import React from "react";
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
    "Z"
  ];
  let num = 0;
  return (
    <>
      {alpha.map((item) => {
        return (
          <Box key={num++} onClick={() => alphaIndex(item)}>
            <Button colorScheme="gray" fontSize="0.9rem">
              {item}
            </Button>
          </Box>
        );
      })}
    </>
  );
};
export default RecipeIndex;
