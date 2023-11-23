import { Box, Button, Flex, Heading, Kbd, Stack } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { IGlobalState } from "../store/reducers";
import store from "../store";

import {createPost} from "../api/index";

import{
  shuffleModes,
  SHUFFLE_MODES,
} from "../store/actions";
import { useEffect } from "react";

const ThankYou = () => {

  type AppDispatch = typeof store.dispatch;
  const dispatch: AppDispatch = useDispatch();

  const firstName_m = useSelector((state: IGlobalState) => state.firstName);
  const lastName_m = useSelector((state: IGlobalState) => state.lastName);

  const game1_m = useSelector((state: IGlobalState) => state.game1);
  const game2_m = useSelector((state: IGlobalState) => state.game2);
  const game3_m = useSelector((state: IGlobalState) => state.game3);
  const game4_m = useSelector((state: IGlobalState) => state.game4);

  const game2_opp_m = useSelector((state: IGlobalState) => state.game2_opp);
  const game3_opp_m = useSelector((state: IGlobalState) => state.game3_opp);
  const game4_opp_m = useSelector((state: IGlobalState) => state.game4_opp);

  const modeOrder_m = useSelector((state: IGlobalState) => state.modeOrder);

  const postData = {firstName: firstName_m, lastName: lastName_m, game1: game1_m, game2: game2_m, game3: game3_m, game4: game4_m, game2_opp: game2_opp_m, game3_opp: game3_opp_m, game4_opp: game4_opp_m, modeOrder: modeOrder_m};

  useEffect(() => {
    (async () => {
      await createPost(postData).then((response) => { console.log(response); }).catch((error) => { console.log(error); });
      console.log(postData);
    })();
  }, []);

  return (
    <Container maxW="container.lg" centerContent>
      <Heading as="h6" size="lg">
        Thank you! Page
      </Heading>
    </Container >
  );
};

export default ThankYou;