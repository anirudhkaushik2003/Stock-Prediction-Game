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
export const UPDATE_ASSETS = "UPDATE_ASSETS";

export const SET_FIRST_NAME = "SET_FIRST_NAME";
export const SET_LAST_NAME = "SET_LAST_NAME";

export const INCREMENT_STEP = "INCREMENT_STEP";
export const DECREMENT_STEP = "DECREMENT_STEP";


export const CREATE_POST = "CREATE_POST";



export const assetUpdates = (type: string) => ({
  type
});


export const incrementStep = (type: string) => ({
  type: INCREMENT_STEP
});

export const decrementStep = (type: string) => ({
  type: DECREMENT_STEP
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
  days: number[];
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

export const update_assets = (type: string, value: number) => ({
  type: UPDATE_ASSETS,
  payload: value

});