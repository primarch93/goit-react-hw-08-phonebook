import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  deleteContact,
  addContact,
  /*   toggleFavorite,
  editContact, */
} from './operations';
import { logOut } from '../auth/operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        console.log(action.payload);
        console.log(state);
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.items.findIndex(
          contact => contact.id === action.payload
        );
        state.items.splice(index, 1);
        state.error = null;
        /* state.items.filter(contact => contact.id !== action.payload); */
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
        state.error = null;
      })
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      })
      /* .addCase(toggleFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          item => item.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addCase(editContact.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.items.findIndex(
          item => item.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
        state.error = null;
      }) */
      .addMatcher(
        isAnyOf(
          /*  editContact.pending,
          toggleFavorite.pending, */
          addContact.pending,
          deleteContact.pending,
          fetchContacts.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          /*  editContact.rejected,
          toggleFavorite.rejected, */
          addContact.rejected,
          deleteContact.rejected,
          fetchContacts.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
