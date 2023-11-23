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

const Instruction5 = () => {
    const dispatch = useDispatch();
    const step = useSelector((state: IGlobalState) => state.step);

    return (
        <Container maxW="container.lg" centerContent>
            <Heading as="h6" size="lg">
                You will now be paired with an opponent. You will be competing against an opponent. Good luck! (Step 4/4)
            </Heading>
        </Container >

    );
};

export default Instruction5;