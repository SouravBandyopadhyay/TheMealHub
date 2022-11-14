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
  Spinner
} from "@chakra-ui/react";

const FoodoftheDay = () => {
  const [food, setFood] = useState({});
  const [loading, setLoading] = useState(true);
  const bg_list_ing = useColorModeValue("yellow.500", "yellow.300");
  const bg_category = useColorModeValue("gray.500", "gray.400");
  const bg_border_color = useColorModeValue("gray.200", "gray.600");
  const bg_dollar = useColorModeValue("gray.900", "gray.400");
  const bg_btn_colar = useColorModeValue("gray.900", "gray.50");
  const bg_btn_colar_2 = useColorModeValue("white", "gray.900");

  const getFood = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => {
        console.log(res.data.meals[0]);
        setFood(res.data.meals[0]);
      });
  };
  useEffect(() => {
    setTimeout(() => {
      getFood();
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="whatsapp.500"
          size="xl"
        />
      ) : (
        <Container maxW={"7xl"}>
          <SimpleGrid
            columns={{ base: 1, lg: 1 }}
            spacing={{ base: 5, md: 10 }}
            py={{ base: 18, md: 24 }}
          >
            <Flex>
              <Image
                rounded={"md"}
                alt={"product image"}
                src={food.strMealThumb}
                fit={"cover"}
                align={"center"}
                margin="auto"
                w={"50%"}
                h={{ base: "100%", sm: "400px", lg: "500px" }}
              />
            </Flex>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={"header"}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
                >
                  {food.strMeal}
                </Heading>
                <Text color={bg_dollar} fontWeight={300} fontSize={"2xl"} p={4}>
                  $40.00 USD
                </Text>
              </Box>

              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={"column"}
                divider={<StackDivider borderColor={bg_border_color} />}
              >
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text color={bg_category} fontSize={"2xl"} fontWeight={"300"}>
                    Category:{food.strCategory}
                  </Text>
                  <Text fontSize={"1rem"}> {food.strInstructions}</Text>
                </VStack>
                <Box>
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    color={bg_list_ing}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    List Of Ingredients
                  </Text>

                  <SimpleGrid
                    columns={{ base: 1, md: 2 }}
                    spacing={5}
                    textTransform="capitalize"
                    w="50%"
                    margin="auto"
                  >
                    <List spacing={2}>
                      <ListItem>{food.strIngredient1}</ListItem>
                      <ListItem>{food.strIngredient2}</ListItem>{" "}
                      <ListItem>{food.strIngredient3}</ListItem>
                      <ListItem>{food.strIngredient4}</ListItem>
                    </List>
                    <List spacing={2}>
                      <ListItem>{food.strIngredient5}</ListItem>
                      <ListItem>{food.strIngredient6}</ListItem>
                      <ListItem>{food.strIngredient7}</ListItem>
                      <ListItem>{food.strIngredient8}</ListItem>
                    </List>
                  </SimpleGrid>
                </Box>
              </Stack>

              <Box>
                <Button
                  rounded={"10px"}
                  w={"-moz-max-content"}
                  mt={8}
                  size={"md"}
                  py={"7"}
                  bg={bg_btn_colar}
                  color={bg_btn_colar_2}
                  textTransform={"uppercase"}
                  margin="auto"
                  _hover={{
                    transform: "translateY(-5px)",
                    boxShadow: "lg"
                  }}
                  onClick={() => getFood()}
                >
                  Generate Random food
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
