import React from "react";
import Container from "../Container";
import { FaStar } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-[#4586ff] text-white">
      <Container>
        <div className="grid grid-cols-1  md:grid-cols-2   lg:grid-cols-3 gap-4 py-6">
          <div className="md:col-span-2 lg:col-span-1">
            {/* left-part */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white "></div>
              <p>Contact</p>
            </div>

            <div className="my-10">
              <h1 className="text-4xl max-w-80 font-semibold">
                Contact us for more information & get started
              </h1>
            </div>
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-400 text-xl" />
              <FaStar className="text-yellow-400 text-xl" />
              <FaStar className="text-yellow-400 text-xl" />
              <FaStar className="text-yellow-400 text-xl" />
              <FaStar className="text-yellow-400 text-xl" />
            </div>
          </div>

          <div>
            {/* middle part */}
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="placeholder:text-white w-full border-b focus:border pl-2 py-3 outline-0"
              />
            </div>
            <div className="my-8">
              <input
                type="tel"
                placeholder="Phone Number"
                className="placeholder:text-white  w-full border-b focus:border pl-2 py-3 outline-0 "
              />
            </div>
          </div>

          <div>
            {/* right part */}
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="placeholder:text-white  w-full border-b focus:border pl-2 py-3 outline-0"
              />
            </div>
            <div className="my-8">
              <input
                type="date"
                className=" placeholder:text-white w-full border-b focus:border pl-2 py-3 outline-0  date-input"
              />
            </div>
          </div>

          <div className="md:col-span-2 lg:col-start-2 lg:col-end-4 lg:mt-0">
            <textarea
              placeholder="Message or additional details"
              rows={6}
              className="placeholder:text-white  w-full border-b focus:border pl-2 py-3 outline-0 "
            ></textarea>
          </div>
          <div className="col-span-1 lg:col-start-2 lg:col-end-3 justify-start my-4">
            <input
              type="Submit"
              className="bg-white text-blue-400 py-3 px-10 rounded-full  font-semibold cursor-pointer"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
