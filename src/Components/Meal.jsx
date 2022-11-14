import {
    Box,
    InputGroup,
    InputLeftElement,
    Input,
    Stack,
    Show,
    Spinner
  } from "@chakra-ui/react";
  import axios from "axios";
  import { useEffect, useState } from "react";
  import { FaSearch } from "react-icons/fa";
  import MealItem from "./MealItem";
  import RecipeIndex from "./RecipeIndex";
  const Meal = () => {
    const [search, setSearch] = useState("");
    const [show, setShow] = useState(false);
    const [item, setItem] = useState([]);
    const [url, setUrl] = useState(
      "https://www.themealdb.com/api/json/v1/1/search.php?f=b"
    );
    const getAllMeals = () => {
      axios.get(url).then((res) => {
        setItem(res.data.meals);
        setShow(true);
      });
    };
    useEffect(() => {
      getAllMeals(url);
    }, [url]);
    const searchRecipe = (evt) => {
      setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    };
    const setIndex = (alpha) => {
      setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
    };
    return (
      <>
        <Box w="50%" margin="auto" p={4}>
          <InputGroup>
            <InputLeftElement
              size="lg"
              pointerEvents="none"
              children={<FaSearch color="gray.300" />}
            />
            <Input
              type="item"
              placeholder="Search Food"
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchRecipe}
            />
          </InputGroup>
        </Box>
        <Box w="95%" m="auto" justifyContent="space-evenly">
          {show ? (
            <MealItem data={item} />
          ) : (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="whatsapp.500"
              size="xl"
            />
          )}
          <Show above="lg">
            <Stack
              direction="row"
              spacing={1}
              align="center"
              justifyContent="space-around"
              m="auto"
              p={5}
            >
              <RecipeIndex alphaIndex={(index) => setIndex(index)} />
            </Stack>
          </Show>
        </Box>
      </>
    );
  };
  export default Meal;
  