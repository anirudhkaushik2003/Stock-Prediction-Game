import { ChakraProvider, Container, Heading } from "@chakra-ui/react";
import "./App.css";
import Game from "./components/Game";
import Instruction1 from "./components/Instruction1";
import Instruction2 from "./components/Instruction2";
import Instruction3 from "./components/Instruction3";
import Instruction4 from "./components/Instruction4";
import Instruction5 from "./components/Instruction5";
import Login from "./components/Login";
import ThankYou from "./components/ThankYou";
import { Button, Stack } from "@chakra-ui/react";
import { IGlobalState } from "./store/reducers";
import Search from "./components/Search";

import { useSelector, useDispatch } from "react-redux";
import {
  DECREMENT_STEP,
  INCREMENT_STEP,
  decrementStep,
  incrementStep,
} from "./store/actions";
import { Flex } from "@chakra-ui/layout";

const App = () => {

  // const step = store.getState().step;
  const step = useSelector((state: IGlobalState) => state.step);

  const dispatch = useDispatch();

  const handleBackward = () => {
    if (step > 0) {
      dispatch(decrementStep(DECREMENT_STEP));
    }
  }

  const handleForward = () => {
    if (step < 13) {
      dispatch(incrementStep(INCREMENT_STEP));
    }
  }


  return (
    <ChakraProvider>
      {(step === 0  || step === 2 || step === 4 || step === 7 || step === 10) ?
        <Flex justifyContent="space-between" position="fixed" bottom={0}  right={0} p={4}>
          {/* <Button
            colorScheme='teal'
            height="60px"
            width="200px"
            onClick={() => handleBackward()}
          // add flash animation
          >
            Back
          </Button> */}
          <Button
            colorScheme='teal'
            height="60px"
            width="200px"
            onClick={() => handleForward()}
          >
            Next
          </Button>

        </Flex> : null
      }
    </ChakraProvider >

  );
};

export default App;