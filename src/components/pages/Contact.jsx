import react, { useState } from "react";

export default function Contact() {
  // useState for each input - track the value of each input boxes
  // State for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // State for error messages
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // onBlur event -> check the value of the state and see if its empty
  const handleBlur = (field) => {
    if (field === "name") {
      setNameError(name.trim() === "" ? "Name is required" : "");
    }
    if (field === "email") {
      if (email.trim() === "") {
        setEmailError("Email is required");
      } else if (!emailRegex.test(email)) {
        setEmailError("Invalid email address");
      } else {
        setEmailError("");
      }
    }
    if (field === "message") {
      setMessageError(message.trim() === "" ? "Message is required" : "");
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if any field is empty or invalid
    if (!name || !email || !message || emailError) {
      handleBlur("name");
      handleBlur("email");
      handleBlur("message");
    } else {
      console.log("Form Submitted", { name, email, message });
    }
  };

  return (
      <div>
        <h1>Contact</h1>
        <div className="flex items-center justify-center p-12">
          <div className="mx-auto w-full max-w-[550px]">
            <form onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() => handleBlur("name")}
                  className={`w-full rounded-md border py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md ${nameError ? "border-red-500" : "border-[#e0e0e0]"}`}
                />
                {nameError && <span className="text-red-500">{nameError}</span>}
              </div>
  
              {/* Email Input */}
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => handleBlur("email")}
                  className={`w-full rounded-md border py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md ${emailError ? "border-red-500" : "border-[#e0e0e0]"}`}
                />
                {emailError && <span className="text-red-500">{emailError}</span>}
              </div>
  
              {/* Message Input */}
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  id="message"
                  placeholder="Type your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onBlur={() => handleBlur("message")}
                  className={`w-full resize-none rounded-md border py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md ${messageError ? "border-red-500" : "border-[#e0e0e0]"}`}
                ></textarea>
                {messageError && <span className="text-red-500">{messageError}</span>}
              </div>
  
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  