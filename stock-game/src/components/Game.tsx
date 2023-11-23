import { Container, Heading } from "@chakra-ui/react";
import ScoreCard from "./ScoreCard";
import Trading from "./Trading";

const Game = () => {

    return (
        <Container maxW="container.lg" centerContent>
            <Heading as="h1" size="xl">Trading</Heading>
            <ScoreCard />
            <Trading />
        </Container>
    );
};

export default Game;