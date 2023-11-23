import { Box, Button, Flex, Heading, Kbd, Stack } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import {
  shuffleModes,
  SHUFFLE_MODES,
} from "../store/actions";

const Instruction1 = () => {

  const dispatch = useDispatch();
  dispatch(shuffleModes(SHUFFLE_MODES));

  return (
    <Container maxW="container.lg" centerContent>
      <Heading as="h6" size="lg">
        Instructions
      </Heading>
      <p>
        After Pressing next you will be directed to a login page, fill up your information so your results can be logged
        <br></br>
        You will now play a simple arithmetic game consisting of basic addition, substraction, division and multiplication
        <br></br>
        There are 4 sections, each is of two minutes, in the first section you will play on single player mode, this is to benchmark your performance.
        <br></br>
        After this you will play three multiplayer games where you will compete against an opponent.
        <br></br>
        Each question is worth 1 point, each wrong answer will merit a negative mark.
        <br></br>
        Your opponent's score will be updated every second.
      </p>
      <Heading as="h6" size="lg">
        Please Do not Refresh the page, otherwise you will have to restart the game
      </Heading>
    </Container >
  );
};

export default Instruction1;