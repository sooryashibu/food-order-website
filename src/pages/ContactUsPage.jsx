// src/pages/ContactUsPage.jsx
import React from "react";

const ContactUsPage = () => {
  return (
    <div className="contact-us-page min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>

        <div className="text-lg">
          <h3 className="text-2xl font-semibold mb-4">Our Contact Details</h3>
          <p className="mb-2">
            <span className="font-bold">Address:</span> 123 Food Street, New York, NY, 10001
          </p>
          <p className="mb-2">
            <span className="font-bold">Phone:</span> +1 (800) 123-4567
          </p>
          <p className="mb-2">
            <span className="font-bold">Email:</span> contact@foodorder.com
          </p>
          <p className="mb-2">
            <span className="font-bold">Business Hours:</span> Mon - Fri: 9:00 AM - 6:00 PM
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
          <p>If you have any questions, feel free to reach out to us using the details above or by filling out the contact form below:</p>

          {/* Dummy form for contact */}
          <form className="mt-4">
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-2 border rounded-md"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 border rounded-md"
              />
              <textarea
                placeholder="Your Message"
                className="p-2 border rounded-md"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
