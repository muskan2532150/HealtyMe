import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
  }

  const CardThunk = createAsyncThunk('CardThunk', async () => {
    const Carddata = await (await ( fetch('/api.json'))).json();
    return Carddata;
  })

  export const CardSlice = createSlice({
    name:'Card',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(CardThunk.fulfilled,(state,action)=>{
            return [...action.payload];
        });
    }
  })

  export const {} = CardSlice.actions;

  export default CardSlice.reducer;