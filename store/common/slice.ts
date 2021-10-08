import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface CommonDataState {
  isWhiteBackground: boolean;
}

// Define the initial state using that type
const initialState: CommonDataState = {
  isWhiteBackground: false,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setIsWhiteBackground: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isWhiteBackground: action.payload,
    }),
  },
});

export const { setIsWhiteBackground } = commonSlice.actions;

export default commonSlice.reducer;
