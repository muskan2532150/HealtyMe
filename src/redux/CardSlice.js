import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  PerPage:4,
  currentPage:1
}

 export const CardThunk = createAsyncThunk('CardThunk', async () => {
    const Carddata = await (await ( fetch('api.json'))).json();
    return Carddata;
  })

  export const CardSlice = createSlice({
    name:'Card',
    initialState,
    reducers:{
      onNavigateNext:(state)=>{state.currentPage++},
      onNavigatePrev:(state)=>{state.currentPage--},
      onChangeDataPerPage:(state,action)=>{state.PerPage = action.payload},
      OnClickCurrentPage:(state,action)=>{state.currentPage = action.payload}
    },
    extraReducers:(builder) => {
        builder.addCase(CardThunk.fulfilled,(state,action)=>{
            return {...state,data:[...action.payload]};
        });
    }
  })

  export const {onNavigateNext,onNavigatePrev,onChangeDataPerPage,OnClickCurrentPage} = CardSlice.actions;

  export default CardSlice.reducer;