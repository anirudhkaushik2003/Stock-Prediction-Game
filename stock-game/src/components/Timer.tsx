import { Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { IGlobalState } from "../store/reducers";


import React, { useCallback, useEffect, useRef, useState } from "react";

import { useDispatch } from "react-redux";
import {
  incrementStep,
  INCREMENT_STEP,
  decrementTime,
  resetScore,
  incrementModeIndex,
  save_opp_score,
  save_score,
  SAVE_SCORE,
  SAVE_OPP_SCORE
} from "../store/actions";

const Timer = () => {
  const dispatch = useDispatch();
  const timeLeft = useSelector((state: IGlobalState) => state.timeLeft);
  const step = useSelector((state: IGlobalState) => state.step);

  // Calculate minutes and seconds
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const score = useSelector((state: IGlobalState) => state.score);
  const oppScore = useSelector((state: IGlobalState) => state.oppScore);

  const game2 = useSelector((state: IGlobalState) => state.game2);
  const game1 = useSelector((state: IGlobalState) => state.game1);




  useEffect(() => {

    const intervalId = setInterval(() => {
      if ((step === 3 || step === 6 || step === 9 || step === 12)) {
        dispatch(save_score(SAVE_SCORE));

        dispatch(decrementTime());
        if (step != 3) {
          dispatch(save_opp_score(SAVE_OPP_SCORE));
        }

      }

    }, 1000);

    return () => clearInterval(intervalId); // This clears the interval when the component unmounts
  }, []);

  useEffect(() => {
    if ((step === 3 || step === 6 || step === 9 || step === 12) && (timeLeft === 0)) {
      dispatch(decrementTime());
      dispatch(incrementStep(INCREMENT_STEP));
      dispatch(resetScore());
      dispatch(incrementModeIndex());


    }
  }, [timeLeft]);

  return (
    <Heading as="h1" size="xl" color="blue" mt={5} mb={5}> Time Left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds} </Heading>
  );
}

export default Timer;