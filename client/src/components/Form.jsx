import React, { useState } from "react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

function Form(props) {
  const parse = (val) => val.replace(/^\$/, "");
  const [values, setValues] = useState();
  return (
    <div className="form-comp">
      <NumberInput
        value={values}
        onChange={(valueString) => {
          setValues(parse(valueString));
          props.changeValue(parse(valueString));
        }}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Button colorScheme="teal" variant="solid" size="lg" onClick={props.data}>
        Add Data
      </Button>
    </div>
  );
}

export default Form;
