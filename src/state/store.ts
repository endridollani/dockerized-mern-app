import { applyMiddleware, compose, createStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
import { useDispatch, useSelector } from 'react-redux'
import createSagaMiddleware from 'redux-saga';

import rootReducers from './reducers'

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const sagaMiddleWare = createSagaMiddleware();

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducers, composedEnhancer(applyMiddleware(sagaMiddleWare), applyMiddleware(thunk)))

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()