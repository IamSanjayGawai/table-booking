"use client";

import CalendarView from '../components/CalendarView';

export default function Home() {
  return (
    <div className="h-screen bg-gray-100">
      <div className="h-[120px] w-full bg-gradient-to-r from-blue-400 to-purple-500 flex justify-center items-center shadow-lg rounded-b-xl">
        <h1 className="text-center text-4xl font-extrabold text-white drop-shadow-lg">
          Restaurant Table Booking
        </h1>
      </div>

      <CalendarView />
    </div>
  );
}
