import {
  Box,
  Center,
  useColorModeValue,
  Stack,
  Image,
  Button,
  Badge,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const MotionBox = motion(Box);

const MealItem = ({ data }) => {
  const bg_mainbox = useColorModeValue("white", "gray.800");

  return (
    <Stack
      direction="row"
      justifyContent="space-evenly"
      display="grid"
      gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr", "1fr 1fr 1fr"]}
    >
      {!data
        ? "Not Found"
        : data.map((el) => (
            <Center py={12} key={el.idMeal}>
              <MotionBox
                p={4}
                maxW={"330px"}
                w={"full"}
                bg={bg_mainbox}
                boxShadow={"md"}
                rounded={"md"}
                overflow={"hidden"}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  h={"180px"}
                  w={"100%"}
                  objectFit={"cover"}
                  src={el.strMealThumb}
                  alt={el.strMeal}
                  mb={4}
                  rounded={"md"}
                />
                <Stack spacing={2} align={"center"}>
                  <Badge colorScheme="purple" fontSize="md">
                    {el.strCategory}
                  </Badge>
                  <Text
                    fontSize={["xs", "sm", "md"]}
                    fontWeight={500}
                    textAlign="center"
                    textTransform={"capitalize"}
                  >
                    {el.strMeal}
                  </Text>
                  <Stack
                    direction={"row"}
                    spacing={4}
                    align={"center"}
                    justify={"center"}
                  >
                    <Button
                      colorScheme="teal"
                      variant="outline"
                      size="sm"
                      as={Link}
                      to={`/recipe/${el.idMeal}`}
                    >
                      Recipe
                    </Button>
                  </Stack>
                </Stack>
              </MotionBox>
            </Center>
          ))}
    </Stack>
  );
};

export default MealItem;
