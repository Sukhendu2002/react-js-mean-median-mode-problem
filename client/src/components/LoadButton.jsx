import React from "react";
import { Button, Stack } from "@chakra-ui/react";

function LoadButton(props) {
  return (
    <div className="loadButton">
      <Stack spacing={10} direction="row" align="center">
        <Button colorScheme="teal" size="lg" onClick={props.loadDataSet1}>
          Load DataSet 1
        </Button>
        <Button colorScheme="teal" size="lg" onClick={props.loadDataSet2}>
          Load DataSet 2
        </Button>
      </Stack>
    </div>
  );
}

export default LoadButton;
