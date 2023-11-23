import { Button } from "@chakra-ui/button";
import { Stack, VStack } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import '../App.css'; // import a CSS file where you define your flash animation
import React, { useState, useEffect } from 'react';
import getEquation from "./Equations";
import { useDispatch, useSelector } from "react-redux";
import {
    DECREMENT_SCORE,
    INCREMENT_SCORE,
    RESET_SCORE,
    scoreUpdates,
  } from "../store/actions";

interface Props {
    equation: Array<number | string>;
}

function shuffle(array: Array<number | string>) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

const TextButtons = () => {

    const dispatch = useDispatch();


    const [Redflash, setRedflash] = useState(false);
    const [Greenflash, setGreenflash] = useState(false);


    const [currentQuestion, setCurrentQuestion] = useState(getEquation());
    const [answers, setAnswers] = useState(currentQuestion.slice(1));
    const [question, setQuestion] = useState(currentQuestion[0]);
    const [correctAnswer, setCorrectAnswer] = useState(currentQuestion[1]);



    // get remaining elements




    // const handleClick = (ans: number) => {
    //     setRedflash(ans !== correctAnswer);
    //     setGreenflash(ans === correctAnswer);

    //     setCurrentQuestion(getEquation());

    //     var newAnswers = currentQuestion.slice(1);
    //     newAnswers = shuffle(newAnswers);
    //     setAnswers(newAnswers);

    //     setQuestion(currentQuestion[0]);
    //     setCorrectAnswer(currentQuestion[1]);

    //     console.log("Reached")

    // };

    const handleClick = (ans: number) => {
        // Reset flash states
        setRedflash(false);
        setGreenflash(false);
    
        setTimeout(() => {
            // Set flash states based on answer
            setRedflash(ans !== correctAnswer);
            setGreenflash(ans === correctAnswer);

            // Update score
            if (ans === correctAnswer) {
                dispatch(scoreUpdates(INCREMENT_SCORE));
            } else {
                dispatch(scoreUpdates(DECREMENT_SCORE));
            }
    
            // Generate new question and answers
            const newQuestion = getEquation();
            setCurrentQuestion(newQuestion);
    
            var newAnswers = newQuestion.slice(1);
            newAnswers = shuffle(newAnswers);
            setAnswers(newAnswers);
    
            setQuestion(newQuestion[0]);
            setCorrectAnswer(newQuestion[1]);
        }, 100); // Delay of 100ms
    };


    // You can now use equation in your component
    return (
        // align div center
        <div className={`App ${Redflash ? 'red-flash' : ''} ${Greenflash ? 'green-flash' : ''}`}>
            {/* rest of your component */}
            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                width='100%'
                py={12}
                bgPosition='center'
                bgRepeat='no-repeat'
                mb={2}
                className={Redflash ? 'Redflash' : Greenflash ? 'Greenflash' : ''}

            >
                <VStack spacing={4} align="center">
                    <Button colorScheme='yellow' fontSize="50px" height="300px" width="300px"> {question}</Button>
                    <Stack spacing={4} direction='row' align='center'>
                        {answers.map((key, index) => (
                            <Button
                                key={index}
                                colorScheme='teal'
                                height="60px"
                                width="200px"
                                onClick={() => handleClick(key as number)}
                                className={Redflash ? 'Redflash' : Greenflash ? 'Greenflash' : ''}
                            // add flash animation
                            >
                                {key}
                            </Button>
                        )
                        )
                        }

                    </Stack>
                </VStack>

            </Box>
        </div>

    );
};

export default TextButtons;