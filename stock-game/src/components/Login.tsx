import { Box, Flex, Heading, Kbd, Stack } from "@chakra-ui/react";

import { Formik, Field, Form } from "formik";
import {
  set_first_name,
  set_last_name,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  incrementStep,
  INCREMENT_STEP,
} from "../store/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { set } from "lodash";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const dispatch = useDispatch();

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
    dispatch(set_first_name(SET_FIRST_NAME, event.target.value.toLowerCase()));
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
    dispatch(set_last_name(SET_LAST_NAME, event.target.value.toLowerCase()));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Dispatch an action or perform any other logic with the first name and last name
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    dispatch(incrementStep(INCREMENT_STEP));
  };

  return (
    <Container maxW="container.lg" centerContent>
      <form onSubmit={handleSubmit}>
        <FormControl id="firstName" isRequired>
          <FormLabel>First Name</FormLabel>
          <Input type="text" value={firstName} onChange={handleFirstNameChange} />
        </FormControl>
        <FormControl id="lastName" isRequired>
          <FormLabel>Last Name</FormLabel>
          <Input type="text" value={lastName} onChange={handleLastNameChange} />
        </FormControl>
        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
};

export default Login;




