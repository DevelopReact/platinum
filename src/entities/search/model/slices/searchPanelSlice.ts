import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISearchPanel } from '../types/searchPanelTypes';

const initialState: ISearchPanel = {
  showDropdown: false,
  searchValue: ''
};

const searchPanelSlice = createSlice({
  name: 'searchPanel',
  initialState: initialState,
  reducers: {
    setShowDropDown(state, action: PayloadAction<boolean>) {
      state.showDropdown = action.payload;
    },

    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    }
  }
});

export const { actions: searchPanelAction, reducer: searchPanelReducer } =
  searchPanelSlice;
