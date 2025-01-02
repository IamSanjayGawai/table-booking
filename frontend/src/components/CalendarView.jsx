import { useDispatch, useSelector } from 'react-redux';
import { setBookings } from '../features/bookingSlice';
import Calendar from 'react-calendar';
import axios from 'axios';
import 'react-calendar/dist/Calendar.css';
import BookingForm from './BookingForm';
import { useEffect, useState } from 'react';

const CalendarView = () => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { bookings } = useSelector((state) => state.booking);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/bookings`);
        dispatch(setBookings(response.data));
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };
    fetchBookings();
  }, [dispatch]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const tileDisabled = ({ date }) =>
    bookings.some((booking) => new Date(booking.date).toDateString() === date.toDateString());

  return (
    <div className=" w-full mx-auto mt-12 p-6 bg-white shadow-lg rounded-lg flex lg:flex-row xs:flex-col justify-center items-center">
      <div className=' xs:w-4/4 lg:w-2/4 flex justify-center items-center flex-col'>
      <h2 className="text-3xl font-bold text-center mb-6">Select a Date</h2>
      <Calendar
        onChange={handleDateSelect}
        value={selectedDate}
        tileDisabled={tileDisabled}
        className="border p-4 rounded-lg shadow-md "
      />
      </div>
      <BookingForm selectedDate={selectedDate.toDateString()} />
    </div>
  );
};

export default CalendarView;
