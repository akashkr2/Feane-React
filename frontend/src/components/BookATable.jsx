import React, { useState } from "react";

const BookATable = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    personCount: "",
    reservationDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div id="bookTableDiv" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* === Heading === */}
        <div id="bookTableHead" className="mb-6 text-start">
          <h1 className="text-[2.5rem] font-bold text-black dancing-script">
            Book A Table
          </h1>
        </div>

        {/* === Body Section === */}
        <div
          id="bookTableBody"
          className="flex flex-col md:flex-row gap-8 text-gray-900"
        >
          {/* === Booking Form === */}
          <div className="w-full md:w-1/2">
            <form className="flex flex-col h-full gap-6 text-black">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="px-6 py-3 text-[1.05rem] border border-gray-400 rounded placeholder:text-gray-800"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="px-6 py-3 text-[1.05rem] border border-gray-400 rounded placeholder:text-gray-800"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="px-6 py-3 text-[1.05rem] border border-gray-400 rounded placeholder:text-gray-800"
              />
              <select
                name="personCount"
                value={formData.personCount}
                onChange={handleChange}
                className="px-6 py-3 text-[1.05rem] border border-gray-400 rounded"
              >
                <option value="" disabled>
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
                value={formData.reservationDate}
                onChange={handleChange}
                className="px-6 py-3 text-[1.05rem] border border-gray-400 rounded"
              />
              <button
                type="submit"
                className="bg-[#ffbe33] text-white px-6 py-[0.6rem] mt-3 text-[1.05rem] uppercase rounded-full w-[200px]"
              >
                Book Now
              </button>
            </form>
          </div>

          {/* === Location Map === */}
          <div className="w-full md:w-1/2">
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
