import { configureStore, combineReducers } from '@reduxjs/toolkit'
import modalReducer from './ToggleModalSlice'
import LoadingReducer from './LoadingSlice';
// ...

const reducer = combineReducers({
  toggleModal: modalReducer,
    loading: LoadingReducer,
})

export const store = configureStore({
  reducer: reducer,
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store