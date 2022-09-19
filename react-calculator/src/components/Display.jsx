import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Display = (props) => {
  let { displayValue } = props;

  return (
    <Box>
      <Text
        fontSize={["xl", "lg"]}
        color="gray.700"
        textOverflow="ellipsis"
        overflow="hidden"
      >
        {displayValue}
      </Text>
    </Box>
  );
};

export default Display;
