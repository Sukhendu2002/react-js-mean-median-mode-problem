import "./App.css";
import React, { useState } from "react";
import { Heading } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import Form from "./components/Form";
import Stats from "./components/Stats";

function App() {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);
  const [mean, setMean] = useState(0);
  const [median, setMedian] = useState(0);
  const [mode, setMode] = useState(0);
  const [sd, setSd] = useState(0);

  const loadData = () => {
    setLoading(false);
    console.log("Loading data...");
  };

  const addData = (data) => {
    console.log("Adding data...");
    console.log(value);
  };

  return (
    <div className="app">
      <div className="heading">
        <Heading as="h2" size="2xl">
          ReactJs Challenge
        </Heading>
        {loading ? (
          <Button
            colorScheme="teal"
            variant="solid"
            size="lg"
            onClick={loadData}
          >
            Reload Data
          </Button>
        ) : (
          <Button
            isLoading
            loadingText="Loading"
            colorScheme="teal"
            variant="outline"
            size="lg"
            spinnerPlacement="start"
          >
            Load Data
          </Button>
        )}
      </div>
      <Form
        data={addData}
        changeValue={(value) => {
          setValue(value);
        }}
      />
      <Stats mean={mean} median={median} mode={mode} sd={sd} />
    </div>
  );
}

export default App;
