import {
    CallEffect,
    delay,
    put,
    PutEffect,
    takeLatest,
  } from "redux-saga/effects";
  import {
    UPDATE_ASSETS,
  } from "../actions";
  
  export function* moveSaga(params: {
    type: string;
    payload: number;
  }): Generator<
    | PutEffect<{ type: string; payload: string }>
    | CallEffect<true>
  > {
    
  }
  
  function* watcherSagas() {
    yield takeLatest(
      [],
      moveSaga
    );
  }
  
  export default watcherSagas;