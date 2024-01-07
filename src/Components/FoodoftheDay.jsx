import axios from "axios";
import { useEffect, useState } from "react";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import RecipeInstructions from "./RecipeInstructions";

const FoodoftheDay = () => {
  const [food, setFood] = useState({});
  const [loading, setLoading] = useState(true);
  const getFood = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => {
        console.log(res.data.meals[0]);
        setFood(res.data.meals[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching food:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getFood();
  }, []);
  return (
    <>
      {loading && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="whatsapp.500"
          size="xl"
        />
      )}{" "}
      {!loading && (
        <Container maxW={"7xl"} borderRadius="lg" p={4}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
          >
            {food.strMeal}
          </Heading>

          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 5, md: 10 }}
            p={2}
          >
            {/* Left Column - Image */}
            <Flex>
              <Image
                rounded={"md"}
                alt={"food image"}
                src={food.strMealThumb}
                fit={"cover"}
                align={"center"}
                margin="auto"
                w={"100%"}
                h={{ base: "100%", sm: "400px", lg: "500px" }}
              />
            </Flex>

            {/* Right Column - Recipe Details */}
            <Stack spacing={{ base: 6, md: 10 }}>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={"column"}
                divider={<StackDivider borderColor="#e74c3c" />}
              >
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text
                    color="#e74c3c"
                    fontSize={"2xl"}
                    fontWeight={"300"}
                    textTransform={"capitalize"}
                  >
                    Category: {food.strCategory}
                  </Text>
                  {/* <Text fontSize={"1rem"}>{food.strInstructions}</Text> */}
                  <RecipeInstructions instructions={food.strInstructions} />
                </VStack>

                <Box>
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    color="#e74c3c"
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    List Of Ingredients
                  </Text>

                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} w="100%">
                    <List spacing={2}>
                      <ListItem textTransform={"capitalize"}>
                        {food.strIngredient1}
                      </ListItem>
                      <ListItem textTransform={"capitalize"}>
                        {food.strIngredient2}
                      </ListItem>
                      <ListItem textTransform={"capitalize"}>
                        {food.strIngredient3}
                      </ListItem>
                      <ListItem textTransform={"capitalize"}>
                        {food.strIngredient4}
                      </ListItem>
                    </List>
                    <List spacing={2}>
                      <ListItem textTransform={"capitalize"}>
                        {food.strIngredient5}
                      </ListItem>
                      <ListItem textTransform={"capitalize"}>
                        {food.strIngredient6}
                      </ListItem>
                      <ListItem textTransform={"capitalize"}>
                        {food.strIngredient7}
                      </ListItem>
                      <ListItem textTransform={"capitalize"}>
                        {food.strIngredient8}
                      </ListItem>
                    </List>
                  </SimpleGrid>
                </Box>
              </Stack>

              <Box>
                <Text color="#e74c3c" fontWeight={300} fontSize={"2xl"} p={4}>
                  Price:$40.00 USD
                </Text>
                <Button
                  rounded={"10px"}
                  mt={8}
                  size={"md"}
                  py={"7"}
                  bg="#e74c3c"
                  color="#fff"
                  textTransform={"uppercase"}
                  margin="auto"
                  _hover={{
                    transform: "translateY(-5px)",
                    boxShadow: "lg",
                  }}
                  onClick={() => getFood()}
                >
                  Generate Another Recipe
                </Button>
              </Box>
            </Stack>
          </SimpleGrid>
        </Container>
      )}
    </>
  );
};
export default FoodoftheDay;
