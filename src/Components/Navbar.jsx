import { NavLink } from "react-router-dom";
import { Box, Button, Stack, Text } from "@chakra-ui/react";
const links = [
  { id: "1", title: "Home", path: "/" },
  { id: "2", title: "Meal", path: "/meal" },
  { id: "3", title: "Food Of the Day", path: "/fod" },
  { id: "4", title: "About", path: "/about" }
];

function Navbar() {
  return (
    <div>
      <Stack
        direction="row"
        spacing={4}
        align="center"
        justifyContent="space-around"
      >
        <Box>
          <Text as="h1" fontSize={["24px", "36px", "42px"]}>
            TheMealHub
          </Text>
        </Box>
        <Box fontSize={["22px", "25px", "32px"]}>
          {links.map((link) => (
            <NavLink key={link.path} to={link.path} end>
              <Button
                colorScheme="teal"
                variant="ghost"
                fontSize={["sm", "md", "lg"]}
              >
                {link.title}
              </Button>
            </NavLink>
          ))}
        </Box>
      </Stack>
    </div>
  );
}

export default Navbar;
