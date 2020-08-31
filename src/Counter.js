//import { createStore, combineReducers } from 'redux';
import {configureStore, createAction, createReducer} from '@reduxjs/toolkit';

// Action types
const INCREMENT = 'timer/increment';
const DECREMENT = 'timer/decrement';


// Action creators
const increment = createAction('timer/increment');
const decrement = createAction('timer/decrement');
//increment(5) => {type: 'timer/increment', payload: 5}

// Reducer

const timer = createReducer(0, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload
});

const store = configureStore({
  reducer: {
    timer
  }
});

// const rootReducer = combineReducers({
//   timer,
// });

// Store
//const store = createStore(rootReducer);

// function increment(value) {
//   return {
//     type: INCREMENT,
//     payload: value,
//   };
// }
//
// function decrement(value) {
//   return {
//     type: DECREMENT,
//     payload: value,
//   };
// }
//
// // function timer(state = 0, action) {
//   switch (action.type) {
//     case INCREMENT:
//       return state + action.payload;
//
//     case DECREMENT:
//       return state - action.payload;
//
//     default:
//       return state;
//   }
// }
