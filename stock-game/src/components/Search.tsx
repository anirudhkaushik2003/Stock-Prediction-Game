import { Box, Button, Flex, Heading, Kbd, Stack } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Spinner } from '@chakra-ui/react'
import { useSelector } from "react-redux";
import { IGlobalState } from "../store/reducers";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { useDispatch } from "react-redux";
import {
  INCREMENT_STEP,
  incrementStep,
} from "../store/actions";

const Search = () => {
  const dispatch = useDispatch();
  const step = useSelector((state: IGlobalState) => state.step);

  useEffect(() => {
    if ((step === 5 || step === 8 || step === 11)) {
      const randomDuration = Math.floor(Math.random() * 5000) + 5000; // Random duration between 5s and 10s
      // const randomDuration = Math.floor(Math.random() * 2000); // Random duration between 5s and 10s

      const timeoutId = setTimeout(() => {
        dispatch(incrementStep(INCREMENT_STEP));
      }, randomDuration);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [dispatch]);

  return (
      <Container maxW="container.lg" centerContent>
        <Spinner height="300px" width="300px" speed="0.9s"></Spinner>
        <h3>Searching for opponent...</h3>
      </Container>
  );
};

export default Search;