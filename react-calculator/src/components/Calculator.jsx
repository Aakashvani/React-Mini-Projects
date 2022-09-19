import React from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import Display from "./Display";

const Calculator = (props) => {
  const buttonStyling = {
    variant: "solid",
    fontSize: ["xl", "md"],
    margin: "2px",
    width: "20px",
  };

  return (
    <Center marginTop={"14"}>
      <Box
        // display="flex"
        justifyContent="center"
        justifyItems="center"
        maxW={"445px"}
        maxH={"500px"}
        h={"100vh"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        {/* Display */}
        <Display />

        {/* Calculator Button */}

        <SimpleGrid columns={4} spacing={5}>
          <Button
            {...buttonStyling}
            name="7"
            onClick={(e) => props.onClick(e.target.name)}
          >
            7
          </Button>
          <Button
            {...buttonStyling}
            name="8"
            onClick={(e) => props.onClick(e.target.name)}
          >
            8
          </Button>
          <Button
            {...buttonStyling}
            name="9"
            onClick={(e) => props.onClick(e.target.name)}
          >
            9
          </Button>
          <Button
            {...buttonStyling}
            name="/"
            onClick={(e) => props.onClick(e.target.name)}
          >
            /
          </Button>
          <Button
            {...buttonStyling}
            name="4"
            onClick={(e) => props.onClick(e.target.name)}
          >
            4
          </Button>
          <Button
            {...buttonStyling}
            name="5"
            onClick={(e) => props.onClick(e.target.name)}
          >
            5
          </Button>
          <Button
            {...buttonStyling}
            name="6"
            onClick={(e) => props.onClick(e.target.name)}
          >
            6
          </Button>
          <Button
            {...buttonStyling}
            name="*"
            onClick={(e) => props.onClick(e.target.name)}
          >
            *
          </Button>
          <Button
            {...buttonStyling}
            name="1"
            onClick={(e) => props.onClick(e.target.name)}
          >
            1
          </Button>
          <Button
            {...buttonStyling}
            name="2"
            onClick={(e) => props.onClick(e.target.name)}
          >
            2
          </Button>
          <Button
            {...buttonStyling}
            name="3"
            onClick={(e) => props.onClick(e.target.name)}
          >
            3
          </Button>
          <Button
            {...buttonStyling}
            name="-"
            onClick={(e) => props.onClick(e.target.name)}
          >
            -
          </Button>
          <Button
            {...buttonStyling}
            name="0"
            onClick={(e) => props.onClick(e.target.name)}
          >
            0
          </Button>
          <Button
            {...buttonStyling}
            name="."
            onClick={(e) => props.onClick(e.target.name)}
          >
            .
          </Button>
          <Button
            {...buttonStyling}
            name="="
            onClick={(e) => props.onClick(e.target.name)}
          >
            =
          </Button>
          <Button
            {...buttonStyling}
            name="+"
            onClick={(e) => props.onClick(e.target.name)}
          >
            +
          </Button>
        </SimpleGrid>
      </Box>
    </Center>
  );
};

export default Calculator;
