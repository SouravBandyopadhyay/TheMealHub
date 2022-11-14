import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Box,
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
  List,
  ListItem
} from "@chakra-ui/react";
const Recipe = () => {
  const [item, setItem] = useState({});
  const params = useParams();
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`;
  const bg_list_ing = useColorModeValue("yellow.500", "yellow.300");
  const bg_category = useColorModeValue("gray.500", "gray.400");
  const bg_border_color = useColorModeValue("gray.200", "gray.600");
  const bg_dollar = useColorModeValue("gray.900", "gray.400");
  const fetchData = () => {
    axios.get(url).then((res) => {
      setItem(res.data.meals[0]);
    });
  };
  useEffect(() => {
    fetchData();
  });
  return (
    <>
      {!item ? (
        "Not Found"
      ) : (
        <Container maxW={"6xl"}>
          <SimpleGrid
            columns={{ base: 1, lg: 1 }}
            spacing={{ base: 5, md: 10 }}
            py={{ base: 18, md: 24 }}
          >
            <Flex>
              <Image
                rounded={"md"}
                alt={"product image"}
                src={item.strMealThumb}
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
                  {item.strMeal}
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
                    Category:{item.strCategory}
                  </Text>
                  <Text fontSize={"1rem"}> {item.strInstructions}</Text>
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
                    spacing={10}
                    textTransform="capitalize"
                  >
                    <List spacing={2}>
                      <ListItem>{item.strIngredient1}</ListItem>
                      <ListItem>{item.strIngredient2}</ListItem>{" "}
                      <ListItem>{item.strIngredient3}</ListItem>
                      <ListItem>{item.strIngredient4}</ListItem>
                    </List>
                    <List spacing={2}>
                      <ListItem>{item.strIngredient5}</ListItem>
                      <ListItem>{item.strIngredient6}</ListItem>
                      <ListItem>{item.strIngredient7}</ListItem>
                      <ListItem>{item.strIngredient8}</ListItem>
                    </List>
                  </SimpleGrid>
                </Box>
              </Stack>

              <Box>
                <Link to="/meal">
                  <Button colorScheme="purple">Back</Button>
                </Link>
              </Box>
            </Stack>
          </SimpleGrid>
        </Container>
      )}
    </>
  );
};
export default Recipe;
