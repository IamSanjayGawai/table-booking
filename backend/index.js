require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let bookings = []; // In-memory storage for bookings

// Create Booking
app.post('/api/bookings', (req, res) => {
  const { date, time, guests, name, contact } = req.body;
  const existingBooking = bookings.find(
    (b) => b.date === date && b.time === time
  );

  if (existingBooking) {
    return res.status(400).json({ message: 'Slot already booked!' });
  }

  const newBooking = { id: Date.now(), date, time, guests, name, contact };
  bookings.push(newBooking);
  res.status(201).json(newBooking);
});


// Get All Bookings
app.get('/api/bookings', (req, res) => {
  res.status(200).json(bookings);
});

// Delete Booking
app.delete('/api/bookings/:id', (req, res) => {
  const { id } = req.params;
  bookings = bookings.filter((b) => b.id !== parseInt(id, 10));
  res.status(200).json({ message: 'Booking deleted successfully' });
});

// Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
