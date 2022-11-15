import React from "react";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Contact = () => {
  return (
    <section style={{ background: `url(${appointment})` }}>
      <div className="text-center">
        <h4 className="text-primary font-bold">Contact Us</h4>
        <h2 className="text-4xl text-white">Stay connected with us</h2>
      </div>
      <section className="p-6 dark:text-gray-100">
        <form
          novalidate=""
          className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md"
        >
          <div>
            <label for="name" className="block mb-1 ml-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 "
            />
          </div>
          <div>
            <label for="email" className="block mb-1 ml-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 "
            />
          </div>
          <div>
            <label for="message" className="block mb-1 ml-1">
              Message
            </label>
            <textarea
              id="message"
              type="text"
              placeholder="Message..."
              className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 "
            ></textarea>
          </div>
          <div className="text-center">
            <PrimaryButton>Send Message</PrimaryButton>
          </div>
        </form>
      </section>
    </section>
  );
};

export default Contact;
