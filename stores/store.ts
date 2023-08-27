import { configureStore } from '@reduxjs/toolkit'
import { choiceReducer } from './choiceSlice'

export const store = configureStore({
  reducer: {
    choose: choiceReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
