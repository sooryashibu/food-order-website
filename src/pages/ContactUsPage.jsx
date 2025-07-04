import React, { useState } from "react";

const ContactUsPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation: Ensure all fields are filled
    if (!name || !email || !message) {
      setError("All fields are required!");
      return;
    }
    
    // Reset error and show success alert
    setError("");
    alert("Your message has been submitted successfully!");
    
    // Clear form
    setName("");
    setEmail("");
    setMessage("");
  };

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

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="flex flex-col space-y-4">
              {/* Name Field */}
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 border rounded-md"
              />
              {/* Email Field */}
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 border rounded-md"
              />
              {/* Message Field */}
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="p-2 border rounded-md"
                rows="4"
              ></textarea>
              
              {/* Error Message */}
              {error && <div className="text-red-500 text-sm">{error}</div>}
              
              {/* Submit Button */}
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
