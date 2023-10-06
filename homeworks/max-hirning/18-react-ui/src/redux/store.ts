import { tilesReducer } from './tiles'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    tiles: tilesReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>