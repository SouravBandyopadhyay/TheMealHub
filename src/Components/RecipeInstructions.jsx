import React from "react";
import { Box, List, ListItem, OrderedList, Text } from "@chakra-ui/react";

const RecipeInstructions = ({ instructions }) => {
  // Parse the instructions into an array of steps
  const steps = instructions.split(/\r\n|\r|\n/).filter((step) => step.trim());

  // Convert steps into an array of objects with keys and values
  const formattedSteps = steps.map((step, index) => {
    const [key, value] = step.split(":");
    return { step: key, instruction: value ? value.trim() : "" };
  });
//   console.log(formattedSteps);

  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Instructions:
      </Text>
      <OrderedList spacing={2}>
        {formattedSteps.map(({ step, instruction }, index) => (
          <ListItem key={index} textAlign={'left'}>
            <Text fontWeight="400" noOfLines={2}>{step}</Text>
            {/* <Text ml={2}>{instruction}</Text> */}
          </ListItem>
        ))}
      </OrderedList>
    </Box>
  );
};

export default RecipeInstructions;
