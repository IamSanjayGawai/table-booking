import React from 'react'

const SuccessModal = ({bookingDetails, handleCloseModal}) => {
  return (
    <>
    
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity">
          <div className="bg-white rounded-lg p-8 w-96 text-center shadow-lg transform scale-105 transition duration-300">
            <h2 className="text-xl font-bold mb-4">Booking Successful!</h2>
            <p className="mb-6">Thank you for booking with us. Here are your booking details:</p>
            <ul className="text-left mb-6">
              <li><strong>Date:</strong> {bookingDetails.date}</li>
              <li><strong>Time:</strong> {bookingDetails.time}</li>
              <li><strong>Guests:</strong> {bookingDetails.guests}</li>
              <li><strong>Name:</strong> {bookingDetails.name}</li>
              <li><strong>Contact:</strong> {bookingDetails.contact}</li>
            </ul>
            <button onClick={handleCloseModal} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
              Close
            </button>
          </div>
        </div>
    </>
  )
}

export default SuccessModal