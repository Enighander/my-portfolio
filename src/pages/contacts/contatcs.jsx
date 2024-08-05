import React from "react";
import Swal from "sweetalert2";
import axios from "axios";

const Contacts = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      await axios.post(
        "https://script.google.com/macros/s/AKfycbwHs4JbP9Z1LZ9i5r1-mTtnf8ozFRFUSUPotEC0bXX37Bfdh1PE1PxR8whbJwCVLc60CQ/exec",
        formData
      );
      Swal.fire({
        icon: "success",
        title: "Submitted successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Form submission failed:", error);
      Swal.fire({
        icon: "error",
        title: "Form submission failed",
        text: "An error occurred. Please try again later.",
      });
    }
  };

  return (
    <div>
      <div id="contact" className="grid grid-cols-5 grid-rows-8 gap-4">
        <div className="col-span-3 row-span-5 col-start-2 row-start-2">
          <div>
            <h1 className="sm:mb-10 sm:text-3xl text-2xl flex justify-center font-medium title-font font-boldmb-4 text-gray-900">
              Contact Me
            </h1>
          </div>
          <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full sm:min-w-[300px] lg:max-w-[1000px]">
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@domain.com"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="subject"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Enter your subject"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    required
                  />
                </div>
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
                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    required
                  ></textarea>
                </div>
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
      </div>
    </div>
  );
};

export default Contacts;
