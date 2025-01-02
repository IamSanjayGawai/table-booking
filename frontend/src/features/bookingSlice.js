import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    date: '',
    time: '',
    guests: '',
    name: '',
    contact: '',
  },
  bookings: [],
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {

    setFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    setBookings: (state, action) => {
      state.bookings = action.payload;
    },
    resetFormData: (state) => {
      state.formData = initialState.formData;
    },
  },
});

export const { setSelectedDate, setFormData, setBookings, resetFormData } = bookingSlice.actions;

export default bookingSlice.reducer;
