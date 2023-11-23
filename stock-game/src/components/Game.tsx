import { Container, Heading } from "@chakra-ui/react";
import ScoreCard from "./ScoreCard";
import TextButtons from "./Questions";
import OppScoreCard from "./OppScoreCard";
import Timer from "./Timer";

const Game = () => {

    return (
        <Container maxW="container.lg" centerContent>
            <Heading as="h1" size="xl">Basic Maths</Heading>
            <ScoreCard />
            <OppScoreCard />
            <Timer />
            <TextButtons />
        </Container>
    );
};

export default Game;