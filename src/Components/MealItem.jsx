import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Stack,
    Image,
    Button,
    Badge
  } from "@chakra-ui/react";
  import { Link } from "react-router-dom";
  import { HiOutlineStar } from "react-icons/hi";
  const MealItem = ({ data }) => {
    //Rating Generator
    const conditionalRating = (x) => {
      if (x > 3.9) {
        return (
          <Badge
            colorScheme="green"
            display="flex"
            fontSize="1.1rem"
            alignItems="center"
          >
            <HiOutlineStar size="1.2rem" />
            &nbsp;{x}
          </Badge>
        );
      } else {
        return (
          <Badge
            colorScheme="red"
            display="flex"
            fontSize="1.1rem"
            alignItems="center"
          >
            <HiOutlineStar size="1.2rem" />
            &nbsp;{x}
          </Badge>
        );
      }
    };
  
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
              <Center
                py={12}
                key={el.idMeal}
                _hover={{
                  maxW: "full",
                  transform: "translateY(-3px)",
                  boxShadow: "md",
                  bg: "green.100"
                }}
                border="transparent"
              >
                <Box
                  role={"group"}
                  p={6}
                  maxW={"330px"}
                  w={"full"}
                  bg={bg_mainbox}
                  boxShadow={"2xl"}
                  rounded={"lg"}
                  pos={"relative"}
                  zIndex={1}
                >
                  <Box
                    rounded={"lg"}
                    mt={-12}
                    pos={"relative"}
                    height={"230px"}
                    _after={{
                      transition: "all .3s ease",
                      content: '""',
                      w: "full",
                      h: "full",
                      pos: "absolute",
                      top: 5,
                      left: 0,
                      filter: "blur(15px)",
                      zIndex: -1
                    }}
                    _groupHover={{
                      _after: {
                        filter: "blur(20px)"
                      }
                    }}
                  >
                    <Image
                      rounded={"lg"}
                      height={230}
                      width={282}
                      objectFit={"cover"}
                      src={el.strMealThumb}
                    />
                  </Box>
                  <Stack p={5} align={"center"}>
                    <Badge variant="outline" colorScheme="purple" fontSize="md">
                      {" "}
                      {el.strCategory}
                    </Badge>
                    <Heading
                      w="100%"
                      as="p"
                      fontSize={"lg"}
                      fontFamily={"body"}
                      fontWeight={500}
                      textAlign="center"
                    >
                      {el.strMeal}
                    </Heading>
                    <Stack
                      direction={"row"}
                      align={"center"}
                      justifyContent="space-between"
                      spacing={4}
                    >
                      <Link to={`/recipe/${el.idMeal}`}>
                        <Button colorScheme="teal" variant="link" size="md">
                          Recipe
                        </Button>
                      </Link>
                      <Box>
                        {conditionalRating((Math.random() * 4 + 1).toFixed(1))}
                      </Box>
                    </Stack>
                  </Stack>
                </Box>
              </Center>
            ))}
      </Stack>
    );
  };
  export default MealItem;
  