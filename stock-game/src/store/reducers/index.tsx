import {
  DOWN,
  INCREASE_SNAKE,
  DECREMENT_SCORE,
  INCREMENT_SCORE,
  INCREMENT_OPP_SCORE,
  DECREMENT_OPP_SCORE,
  UPDATE_OPP_SCORE,
  ISnakeCoord,
  LEFT,
  RESET,
  RESET_SCORE,
  RIGHT,
  SET_DIS_DIRECTION,
  UP,
  DECREMENT_TIME,
  INCREMENT_STEP,
  DECREMENT_STEP,
  SHUFFLE_MODES,
  INCREMENT_MODE_INDEX,
  SAVE_OPP_SCORE,
  SAVE_SCORE,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  CREATE_POST,
} from "../actions";

export interface IGlobalState {
  snake: ISnakeCoord[] | [];
  disallowedDirection: string;
  score: number;
  oppScore: number;
  timeLeft: number;
  step: number;
  modeOrder: number[];
  modes: string[];
  modeIndex: number;
  game1: number[];
  game2: number[];
  game3: number[];
  game4: number[];

  game2_opp: number[];
  game3_opp: number[];
  game4_opp: number[];

  firstName: string;
  lastName: string;

}

const duration = 120;
const globalState: IGlobalState = {
  snake: [
    { x: 580, y: 300 },
    { x: 560, y: 300 },
    { x: 540, y: 300 },
    { x: 520, y: 300 },
    { x: 500, y: 300 },
  ],
  disallowedDirection: "",
  score: 0,
  oppScore: 0,
  timeLeft: duration,
  step: 0,
  modeOrder: [0, 1, 2],
  modes: ["worse", "comparible", "better"],
  modeIndex: 0,
  game1: [],
  game2: [],
  game3: [],
  game4: [],

  game2_opp: [],
  game3_opp: [],
  game4_opp: [],

  firstName: "",
  lastName: "",
};
const gameReducer = (state = globalState, action: any) => {
  switch (action.type) {
    case RIGHT:
    case LEFT:
    case UP:
    case DOWN: {
      let newSnake = [...state.snake];
      newSnake = [{
        x: state.snake[0].x + action.payload[0],
        y: state.snake[0].y + action.payload[1],
      }, ...newSnake];
      newSnake.pop();

      return {
        ...state,
        snake: newSnake,
      };
    }
    case DECREMENT_TIME: {
      if (state.timeLeft > 0) {
        return {
          ...state,
          timeLeft: state.timeLeft - 1
        };
      }
      else {
        return {
          ...state,
          timeLeft: duration
        };

      }

    }

    case SET_DIS_DIRECTION:
      return { ...state, disallowedDirection: action.payload };

    case RESET:
      return {
        ...state,
        snake: [
          { x: 580, y: 300 },
          { x: 560, y: 300 },
          { x: 540, y: 300 },
          { x: 520, y: 300 },
          { x: 500, y: 300 },
        ],
        disallowedDirection: ""
      };

    case INCREASE_SNAKE:
      const snakeLen = state.snake.length;
      return {
        ...state,
        snake: [
          ...state.snake,
          {
            x: state.snake[snakeLen - 1].x - 20,
            y: state.snake[snakeLen - 1].y - 20,
          },
        ],
      };

    case RESET_SCORE:
      return {
        ...state,
        score: 0,
        oppScore: 0,
      };

    case INCREMENT_SCORE:
      return {
        ...state,
        score: state.score + 1,
      };
    case DECREMENT_SCORE:
      return {
        ...state,
        score: state.score - 1,
      };

    case INCREMENT_OPP_SCORE:
      return {
        ...state,
        score: state.oppScore + 1,
      };
    case DECREMENT_OPP_SCORE:
      return {
        ...state,
        score: state.oppScore - 1,
      };

    case UPDATE_OPP_SCORE:
      return {
        ...state,
        oppScore: action.payload,
      }

    case INCREMENT_STEP:
      return {
        ...state,
        step: state.step + 1,
      }

    case DECREMENT_STEP:
      return {
        ...state,
        step: state.step - 1,
      }

    case SHUFFLE_MODES:
      const { modeOrder } = state;
      const shuffledModeOrder = [...modeOrder];

      // Fisher-Yates algorithm for shuffling the array
      for (let i = shuffledModeOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledModeOrder[i], shuffledModeOrder[j]] = [shuffledModeOrder[j], shuffledModeOrder[i]];
      }

      return {
        ...state,
        modeOrder: shuffledModeOrder,
      };

    case INCREMENT_MODE_INDEX:
      if (state.modeIndex < 2) {
        return {
          ...state,
          modeIndex: state.modeIndex + 1,
        };
      }
      else {
        return {
          ...state,
        };
      }

    case SAVE_SCORE:
      if (state.step === 3) {
        return {
          ...state,
          game1: [...state.game1, state.score],
        };
      }
      else if (state.step === 6) {
        return {
          ...state,
          game2: [...state.game2, state.score],
        };
      }

      else if (state.step === 9) {
        return {
          ...state,
          game3: [...state.game3, state.score],
        };
      }
      else if (state.step === 12) {
        return {
          ...state,
          game4: [...state.game4, state.score],
        };
      }
      else {
        return {
          ...state,
        };
      }

    case SAVE_OPP_SCORE:
      if (state.step === 6) {
        return {
          ...state,
          game2_opp: [...state.game2_opp, state.oppScore],
        };
      }

      else if (state.step === 9) {
        return {
          ...state,
          game3_opp: [...state.game3_opp, state.oppScore],
        };
      }
      else if (state.step === 12) {
        return {
          ...state,
          game4_opp: [...state.game4_opp, state.oppScore],
        };
      }
      else {
        return {
          ...state,
        };
      }

    case SET_FIRST_NAME:
      console.log(action.payload);
      return {
        ...state,
        firstName: action.payload,
      };

    case SET_LAST_NAME:
      return {
        ...state,
        lastName: action.payload,
      };

    case CREATE_POST:
      return {
        ...state,
      };


    default:
      return state;
  }
};



export default gameReducer;