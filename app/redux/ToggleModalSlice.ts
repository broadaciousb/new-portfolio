import { createSlice, configureStore } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
interface ModalState {
  isModalOpen: boolean
}

// Define the initial state using that type
const initialState: ModalState = {
  isModalOpen: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
  },
})

export const { toggleModal } = modalSlice.actions

const store = configureStore({
  reducer:modalSlice.reducer
})

export default modalSlice.reducer