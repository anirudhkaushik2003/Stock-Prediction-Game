import * as api from "../../api/index";

export const MOVE_RIGHT = "MOVE_RIGHT";
export const MOVE_LEFT = "MOVE_LEFT";
export const MOVE_UP = "MOVE_UP";
export const MOVE_DOWN = "MOVE_DOWN";

export const RIGHT = "RIGHT";
export const LEFT = "LEFT";

export const UP = "UP";

export const DOWN = "DOWN";

export const SET_DIS_DIRECTION = "SET_DIS_DIRECTION";

export const RESET = "RESET";
export const STOP_GAME = "STOP_GAME";
export const INCREASE_SNAKE = "INCREASE_SNAKE";
export const INCREMENT_SCORE = "INCREMENT_SCORE";
export const DECREMENT_SCORE = "DECREMENT_SCORE";
export const INCREMENT_OPP_SCORE = "INCREMENT_OPP_SCORE";
export const DECREMENT_OPP_SCORE = "DECREMENT_OPP_SCORE";
export const UPDATE_OPP_SCORE = "UPDATE_OPP_SCORE"; 

export const INCREMENT_STEP = 'INCREMENT_STEP';
export const DECREMENT_STEP = 'DECREMENT_STEP';


export const DECREMENT_TIME = 'DECREMENT_TIME';
export const RESET_TIME = 'RESET_TIME';

export const INCREMENT_MODE_INDEX = 'INCREMENT_MODE_INDEX';

export const SHUFFLE_MODES = 'SHUFFLE_MODES';

export const RESET_SCORE = "RESET_SCORE";

export const SAVE_OPP_SCORE = "SAVE_OPP_SCORE";
export const SAVE_SCORE = "SAVE_SCORE";

export const SET_FIRST_NAME = "SET_FIRST_NAME";
export const SET_LAST_NAME = "SET_LAST_NAME";


export const CREATE_POST = "CREATE_POST";


export interface ISnakeCoord {
  x: number;
  y: number;
}
export const makeMove = (dx: number, dy: number, move: string) => ({
  type: move,
  payload: [dx, dy]
});

export const setDisDirection = (direction: string) => ({
  type: SET_DIS_DIRECTION,
  payload: direction
});

export const resetGame = () => ({
  type: RESET
});

export const stopGame = () => ({
  type: STOP_GAME
});

export const increaseSnake = () => ({
  type: INCREASE_SNAKE
});

export const scoreUpdates = (type: string) => ({
  type
});

export const decrementTime = () => ({
  type: DECREMENT_TIME
});

export const oppScoreUpdates = (type: string, value: number) => ({
  type,
  payload: value
});

export const incrementStep = (type: string) => ({
  type: INCREMENT_STEP
});

export const decrementStep = (type: string) => ({
  type: DECREMENT_STEP
});

export const shuffleModes = (type: string) => ({
  type: SHUFFLE_MODES
});

export const resetScore = () => ({
  type: RESET_SCORE
});

export const incrementModeIndex = () => ({
  type: INCREMENT_MODE_INDEX
});

export const save_opp_score = (type: string) => ({
  type: SAVE_OPP_SCORE,
});

export const save_score = (type: string) => ({
  type: SAVE_SCORE,
});

export const set_first_name = (type: string, value: string) => ({
  type: SET_FIRST_NAME,
  payload: value
});

export const set_last_name = (type: string, value: string) => ({
  type: SET_LAST_NAME,
  payload: value

});

// export const create_post = (type: string, value: string) => ({
//   type: CREATE_POST,
//   payload: value

// });

export interface IPost {
  firstName: string;
  lastName: string;

  game1: number[];
  game2: number[];
  game3: number[];
  game4: number[];
  game2_opp: number[];
  game3_opp: number[];
  game4_opp: number[];

  modeOrder: number[];
};

export const createPost = (post:  IPost ) => async (dispatch: any) => {
  try{
    const {data} = await api.createPost(post);

    dispatch({type: CREATE_POST, payload: data});
  }
  catch(err){
    console.log(err);
  }
};