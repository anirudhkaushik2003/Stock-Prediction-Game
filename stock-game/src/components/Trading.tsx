import { Button } from "@chakra-ui/button";
import { Stack, VStack } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import '../App.css'; // import a CSS file where you define your flash animation
import React, { useState, useEffect } from 'react';

import { FormControl, FormLabel, NumberInput, NumberInputField, NumberDecrementStepper, NumberIncrementStepper, NumberInputStepper } from "@chakra-ui/react";


import { useDispatch, useSelector } from "react-redux";
import {
    UPDATE_ASSETS,
    update_assets
} from "../store/actions";

interface Props {
    equation: Array<number | string>;
}


const Trading = () => {
    const dispatch = useDispatch();
    const [optionsCount, setOptionsCount] = useState(0);
    const [toggleForm, setToggleForm] = useState(true);

    const handleClick = (type: number) => {
        setOptionsCount(prevCount => prevCount + 1);
    };


    return (
        <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            width='100%'
            py={12}
            bgPosition='center'
            bgRepeat='no-repeat'
            mb={2}
        >
            {toggleForm === false ? (
                <VStack spacing={4} align="center">
                    <Button colorScheme='yellow' fontSize="50px" height="300px" width="300px"> </Button>
                    <Stack spacing={4} direction='row' align='center'>
                        <Button
                            key={1}
                            colorScheme='teal'
                            height="60px"
                            width="200px"
                            onClick={() => handleClick(1)}
                        >
                            Buy
                        </Button>

                        <Button
                            key={1}
                            colorScheme='teal'
                            height="60px"
                            width="200px"
                            onClick={() => handleClick(2)}
                        >
                            Sell
                        </Button>

                        <Button
                            key={1}
                            colorScheme='teal'
                            height="60px"
                            width="200px"
                            onClick={() => handleClick(3)}
                        >
                            Hold
                        </Button>
                    </Stack>
                </VStack>) :
                (<FormControl isRequired>
                    <FormLabel>Enter Number of items to trade</FormLabel>
                    <NumberInput min={1}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>)
            }
        </Box>
    );
}

export default Trading;