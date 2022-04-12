import "./App.css";
import React, { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import Form from "./components/Form";
import Stats from "./components/Stats";
import LoadButton from "./components/LoadButton";
import { calmean, calmedian, calmode, calsd } from "./math/math";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

function App() {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);
  const [dataSet1, setDataSet1] = useState([]);
  const [dataSet2, setDataSet2] = useState([]);
  const [mean, setMean] = useState(0);
  const [median, setMedian] = useState(0);
  const [mode, setMode] = useState(0);
  const [sd, setSd] = useState(0);
  const [currentDataSet, setCurrentDataSet] = useState("");

  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    await axios
      .get("https://reactjs-stats.herokuapp.com/data")
      .then((res) => {
        setDataSet1(res.data.dataSet1);
        setDataSet2(res.data.dataSet2);
        setMean(calmean(res.data.dataSet1));
        setMedian(calmedian(res.data.dataSet1));
        setMode(calmode(res.data.dataSet1));
        setSd(calsd(res.data.dataSet1));
        setCurrentDataSet("dataSet1");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addData = async (e) => {
    const newValue = parseInt(value);
    if (currentDataSet === "dataSet1") {
      await setDataSet1([...dataSet1, newValue]);
      setMean(calmean(dataSet1));
      setMedian(calmedian(dataSet1));
      setMode(calmode(dataSet1));
      setSd(calsd(dataSet1));
    } else if (currentDataSet === "dataSet2") {
      await setDataSet2([...dataSet2, newValue]);
      setMean(calmean(dataSet2));
      setMedian(calmedian(dataSet2));
      setMode(calmode(dataSet2));
      setSd(calsd(dataSet2));
    }
  };

  const loadDataSet1 = async (e) => {
    e.preventDefault();
    console.log("Loading data set 1...");
    await axios
      .get("https://reactjs-stats.herokuapp.com/data")
      .then((res) => {
        setDataSet1(res.data.dataSet1);
        setMean(calmean(dataSet1));
        setMedian(calmedian(dataSet1));
        setMode(calmode(dataSet1));
        setSd(calsd(dataSet1));
        setCurrentDataSet("dataSet1");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loadDataSet2 = async (e) => {
    e.preventDefault();
    console.log("Loading data set 2...");
    await axios
      .get("https://reactjs-stats.herokuapp.com/data")
      .then((res) => {
        setDataSet2(res.data.dataSet2);
        setMean(calmean(dataSet2));
        setMedian(calmedian(dataSet2));
        setMode(calmode(dataSet2));
        setSd(calsd(dataSet2));
        setCurrentDataSet("dataSet2");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="app">
      <div className="heading">
        <Heading as="h2" size="2xl">
          ReactJs Challenge
        </Heading>
        <LoadButton loadDataSet1={loadDataSet1} loadDataSet2={loadDataSet2} />
      </div>

      <div className="form-comp">
        <NumberInput
          value={value}
          onChange={(valueString) => {
            setValue(parseInt(valueString));
          }}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Button colorScheme="teal" variant="solid" size="lg" onClick={addData}>
          Add Data
        </Button>
      </div>
      <Stats mean={mean} median={median} sd={sd} mode={mode} />
    </div>
  );
}

export default App;
