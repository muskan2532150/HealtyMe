import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
  }

  export const CardSlice = createSlice({
    name:'Card',
    initialState,
    reducers:{},
  })

  export const {} = CardSlice.actions;

  export default CardSlice.reducer;