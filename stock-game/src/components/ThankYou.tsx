import { Box, Button, Flex, Heading, Kbd, Stack } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { IGlobalState } from "../store/reducers";
import store from "../store";

import {createPost} from "../api/index";

import{
} from "../store/actions";
import { useEffect } from "react";

const ThankYou = () => {

  type AppDispatch = typeof store.dispatch;
  const dispatch: AppDispatch = useDispatch();

  const firstName_m = useSelector((state: IGlobalState) => state.firstName);
  const lastName_m = useSelector((state: IGlobalState) => state.lastName);

  const days_m = useSelector((state: IGlobalState) => state.days);
  const postData = {
    firstName: firstName_m,
    lastName: lastName_m,
    days: days_m,
  };


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