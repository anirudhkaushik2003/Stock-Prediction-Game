import { ChakraProvider, Container, Heading } from "@chakra-ui/react";
import { Provider } from "react-redux";
import CanvasBoard from "./components/CanvasBoard";
import ScoreCard from "./components/ScoreCard";
import store from "./store";
import "./App.css";
import TextButtons from "./components/Questions";

const App = () => {

  return (
    <Provider store={store}>
      <ChakraProvider>
        <Container maxW="container.lg" centerContent>
          <Heading as="h1" size="xl">Basic Maths</Heading>
          <ScoreCard />
          <TextButtons />
        </Container>
      </ChakraProvider>
    </Provider>
  );
};

export default App;