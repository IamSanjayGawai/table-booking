import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from '../features/bookingSlice';

export const store = configureStore({
  reducer: {
    booking: bookingReducer,
  },
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = (selector) => useSelector(selector);
