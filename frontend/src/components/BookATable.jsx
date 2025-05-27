// BookATable.jsx
import React from 'react';

const BookATable = () => {
  return (
    <div id="bookTableDiv" className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* === Heading === */}
        <div id="bookTableHead" className="mb-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800 font-dancing capitalize">
            Book a Table
          </h1>
        </div>

        {/* === Body Section === */}
        <div id="bookTableBody" className="flex flex-col md:flex-row gap-8">
          {/* === Booking Form === */}
          <div id="book-a-table" className="w-full md:w-1/2">
            <div id="bookingForm" className="flex flex-col h-full gap-4">
              <input
                type="text"
                name="name"
                id="nameIP"
                placeholder="Your Name"
                className="form-input px-4 py-3 border border-gray-400 rounded placeholder:text-[1.1rem] placeholder:text-gray-800"
              />
              <input
                type="tel"
                name="mob"
                id="mobIP"
                placeholder="Phone Number"
                className="form-input px-4 py-2 border border-gray-400 rounded"
              />
              <input
                type="email"
                name="email"
                id="emailIP"
                placeholder="Your Email"
                className="form-input px-4 py-2 border border-gray-400 rounded"
              />
              <select
                name="personCount"
                id="personCountIP"
                className="form-select px-4 py-2 border border-gray-400 rounded"
              >
                <option value="def" disabled selected>
                  How many persons?
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <input
                type="date"
                name="reservationDate"
                id="reservationDateIP"
                className="form-input px-4 py-2 border border-gray-400 rounded"
              />
              <button
                id="bookingBtn"
                className="bg-blue-600 text-white px-6 py-2 rounded w-1/3"
              >
                Book Now
              </button>
            </div>
          </div>

          {/* === Location Map === */}
          <div id="store-location" className="w-full md:w-1/2">
            <iframe
              title="store-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.2884171043165!2d77.45477337442388!3d23.268967607090044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c6967f58e0dbf%3A0x65d0724cf8368e2d!2sRICR%20-%20Raj%20Institute%20of%20Coding%20%26%20Robotics%20%7C%20Best%20Java%20Coding%20Classes%20In%20Bhopal!5e0!3m2!1sen!2sin!4v1742139335558!5m2!1sen!2sin"
              className="w-full h-96 rounded-xl border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookATable;
