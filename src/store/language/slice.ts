import { Language, LanguageObject } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LANGUAGES } from '../../constants';

// Define a type for the slice state
interface LanguageState {
  languageSelected: LanguageObject;
}

// Define the initial state using that type
const initialState: LanguageState = {
  languageSelected: LANGUAGES[Language.English],
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguageSelected: (state, action: PayloadAction<LanguageObject>) => ({
      ...state,
      languageSelected: action.payload,
    }),
  },
});

export const { setLanguageSelected } = languageSlice.actions;

export default languageSlice.reducer;
