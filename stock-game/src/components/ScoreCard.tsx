import { Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { IGlobalState } from "../store/reducers";

const ScoreCard = () => {
    const score = useSelector((state: IGlobalState) => state.assets);
    return (
        <Heading as="h1" size="xl" mt={5} mb={5} color="green">Current Score: {score}</Heading>
    );
}

export default ScoreCard;