import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Stack,
  Show,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";
import { useDebounce } from "use-debounce";
import ScrollToTopButton from "./ScrollToTopButton";

const Meal = () => {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [item, setItem] = useState([]);
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=b"
  );

  // Add debounce to the search term
  const [debouncedSearchTerm] = useDebounce(search, 1000);

  const getAllMeals = useCallback(() => {
    axios.get(url).then((res) => {
      setItem(res.data.meals);
      setShow(true);
    });
  }, [url, setItem, setShow]);
  
  useEffect(() => {
    getAllMeals();
  }, [getAllMeals]);
  
  

  useEffect(() => {
    // Update the URL when the debounced search term changes
    setUrl(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${debouncedSearchTerm}`
    );
  }, [debouncedSearchTerm]);

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
          <ScrollToTopButton />
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
