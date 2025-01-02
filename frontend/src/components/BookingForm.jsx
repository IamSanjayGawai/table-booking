import { useDispatch, useSelector } from 'react-redux';
import { setFormData, resetFormData } from '../features/bookingSlice';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SuccessModal from './SuccessModal';

const BookingForm = ({ selectedDate  }) => {
  const dispatch = useDispatch();
  const { formData } = useSelector((state) => state.booking);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedFormData = { ...formData, date: selectedDate };
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/bookings`, updatedFormData);
      setBookingDetails(updatedFormData);
      setIsModalOpen(true);
      dispatch(resetFormData());
    } catch (error) {
      console.error('Error booking:', error);
      alert('Failed to book. Please try again.');
    }
  };

  
  const handleCloseModal = () => {
    setIsModalOpen(false);
    window.location.reload();
  };

  return (
    <>
      <form className=" border  xs:w-full lg:w-[500px] mx-auto mt-8 bg-white shadow-lg p-6 rounded-lg" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-center mb-6">Booking Details</h2>
        
        <div className="mb-4">
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
          <input
            id="time"
            type="time"
            name="time"
            value={formData.time}
            onChange={(e) => dispatch(setFormData({ time: e.target.value }))}
            required
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Number of Guests</label>
          <input
            id="guests"
            type="number"
            name="guests"
            value={formData.guests}
            onChange={(e) => dispatch(setFormData({ guests: e.target.value }))}
            required
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => dispatch(setFormData({ name: e.target.value }))}
            required
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Details</label>
          <input
            id="contact"
            type="text"
            name="contact"
            value={formData.contact}
            onChange={(e) => dispatch(setFormData({ contact: e.target.value }))}
            required
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300">
          Book Now
        </button>
      </form>

      {/* Modal */}
      {isModalOpen && bookingDetails && (
       <SuccessModal bookingDetails={bookingDetails}   handleCloseModal={handleCloseModal}/>
      )}
    </>
  );
};

export default BookingForm;
