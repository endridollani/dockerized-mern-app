import { Tuple, configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
import { useDispatch, useSelector } from 'react-redux'

import rootReducers from './reducers'


export const store = configureStore({
  reducer: rootReducers,
  devTools: true,
  middleware: () => new Tuple(thunk)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
