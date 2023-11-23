import { Button } from "@chakra-ui/button";
import { Stack, VStack } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import '../App.css'; // import a CSS file where you define your flash animation
import React, { useState } from 'react';
import {
    FormControl,
    FormLabel,
    NumberInput,
    NumberInputField,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInputStepper
} from "@chakra-ui/react";

const Trading = () => {
    const [optionsCount, setOptionsCount] = useState(0);
    const [toggleForm, setToggleForm] = useState(false);
    const [type, setType] = useState(0);

    const handleClick = (type: number) => {
        if (type === 1 || type === 2) {
            setToggleForm(true);
            setType(type);
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setToggleForm(false);
        console.log("Amount:", optionsCount);
        if (type === 1) {
            // Handle buy logic
        } else if (type === 2) {
            // Handle sell logic
        }
    };

    const handleAmountChange = (valueAsString: string, valueAsNumber: number) => {
        setOptionsCount(valueAsNumber);
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
                            key={2}
                            colorScheme='teal'
                            height="60px"
                            width="200px"
                            onClick={() => handleClick(2)}
                        >
                            Sell
                        </Button>

                        <Button
                            key={3}
                            colorScheme='teal'
                            height="60px"
                            width="200px"
                            onClick={() => handleClick(3)}
                        >
                            Hold
                        </Button>
                    </Stack>
                </VStack>
            ) : (
                <form onSubmit={handleSubmit}>
                    <FormControl isRequired>
                        <FormLabel>Enter Number of items to trade</FormLabel>
                        <NumberInput min={1} value={optionsCount} onChange={handleAmountChange}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>
                    <Button type="submit">Submit</Button>

                </form>
            )}
        </Box>
    );
}

export default Trading;
