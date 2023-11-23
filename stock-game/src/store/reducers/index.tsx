import {
  INCREMENT_STEP,
  DECREMENT_STEP,
  INCREMENT_GLOBAL_STEP,
  DECREMENT_GLOBAL_STEP,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  CREATE_POST,
  UPDATE_ASSETS,
} from "../actions";

export interface IGlobalState {
  step: number;
  assets: number;
  days: number[];

  firstName: string;
  lastName: string;
  global_index: number,
}

const globalState: IGlobalState = {
  step: 0,
  assets: 100000,
  days: [],
  firstName: "",
  lastName: "",
  global_index: 0,
};
const gameReducer = (state = globalState, action: any) => {
  switch (action.type) {


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

    case UPDATE_ASSETS:
      return {
        ...state,
        assets: state.assets + action.payload,
      };

    case INCREMENT_GLOBAL_STEP:
      return {
        ...state,
        global_index: state.global_index + 1,
      };

    case DECREMENT_GLOBAL_STEP:
      return {
        ...state,
        global_index: state.global_index - 1,
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