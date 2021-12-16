import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  month: {}
}

export const slice = createSlice({
  name: 'setMonth',
  initialState,
  reducers: {
    setMonth: (state, action) => {
      state.month = action.payload
    }
  }
})

export const { setMonth } = slice.actions

export default slice.reducer