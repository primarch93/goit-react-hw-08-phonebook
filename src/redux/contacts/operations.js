import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (signal, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts', { signal });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`contacts/${id}`);
      return response.data /* .id */;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await axios.post('contacts', contact);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const toggleFavorite = createAsyncThunk(
  'contacts/toggleFavorite',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`contacts/${contact.id}`, contact);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`contacts/${contact.id}`, contact);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
